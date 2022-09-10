import React, {useState} from 'react';
import {toast} from "react-toastify";

toast.configure()


function notify(message) {
    toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

function notify2(message) {
    toast.success(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}


const DisplayChangePassword = (props) => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [changePassword, setChangePassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const updatePassword = async (current_password, new_password, new_password_confirmation) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/password/update";

        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
            },

            body: JSON.stringify({
                current_password: current_password,
                new_password: new_password,
                new_password_confirmation: new_password_confirmation
            })
        })
        const content = await rawResponse.json();
        console.log(content)
        return rawResponse.status
    }


    function handleClickButton(e, currentPassword, changePassword, repeatPassword) {
        e.preventDefault();
        if (changePassword === '' || repeatPassword === '') {
            notify('لطفا در صورت تمایل به تغییر رمز، فیلدهای خالی را تکمیل کنید.');
        }
        if (changePassword !== repeatPassword) {
            notify('رمز عبور جدید با تکرار رمز عبور جدید مطابقت ندارد.');
        }
        if (changePassword === repeatPassword) {
            updatePassword(currentPassword, changePassword, repeatPassword).then(res => {
                if (res === 200) {
                    notify2('رمز عبور با موفقیت تغییر کرد.');
                } else {
                    notify('لطفا اطلاعات را به درستی وارد کنید.')
                }
            })
        }
    }

    if (props.changePassType === 'display-change-password') {
        return (
            <div className='DisplayChangePassword'>
                <div className='DisplayChangePassword-right-content'>
                    <label className='DisplayChangePassword-right-content-current-password-label'>کلمه‌ی عبور
                        فعلی</label>
                    <input
                        className='DisplayChangePassword-right-content-current-password-input'
                        type='text'
                        placeholder={'کلمه‌ی عبور فعلی خود را وارد کنید.'}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        defaultValue={currentPassword}
                    />
                    <a id='DisplayChangePassword-right-content-current-password-link' onClick=''>فراموشی کلمه‌ی
                        عبور</a>
                </div>
                <div className='DisplayChangePassword-left-content'>
                    <label className='DisplayChangePassword-left-content-change-password-label'>کلمه‌ی عبور جدید</label>
                    <input
                        className='DisplayChangePassword-left-content-change-password-input'
                        type='text'
                        placeholder={'کلمه‌ی عبور جدید خود را وارد کنید.'}
                        onChange={(e) => setChangePassword(e.target.value)}
                        defaultValue={changePassword}
                    />
                    <label className='DisplayChangePassword-left-content-change-password-label l4'>تکرار کلمه‌ی عبور
                        جدید</label>
                    <input
                        className='DisplayChangePassword-left-content-change-password-input'
                        type='text'
                        placeholder={'کلمه‌ی عبور جدید خود را تکرار کنید.'}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        defaultValue={repeatPassword}
                    />

                    <button className='DisplayChangePassword-left-content-change-password-button'
                            onClick={(event) => handleClickButton(event, currentPassword, changePassword, repeatPassword)}>ذخیره
                    </button>
                </div>

            </div>
        )
    } else {
        return (
            <p className='DisplayAccountInfoBody-text'>کلمه‌ی عبور خود را در اینجا می‌توانید تغییر دهید.</p>
        )
    }
}

const DisplaySystemExit = (props) => {
    const [changeTime, setChangeTime] = useState('')
    if (props.changePassType === 'display-system-exit') {
        return (
            <div className='DisplaySystemExit'>
                <div className='DisplaySystemExit-enable'>
                    <p className='DisplaySystemExit-text'>فعالسازی خروج از سیستم خودکار</p>
                    <input type="checkbox" id="switch"
                           className="checkbox"/>
                    <label htmlFor="switch" className="toggle t4"/>
                </div>
                <div className='DisplaySystemExit-input'>
                    <label className='DisplaySystemExit-input-label'>بعد از هر چند دقیقه</label>
                    <input
                        className='DisplaySystemExit-change-time-input'
                        type='number'
                        min='1'
                        onChange={(e) => setChangeTime(e.target.value)}
                        defaultValue={changeTime}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <p className='DisplayAccountInfoBody-text t3'>اطلاعات مربوط به خروج خودکار را در اینجا می‌توانید تغییر
                دهید.</p>
        )
    }
}

const Security = () => {
    const [clickedSecuritySettingType, setClickedSecuritySettingType] = useState('');

    return (
        <div className='Security'>
            <div className='DisplayChangePassword-header'>
                <p className='DisplayChangePassword-header-text'>تغییر کلمه‌ی عبور</p>
                <p className={'DisplayChangePassword-header-change-text' + ((clickedSecuritySettingType === 'display-change-password') ? ' DisplayChangePassword-header-change-text-active' : ' disable')}
                   onClick={() => setClickedSecuritySettingType('display-change-password')}>ایجاد تغییر</p>
            </div>
            <div className='DisplayChangePassword-body'>
                <DisplayChangePassword changePassType={clickedSecuritySettingType}/>
            </div>
            <hr className='DisplayAccountInfo-hr'/>

            <div className='DisplaySystemExit-header'>
                <p className='DisplaySystemExit-header-text'>خارج شدن از سیستم بصورت خودکار</p>
                <p className={'DisplaySystemExit-header-change-text' + ((clickedSecuritySettingType === 'display-system-exit') ? ' DisplaySystemExit-header-change-text-active' : ' disable')}
                   onClick={() => setClickedSecuritySettingType('display-system-exit')}>ایجاد تغییر</p>
            </div>
            <div className='DisplaySystemExit-body'>
                <DisplaySystemExit changePassType={clickedSecuritySettingType}/>
            </div>
        </div>
    );
};


export default Security;