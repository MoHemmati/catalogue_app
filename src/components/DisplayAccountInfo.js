import React, {useState} from 'react';
import {toast} from "react-toastify";
import isURL from "validator/es/lib/isURL";
import axios from 'axios';


toast.configure()

function notify(message) {
    toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

function error_notify(message) {
    toast.error(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const DisplayAccountInfoBody = (props) => {


    const [changeNameOfCompany, setChangeNameOfCompany] = useState('');
    const [changeYear, setChangeYear] = useState('');
    const [changeDescription, setChangeDescription] = useState('');
    const logo = new FormData();
    const [nameStatus, setNameStatus] = useState('');
    const [yearStatus, setYearStatus] = useState('');
    const [descriptionStatus, setDescriptionStatus] = useState('');
    const [logoStatus, setLogoStatus] = useState('');


    const updateName = async (name) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";

        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
            },

            body: JSON.stringify({
                name: name
            })
        })
        const content = await rawResponse.json();
        setNameStatus(rawResponse.status);
        return content;
    }

    const updateYear = async (year) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";

        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
            },

            body: JSON.stringify({
                establish_year: year
            })
        })
        const content = await rawResponse.json();
        setYearStatus(rawResponse.status);
        return content
    }

    const updateDescription = async (description) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";
        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
            },

            body: JSON.stringify({
                about_us: description
            })
        })
        const content = await rawResponse.json();
        setDescriptionStatus(rawResponse.status);
        return content
    }

    const updateLogo = async (logo) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
            }
        }

        axios.post(url, logo, config)
            .then(response => {
                if (response.status === 200){
                    notify('???????? ???? ???????????? ?????????? ??????.')
                }
            })
            .catch(error => {
                console.log(error);
            });

    }

    if (props.changeType === 'display-account-info') {
        return (
            <div>
                <div className='DisplayAccountInfoBody'>
                    <div className='DisplayAccountInfoBody-section1'>
                        <div className='DisplayAccountInfoBody-section1-name-of-company'>
                            <label className='DisplayAccountInfoBody-section1-name-of-company-label'>?????? ????????</label>
                            <input
                                className='DisplayAccountInfoBody-section1-name-of-company-input'
                                type='text'
                                onChange={(e) => setChangeNameOfCompany(e.target.value)}
                                onBlur={() => {
                                    updateName(changeNameOfCompany).then(() => {
                                        if (nameStatus === 200) {
                                            notify('?????? ???????? ???? ???????????? ?????????? ??????.')
                                        }
                                    })
                                }}
                            />
                        </div>
                        <div className='DisplayAccountInfoBody-section1-year'>
                            <label className='DisplayAccountInfoBody-section1-year-label'>?????? ??????????</label>
                            <select
                                className='DisplayAccountInfoBody-section1-year-select'
                                onChange={(e) => setChangeYear(e.target.value)}
                                defaultValue={changeYear}
                                onBlur={() => {
                                    updateYear(changeYear).then(() => {
                                        if (yearStatus === 200) {
                                            notify('?????? ?????????? ???? ???????????? ?????????? ??????.')
                                        }
                                    })
                                }}
                            >
                                <option value='1370'>????????</option>
                                <option value='1371'>????????</option>
                                <option value='1372'>????????</option>
                                <option value='1373'>????????</option>
                                <option value='1374'>????????</option>
                                <option value='1375'>????????</option>
                                <option value='1376'>????????</option>
                                <option value='1377'>????????</option>
                                <option value='1378'>????????</option>
                                <option value='1379'>????????</option>
                                <option value='1380'>????????</option>
                                <option value='1381'>????????</option>
                                <option value='1382'>????????</option>
                                <option value='1383'>????????</option>
                                <option value='1384'>????????</option>
                                <option value='1385'>????????</option>
                                <option value='1386'>????????</option>
                                <option value='1387'>????????</option>
                                <option value='1388'>????????</option>
                                <option value='1389'>????????</option>
                                <option value='1390'>????????</option>
                                <option value='1391'>????????</option>
                                <option value='1392'>????????</option>
                                <option value='1393'>????????</option>
                                <option value='1394'>????????</option>
                                <option value='1395'>????????</option>
                                <option value='1396'>????????</option>
                                <option value='1397'>????????</option>
                                <option value='1398'>????????</option>
                                <option value='1399'>????????</option>
                                <option value='1400'>????????</option>
                            </select>
                        </div>
                    </div>
                    <div className='DisplayAccountInfoBody-section2'>
                        <div className='DisplayAccountInfoBody-section2-description'>
                            <label className='DisplayAccountInfoBody-section2-description-label'>?????????????? ???? ????????
                                ????????</label>
                            <textarea
                                className='DisplayAccountInfoBody-section2-description-textArea'
                                onChange={(e) => setChangeDescription(e.target.value)}
                                defaultValue={changeDescription}
                                onBlur={() => {
                                    updateDescription(changeDescription).then(() => {
                                        if (descriptionStatus === 200) {
                                            notify('?????????????? ???? ???????? ???????? ???? ???????????? ?????????? ??????.')
                                        }
                                    })
                                }}
                            />
                        </div>
                        <div className='DisplayAccountInfoBody-section2-logo'>
                            <label className='DisplayAccountInfoBody-section2-description-label'>????????</label>
                            <div className="file-upload fu2">
                                <div className="image-upload-wrap">
                                    <input className="file-upload-input" type='file' accept='image/*'
                                           onChange={(e) => {
                                               logo.set('profile_pic', e.target.files[0]);
                                               if (logo.getAll("profile_pic").length !== 0) {
                                                   console.log(logo.get('profile_pic'));
                                                   updateLogo(logo);
                                               }
                                           }}
                                    />
                                    <div className="drag-text">
                                        <h3>?????? ???? ???????????? ???????? ???? ???? ?????????? ??????????</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <p className='DisplayAccountInfoBody-text'>???????????? ?????????? ???????? ??????????? ???????? ???? ????????????? ?????????????? ???? ???? ??????????
                ??????????????????? ?????????? ????????.</p>
        )
    }
}
const DisplayCompanyInfoBody = (props) => {
    const [changeTypeOfIndustry, setChangeTypeOfIndustry] = useState('');
    const [changeTypeOfCompany, setChangeTypeOfCompany] = useState('');
    const [changeNumberOfEmployees, setChangeNumberOfEmployees] = useState('');


    const [industryTypeStatus, setIndustryType] = useState('');
    const [companyTypeStatus, setCompanyTypeStatus] = useState('');
    const [numberOfEmployeesStatus, setNumberOfEmployees] = useState('');


    const updateIndustryType = async (industryType) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";
        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
            },

            body: JSON.stringify({
                business_area: industryType
            })
        })
        const content = await rawResponse.json();
        setIndustryType(rawResponse.status);
        return content
    }

    const updateCompanyType = async (companyType) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";
        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
            },

            body: JSON.stringify({
                company_type: companyType
            })
        })
        const content = await rawResponse.json();
        setCompanyTypeStatus(rawResponse.status);
        return content
    }

    const updateNumberOfEmployees = async (noe) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";
        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
            },

            body: JSON.stringify({
                employee_count: noe
            })
        })
        const content = await rawResponse.json();
        setNumberOfEmployees(rawResponse.status);
        return content
    }


    if (props.changeType === 'display-company-info') {
        return (
            <div className='DisplayCompanyInfoBody'>
                <div className='DisplayCompanyInfoBody-section1'>
                    <div className='DisplayCompanyInfoBody-section1-type-of-industry'>
                        <label className='DisplayCompanyInfoBody-section1-type-of-industry-label'>?????? ????????</label>
                        <select
                            className='DisplayCompanyInfoBody-section1-type-of-industry-select'
                            onChange={(e) => setChangeTypeOfIndustry(e.target.value)}
                            defaultValue={changeTypeOfIndustry}
                            onBlur={() => {
                                updateIndustryType(changeTypeOfIndustry).then(() => {
                                    if (industryTypeStatus === 200) {
                                        notify('?????? ???????? ???? ???????????? ?????????? ??????.')
                                    }
                                })
                            }}
                        >
                            <option value='music'>????????????</option>
                            <option value='programming'>?????????????????????????</option>
                            <option value='clothing'>??????????</option>
                            <option value='food'>??????????</option>
                            <option value='electronic'>??????????????????</option>
                        </select>
                    </div>
                    <div className='DisplayCompanyInfoBody-section1-type-of-company'>
                        <label className='DisplayCompanyInfoBody-section1-type-of-company-label'>?????? ????????</label>
                        <select
                            className='DisplayCompanyInfoBody-section1-type-of-company-select'
                            onChange={(e) => setChangeTypeOfCompany(e.target.value)}
                            defaultValue={changeTypeOfCompany}
                            onBlur={() => {
                                updateCompanyType(changeTypeOfCompany).then(() => {
                                    if (companyTypeStatus === 200) {
                                        notify('?????? ???????? ???? ???????????? ?????????? ??????.')
                                    }
                                })
                            }}
                        >
                            <option value='khosusi'>??????????</option>
                            <option value='dolati'>??????????</option>
                            <option value='nime dolati'>???????? ??????????</option>
                        </select>
                    </div>
                </div>
                <div className='DisplayCompanyInfoBody-section2'>
                    <div className='DisplayCompanyInfoBody-section2-number-of-employees'>
                        <label className='DisplayCompanyInfoBody-section2-number-of-employees-label'>??????????
                            ??????????????</label>
                        <input
                            className='DisplayCompanyInfoBody-section2-number-of-employees-input'
                            type='number'
                            min='0'
                            placeholder={changeNumberOfEmployees}
                            onChange={(e) => setChangeNumberOfEmployees(e.target.value)}
                            defaultValue={changeNumberOfEmployees}
                            onBlur={() => {
                                updateNumberOfEmployees(changeNumberOfEmployees).then(() => {
                                    if (numberOfEmployeesStatus === 200) {
                                        notify('?????????? ?????????????? ???? ???????????? ?????????? ??????.')
                                    }
                                })
                            }}
                        />
                    </div>
                </div>


            </div>
        )
    } else {
        return (
            <p className='DisplayAccountInfoBody-text'>?????????????? ???????? ???? ???? ?????????? ??????????????????? ?????????? ????????.</p>
        )
    }
}

