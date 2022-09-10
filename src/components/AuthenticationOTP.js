import React, {Component} from 'react';
import {toast} from "react-toastify";
import Countdown from "react-countdown";


const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele, index) => {
    ele.addEventListener('keydown', (e) => {
        if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus()
    })
    ele.addEventListener('input', (e) => {
        const [first, ...rest] = e.target.value
        e.target.value = first ?? ''
        if (index !== inputElements.length - 1 && first !== undefined) {
            inputElements[index + 1].focus()
            inputElements[index + 1].value = rest.join('')
            inputElements[index + 1].dispatchEvent(new Event('input'))
        }
    })
})


function onSubmit() {
    return [...document.getElementsByTagName('input')]
        .filter(({name}) => name)
        .map(({value}) => value)
        .join('')
}



const CountDown = () => {
    return(
        <div className='auth-resend'>
            <p className='auth-resend-message'>کد را دریافت نکردید؟</p>
            <p className="auth-link" onClick={() => window.location.reload(false)
            }>ارسال مجدد کد</p>
        </div>

    )
}

const renderer = ({seconds, completed}) => {
    if (completed) {
        return <CountDown/>;
    } else {
        return <span className='auth-resend-message'>ارسال مجدد کد تا {seconds} ثانیه‌ی دیگر... </span>;
    }
};


class AuthenticationOTP extends Component {

    validationCode = async (code, mailAddress) => {
        const url = "http://www.justfortestjustfortest.ir/api/verify";

        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: mailAddress,
                verification_code: code
            })
        })

        return rawResponse.status
    }

    notify = () => {
        toast.error('لطفا اطلاعات را بطور صحیح وارد کنید.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    continue = (e, mailAddress) => {
        e.preventDefault()
        this.validationCode(onSubmit(), mailAddress).then(response => {
            if (response === 200) {
                console.log(response)
                this.props.nextStep();
            } else {
                this.notify()
            }
        });
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();

    }


    render() {
        const {values} = this.props;


        return (
            <div className='AuthenticationEmail'>

                <p>کد ارسال شده به آدرس {values.mailAddress} را وارد کنید.</p>


                <div className='confirmationCode-group'>
                    <input name='code' className='code-input' required maxLength='1'/>
                    <input name='code' className='code-input' required maxLength='1'/>
                    <input name='code' className='code-input' required maxLength='1'/>
                    <input name='code' className='code-input' required maxLength='1'/>
                    <input name='code' className='code-input' required maxLength='1'/>
                    <input name='code' className='code-input' required maxLength='1'/>
                </div>

                <div className='button-group'>
                    <button className='form-button auth-button'
                            onClick={(event) => this.continue(event, values.mailAddress)}>تایید
                    </button>
                    <button className='form-button auth-button btnEditMail'
                            onClick={this.back}>ویرایش ایمیل
                    </button>
                </div>
                <Countdown
                    date={Date.now() + 60000}
                    renderer={renderer}
                />


            </div>
        );
    }
}

export default AuthenticationOTP;