import React, {Component} from 'react'
import {toast} from "react-toastify";
import isURL from "validator/es/lib/isURL";
import {withRouter} from 'react-router-dom';


toast.configure()


export class UserSignUpS3 extends Component {

    register = async (accountInfo) => {
        const url = "https://www.justfortestjustfortest.ir/api/register";

        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: accountInfo.email,
                password: accountInfo.password,
                password_confirmation: accountInfo.password,
                name: accountInfo.nameOfCompany,
                phone: accountInfo.phoneNumber,
                profile_pic_path: accountInfo.logo,
                about_us: accountInfo.description,
                business_area: accountInfo.industry,
                company_type: accountInfo.typeOfCompany,
                employee_count: accountInfo.numberOfEmployees,
                "country": "country",
                "city": "city",
                address: accountInfo.address,
                phone_number: accountInfo.phoneNumber,
                contact_email: accountInfo.mailAddress,
                establish_year: accountInfo.year,
                website_address: accountInfo.webAddress
            })
        })
        const content = await rawResponse.json();
        return [content, rawResponse.status];
    }
    validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    validatePhoneNumber = (phoneNumber) => {
        const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        return re.test(phoneNumber);
    }

    validate = (val) => {
        return !!isURL(val);
    };

    routingFunction = (param) => {
        this.props.history.push({
            pathname: `/` + param
        });
    }
    continue = (e, values) => {
        e.preventDefault();
        if (!values.webAddress.includes('http://') || !!values.webAddress.includes('https://')) {
            values.webAddress = 'http://' + values.webAddress;
        }
        if (this.validate(values.webAddress) && this.validateEmail(values.mailAddress) && this.validatePhoneNumber(values.phoneNumber) && values.address !== "") {
            const accountInfo = this.props.values;
            console.log(accountInfo)

            this.register(accountInfo).then(res => {
                localStorage.setItem('bearer_token', res[0].token);




                localStorage.setItem('user_id', res[0]['user'].id);







                localStorage.setItem('user_name', res[0]['user'].email);
                // console.log(localStorage.getItem('user_name'));
                // console.log(localStorage.getItem('bearer_token'));
                if (res[1] === 201) {
                    this.routingFunction('Home')
                }

            })

        } else {
            this.notify()
        }
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();

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

    render() {
        const {values, handleChange, mailAndPass} = this.props;
        values.password = mailAndPass.password
        values.email = mailAndPass.mailAddress


        return (
            <div className='userSignUp'>

                <div className='form-top'>
                    <button className='userSignUp-button-design button3'>۱</button>
                    <p className='top-form-text text2'>مشخصات صفحه‌ی شرکت</p>
                    <hr className='hr-top-form'/>
                    <button className='userSignUp-button-design button2'>۲</button>
                    <p className='top-form-text text2'>اطلاعات شرکت</p>
                    <hr className='hr-top-form'/>
                    <button className='userSignUp-button-design button1 button2'>۳</button>
                    <p className='top-form-text text1'>راه‌های ارتباطی</p>

                </div>

                <form className='userSignUpForm'>


                    <label className='form-label l2'>آدرس وب‌سایت</label>
                    <input
                        className='form-control'
                        type='url'
                        placeholder='با http, https و یا www شروع می‌شود'
                        required
                        onChange={handleChange('webAddress')}
                        defaultValue={values.webAddress}
                    />


                    <label className='form-label l3'>آدرس ایمیل</label>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='example@gmail.com'
                        required
                        onChange={handleChange('mailAddress')}
                        defaultValue={values.mailAddress}
                    />


                    <label className='form-label l3'>شماره تلفن</label>
                    <input
                        className='form-control'
                        type='tel'
                        placeholder='۰۲۱-۱۲۳۴۵۶۷۸'
                        required
                        onChange={handleChange('phoneNumber')}
                        defaultValue={values.phoneNumber}
                    />


                    <label className='form-label l3'>آدرس</label>
                    <textarea
                        className='form-control-textArea'
                        placeholder='آدرس خود را وارد کنید'
                        required
                        onChange={handleChange('address')}
                        defaultValue={values.address}
                    />
                    <button className='form-button fbtn1' onClick={this.back}>مرحله‌ی قبل</button>
                    <button className='form-button' onClick={(event) => this.continue(event, values)}>ذخیره
                    </button>


                </form>


            </div>
        )
    }
}

export default withRouter(UserSignUpS3);