const DisplayCommunicationInfo = (props) => {
    const [changeWebAddress, setChangeWebAddress] = useState('');
    const [changeMailAddress, setChangeMailAddress] = useState('');
    const [changeAddress, setChangeAddress] = useState('');
    const [changePhoneNumber, setChangePhoneNumber] = useState('');

    const [webAddressStatus, setWebAddressStatus] = useState('');
    const [mailAddressStatus, setMailAddressStatus] = useState('');
    const [addressStatus, setAddressStatus] = useState('');
    const [phoneNumberStatus, setPhoneNumberStatus] = useState('');


    const updateWebAddress = async (webAddress) => {
        if (isURL(webAddress)) {
            const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";
            if (!webAddress.includes('http://') || !!webAddress.includes('https://')) {
                setChangeWebAddress('http://' + webAddress);
            }
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
                },

                body: JSON.stringify({
                    website_address: webAddress
                })
            })
            const content = await rawResponse.json();
            setWebAddressStatus(rawResponse.status);
            return content
        } else {
            error_notify('???????? ???????? ??????????????? ???? ???? ?????????? ???????? ????????.')
            setWebAddressStatus('406')
        }

    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const updateMailAddress = async (mailAddress) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";
        if (validateEmail(mailAddress)) {
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
                },

                body: JSON.stringify({
                    contact_email: mailAddress
                })
            })
            const content = await rawResponse.json();
            setMailAddressStatus(rawResponse.status);
            return content
        } else {
            error_notify('???????? ?????????? ???? ???? ?????????? ???????? ????????.')
            setMailAddressStatus('406')
        }
    }

    const updateAddress = async (address) => {
        const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";
        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
            },

            body: JSON.stringify({
                address: address
            })
        })
        const content = await rawResponse.json();
        setAddressStatus(rawResponse.status);
        return content
    }

    function validatePhoneNumber(phoneNumber) {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(phoneNumber);
    }

    const updatePhoneNumber = async (phoneNumber) => {

        if (validatePhoneNumber(phoneNumber)) {
            const url = "http://www.justfortestjustfortest.ir/api/accounts/business/profile/information/update";
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
                },

                body: JSON.stringify({
                    address: phoneNumber
                })
            })
            const content = await rawResponse.json();
            setPhoneNumberStatus(rawResponse.status);
            return content
        } else {
            error_notify('???????? ?????????? ???????? ???? ???? ?????????? ???????? ????????.');
            setPhoneNumberStatus('406')
        }

    }


    if (props.changeType === 'display-communication-info') {
        return (
            <div className='DisplayCommunicationInfo'>
                <div className='DisplayCommunicationInfo-section1'>
                    <div className='DisplayCommunicationInfo-section1-web-address'>
                        <label className='DisplayCommunicationInfo-section1-web-address-label'>???????? ???????????????</label>
                        <input
                            className='DisplayCommunicationInfo-section1-web-address-input'
                            type='text'
                            placeholder={changeWebAddress}
                            onChange={(e) => setChangeWebAddress(e.target.value)}
                            defaultValue={changeWebAddress}
                            onBlur={() => {
                                updateWebAddress(changeWebAddress).then(() => {
                                    if (webAddressStatus === 200) {
                                        notify('???????? ??????????????? ???? ???????????? ?????????? ??????.')
                                    }
                                })
                            }}
                        />
                    </div>

                    <div className='DisplayCommunicationInfo-section1-mail-address'>
                        <label className='DisplayCommunicationInfo-section1-mail-address-label'>???????? ??????????</label>
                        <input
                            className='DisplayCommunicationInfo-section1-mail-address-input'
                            type='text'
                            placeholder={changeMailAddress}
                            onChange={(e) => setChangeMailAddress(e.target.value)}
                            defaultValue={changeMailAddress}
                            onBlur={() => {
                                updateMailAddress(changeMailAddress).then(() => {
                                    if (mailAddressStatus === 200) {
                                        notify('???????? ?????????? ???? ???????????? ?????????? ??????.')
                                    }
                                })
                            }}
                        />
                    </div>
                </div>

                <div className='DisplayCommunicationInfo-section2'>
                    <div className='DisplayCommunicationInfo-section2-address'>
                        <label className='DisplayCommunicationInfo-section2-address-label'>????????</label>
                        <textarea
                            className='DisplayCommunicationInfo-section2-address-textArea'
                            placeholder={changeAddress}
                            onChange={(e) => setChangeAddress(e.target.value)}
                            defaultValue={changeAddress}
                            onBlur={() => {
                                updateAddress(changeAddress).then(() => {
                                    if (addressStatus === 200) {
                                        notify('???????? ???? ???????????? ?????????? ??????.')
                                    }
                                })
                            }}
                        />
                    </div>
                    <div className='DisplayCommunicationInfo-section2-phone-number'>
                        <label className='DisplayCommunicationInfo-section2-phone-number-label'>?????????? ????????</label>
                        <input
                            className='DisplayCommunicationInfo-section2-phone-number-input'
                            type='text'
                            placeholder={changePhoneNumber}
                            onChange={(e) => setChangePhoneNumber(e.target.value)}
                            defaultValue={changePhoneNumber}
                            onBlur={() => {
                                updatePhoneNumber(changePhoneNumber).then(() => {
                                    if (phoneNumberStatus === 200) {
                                        notify('??????????????? ???????? ???? ???????????? ?????????? ??????.')
                                    }
                                })
                            }}
                        />
                    </div>
                </div>
                <div className='DisplayCommunicationInfo-section3'>
                    <p className='DisplayCommunicationInfo-section3-text'>?????????? ??????????????? ?????????????? ???? ???????? ??????????</p>
                    <input type="checkbox" id="switch"
                           className="checkbox"/>
                    <label htmlFor="switch" className="toggle"/>
                </div>

            </div>
        )
    } else {
        return (
            <p className='DisplayAccountInfoBody-text t3'>??????????????? ?????????????? ???????? ?????????? ???????? ?????? ???? ????????????? ?????????????? ???? ????
                ??????????
                ??????????????????? ?????????? ????????.</p>
        )
    }
}


