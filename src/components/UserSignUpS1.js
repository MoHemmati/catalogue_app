import React, {Component} from 'react'
import {toast} from "react-toastify";

toast.configure()



export class UserSignUpS1 extends Component {
    continue = (e, values) => {
        e.preventDefault();
        if (values.nameOfCompany !== "" && values.year !== "" && values.description !== "") {
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


    render() {

        const {values, handleChange, handleLogoChange} = this.props;


        return (
            <div className="userSignUp">
                <div className='form-top'>
                    <button className='userSignUp-button-design button1'>۱</button>
                    <p className='top-form-text text1'>مشخصات صفحه‌ی شرکت</p>
                    <hr className='hr-top-form'/>
                    <button className='userSignUp-button-design button2'>۲</button>
                    <p className='top-form-text'>اطلاعات شرکت</p>
                    <hr className='hr-top-form'/>
                    <button className='userSignUp-button-design button2'>۳</button>
                    <p className='top-form-text'>راه‌های ارتباطی</p>

                </div>
                <form className='userSignUpForm'>
                    <label className='form-label'>نام شرکت</label>
                    <input
                        className='form-control'
                        type='text'
                        required
                        placeholder='نام شرکت را وارد کنید...'
                        onChange={handleChange('nameOfCompany')}
                        defaultValue={values.nameOfCompany}
                    />

                    <label className='form-label'>سال تاسیس</label>
                    <select className='form-select'
                            required
                            onChange={handleChange('year')}
                            defaultValue={values.year}
                    >
                        <option>سال تاسیس را انتخاب کنید</option>
                        <option value='1370'>۱۳۷۰</option>
                        <option value='1371'>۱۳۷۱</option>
                        <option value='1372'>۱۳۷۲</option>
                        <option value='1373'>۱۳۷۳</option>
                        <option value='1374'>۱۳۷۴</option>
                        <option value='1375'>۱۳۷۵</option>
                        <option value='1376'>۱۳۷۶</option>
                        <option value='1377'>۱۳۷۷</option>
                        <option value='1378'>۱۳۷۸</option>
                        <option value='1379'>۱۳۷۹</option>
                        <option value='1380'>۱۳۸۰</option>
                        <option value='1381'>۱۳۸۱</option>
                        <option value='1382'>۱۳۸۲</option>
                        <option value='1383'>۱۳۸۳</option>
                        <option value='1384'>۱۳۸۴</option>
                        <option value='1385'>۱۳۸۵</option>
                        <option value='1386'>۱۳۸۶</option>
                        <option value='1387'>۱۳۸۷</option>
                        <option value='1388'>۱۳۸۸</option>
                        <option value='1389'>۱۳۸۹</option>
                        <option value='1390'>۱۳۹۰</option>
                        <option value='1391'>۱۳۹۱</option>
                        <option value='1392'>۱۳۹۲</option>
                        <option value='1393'>۱۳۹۳</option>
                        <option value='1394'>۱۳۹۴</option>
                        <option value='1395'>۱۳۹۵</option>
                        <option value='1396'>۱۳۹۶</option>
                        <option value='1397'>۱۳۹۷</option>
                        <option value='1398'>۱۳۹۸</option>
                        <option value='1399'>۱۳۹۹</option>
                        <option value='1400'>۱۴۰۰</option>
                    </select>


                    <label className='form-label'>توضیحات در مورد شرکت</label>
                    <textarea
                        className='form-control-textArea'
                        required
                        placeholder='توضیحات در مورد شرکت'
                        onChange={handleChange('description')}
                        defaultValue={values.description}
                    />


                    <div className="file-upload">
                        <label className='form-label'>لوگو</label>
                        <div className="image-upload-wrap">
                            <input className="file-upload-input" type='file' onChange={handleLogoChange('logo')}
                                   accept="image/*"/>
                            <div className="drag-text">
                                <h3>عکس را انتخاب کنید یا به اینجا بکشید</h3>
                            </div>
                        </div>
                    </div>

                    <button className='form-button' onClick={(event) => this.continue(event, values)}>مرحله‌ی بعد</button>

                </form>

            </div>

        )
    }
}

export default UserSignUpS1
