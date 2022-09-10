import React, {Component} from 'react'
import {toast} from "react-toastify";

toast.configure()


export class UserSignUpS2 extends Component {

    continue = (e, values) => {
        e.preventDefault();
        if (values.typeOfCompany !== "" && values.industry !== "" && this.validateNumberField(values.numberOfEmployees) === true) {
            this.props.nextStep();
        } else {
            this.notify()
        }
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
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    validateNumberField = myNumber => {
        const numberRegEx = /\-?\d*\.?\d{1,2}/;
        return numberRegEx.test(String(myNumber).toLowerCase());
    };

    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="userSignUp">

                <div className='form-top'>
                    <button className='userSignUp-button-design button3'>۱</button>
                    <p className='top-form-text text2'>مشخصات صفحه‌ی شرکت</p>
                    <hr className='hr-top-form'/>
                    <button className='userSignUp-button-design button1 button2'>۲</button>
                    <p className='top-form-text text1'>اطلاعات شرکت</p>
                    <hr className='hr-top-form'/>
                    <button className='userSignUp-button-design button2'>۳</button>
                    <p className='top-form-text'>راه‌های ارتباطی</p>

                </div>

                <form className='userSignUpForm'>
                    <label className='form-label l2'>صنعت</label>

                    <select className='form-select'
                            onChange={handleChange('industry')}
                            defaultValue={values.industry}
                    >
                        <option>صنعت فعالیتی شرکت را انتخاب کنید</option>
                        <option value="Music">Music</option>
                        <option value="Banking">Banking</option>
                        <option value="Design">Design</option>
                    </select>


                    <label className='form-label l3'>نوع شرکت</label>
                    <select className='form-select'
                            onChange={handleChange('typeOfCompany')}
                            defaultValue={values.typeOfCompany}
                    >
                        <option>نوع شرکت را انتخاب کنید</option>
                        <option value="Dolati">دولتی</option>
                        <option value="NimeDolati">نیمه دولتی</option>
                        <option value="Khosousi">خصوصی</option>
                    </select>


                    <label className='form-label l3'>تعداد کارکنان شرکت</label>
                    <input
                        className='form-control'
                        type='number'
                        min='0'
                        placeholder='تعداد کارکنان را وارد کنید'
                        required
                        onChange={handleChange('numberOfEmployees')}
                        defaultValue={values.numberOfEmployees}
                    />
                    <button className='form-button fbtn1' onClick={this.back}>مرحله‌ی قبل</button>
                    <button className='form-button' onClick={(event) => this.continue(event, values)}>مرحله‌ی بعد
                    </button>
                </form>
            </div>
        )
    }
}

export default UserSignUpS2
