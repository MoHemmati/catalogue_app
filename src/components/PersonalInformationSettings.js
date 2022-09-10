import React, {useState} from 'react';
import DisplayAccountInfo from "./DisplayAccountInfo";
import Security from "./Security";
import AboutUs from "./AboutUs";

const DisplayPersonalInformationSettings = (props) => {
    if (props.personalInfoType === 'account-info') {
        return (
            <DisplayAccountInfo/>
        )
    } else if (props.personalInfoType === 'security') {
        return (
            <Security/>
        )
    } else if (props.personalInfoType === 'about-us') {
        return (
            <AboutUs/>
        )
    } else return <div/>


}

const PersonalInformationSettings = () => {
    const [clickedSettingType, setClickedSettingType] = useState('account-info')
    return (
        <div className='PersonalInformationSettings'>
            <div className='PersonalInformationSettings-section'>
                <div
                    className={'PersonalInformationSettings-section-text-div' + ((clickedSettingType === 'account-info') ? ' settings-section-div-active' : ' disable')}
                    onClick={() => setClickedSettingType('account-info')}>
                    <p className={'PersonalInformationSettings-section-text' + ((clickedSettingType === 'account-info') ? ' settings-section-active' : ' disable')}>اطلاعات
                        کاربری</p>
                </div>
                <div
                    className={'PersonalInformationSettings-section-text-div' + ((clickedSettingType === 'security') ? ' settings-section-div-active' : ' disable')}
                    onClick={() => setClickedSettingType('security')}>
                    <p className={'PersonalInformationSettings-section-text' + ((clickedSettingType === 'security') ? ' settings-section-active' : ' disable')}>امنیت</p>
                </div>
                <div
                    className={'PersonalInformationSettings-section-text-div' + ((clickedSettingType === 'about-us') ? ' settings-section-div-active' : ' disable')}
                    onClick={() => setClickedSettingType('about-us')}>
                    <p className={'PersonalInformationSettings-section-text' + ((clickedSettingType === 'about-us') ? ' settings-section-active' : ' disable')}>درباره‌ی
                        ما</p>
                </div>
                <div
                    className={'PersonalInformationSettings-section-text-div t2' + ((clickedSettingType === 'questions') ? ' settings-section-div-active' : ' disable')}
                    onClick={() => setClickedSettingType('questions')}>
                    <p className={'PersonalInformationSettings-section-text t2' + ((clickedSettingType === 'questions') ? ' settings-section-active' : ' disable')}>سوالات
                        متداول</p>
                </div>
            </div>
            <div className='PersonalInformationSettings-details'>
                <DisplayPersonalInformationSettings personalInfoType={clickedSettingType}/>
            </div>
        </div>
    )
}

export default PersonalInformationSettings;