const DisplayAccountInfo = () => {
    const [clickedAccountSettingType, setClickedAccountSettingType] = useState('');
    return (
        <div className='DisplayAccountInfo'>
            <div className='DisplayAccountInfo-header'>
                <p className='DisplayAccountInfo-header-text'>???????????? ????????????? ?????????????? ????????</p>
                <p className={'DisplayAccountInfo-header-change-text' + ((clickedAccountSettingType === 'display-account-info') ? ' DisplayAccountInfo-header-change-text-active' : ' disable')}
                   onClick={() => setClickedAccountSettingType('display-account-info')}>?????????? ??????????</p>
            </div>
            <div className='DisplayAccountInfo-body'>
                <DisplayAccountInfoBody changeType={clickedAccountSettingType}/>
            </div>
            <hr className='DisplayAccountInfo-hr'/>

            <div className='DisplayCompanyInfo-header'>
                <p className='DisplayCompanyInfo-header-text'>?????????????? ????????</p>
                <p className={'DisplayCompanyInfo-header-change-text' + ((clickedAccountSettingType === 'display-company-info') ? ' DisplayCompanyInfo-header-change-text-active' : ' disable')}
                   onClick={() => setClickedAccountSettingType('display-company-info')}>?????????? ??????????</p>
            </div>
            <div className='DisplayAccountInfo-body'>
                <DisplayCompanyInfoBody changeType={clickedAccountSettingType}/>
            </div>
            <hr className='DisplayAccountInfo-hr'/>

            <div className='DisplayCommunicationInfo-header'>
                <p className='DisplayCommunicationInfo-header-text'>??????????????? ??????????????</p>
                <p className={'DisplayCommunicationInfo-header-change-text' + ((clickedAccountSettingType === 'display-communication-info') ? ' DisplayCommunicationInfo-header-change-text-active' : ' disable')}
                   onClick={() => setClickedAccountSettingType('display-communication-info')}>?????????? ??????????</p>
            </div>
            <div className='DisplayCommunicationInfo-body'>
                <DisplayCommunicationInfo changeType={clickedAccountSettingType}/>
            </div>

        </div>
    );
};

export default DisplayAccountInfo;