import React, {Component} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class AuthenticationEmail extends Component {

    mailAuth = async (values) => {
        const url = "http://www.justfortestjustfortest.ir/api/verification-code/send";

        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: values.mailAddress
            })
        })

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

    continue = (e, values) => {
        e.preventDefault()
        if (this.validateEmail(values.mailAddress) && values.password !== "") {
            this.mailAuth(values)
            this.props.nextStep();
        } else {
            this.notify()
        }
    }
    validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }



    render() {
        const {values, handleChange} = this.props;
        return (
            <div className='AuthenticationEmail'>

                <p> برای ثبت نام، آدرس ایمیل و رمز عبور خود را وارد کنید.</p>
                <label className='form-label auth-label'> آدرس ایمیل </label>
                <input
                    className='form-control auth-input'
                    type='email'
                    required
                    onChange={handleChange('mailAddress')}
                    defaultValue={values.mailAddress}
                />
                <label className='form-label auth-label'> رمز عبور </label>
                <input
                    className='form-control auth-input'
                    required
                    onChange={handleChange('password')}
                    defaultValue={values.password}
                />
                <button className='form-button auth-button'
                        onClick={(event) => this.continue(event, values)}>ادامه
                </button>
            </div>
        );
    }
}

export default AuthenticationEmail;