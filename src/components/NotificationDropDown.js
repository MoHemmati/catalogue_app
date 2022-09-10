import React from 'react';
import comment_logo from 'D:/Projects/React/catalogue-app/src/stuff/message-square.svg'
import maximize from 'D:/Projects/React/catalogue-app/src/stuff/maximize.svg'
import like_logo from 'D:/Projects/React/catalogue-app/src/stuff/heart.svg'
import tick_icon
    from 'D:/Projects/React/catalogue-app/src/stuff/IONIcon_C_checkmark_C_circle_outline.svg'
import {Link} from "react-router-dom";


const onConfirmClicked = async (ID, notifID) => {
    const url = "http://www.justfortestjustfortest.ir/api/recommendation/received/confirm/" + ID;

    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        }
    })
    console.log(rawResponse.status);
    console.log(notifID);
    if (rawResponse.status === 200) {
        readNotification(notifID);
    }
}
const readNotification = async (ID) => {
    const url = "http://www.justfortestjustfortest.ir/api/notification/read";

    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        },
        body: JSON.stringify({
            "notification_id": ID
        })
    })
}

const readAllNotifications = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/notifications/read-all";

    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        }
    })
}

const onRejectClicked = async (ID, notifID) => {
    const url = "http://www.justfortestjustfortest.ir/api/recommendation/received/delete/" + ID;

    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        }
    })
    console.log(rawResponse.status);

    if (rawResponse.status === 200) {
        readNotification(notifID);
    }
}

const NotificationDropDown = ({notifications}) => {

    const setImages = (img) => {
        if (typeof img !== 'undefined'){
            console.log(img)
            if (img.includes('storage')){
                return "http://www.justfortestjustfortest.ir/" + img;
            }
            else {
                return img;
            }
        }
    }

    return (
        <div className='NotificationDropDown'>

            <div className='notification-header'>
                <select className='notif-dropdown-select'
                        required
                >
                    <option value='تازه‌ترین'> تازه‌ترین</option>
                </select>
                <img src={tick_icon} alt='tick' id='tickIcon'/>
                <p id='readAll' onClick={() => {
                    readAllNotifications().then();
                }}> خواندن همه‌ی پیام‌ها </p>
                <div className='notification-header-link'>
                    <Link to='/Notifications'>
                        <img src={maximize} alt='maximize' id='maximizeIcon'/>
                    </Link>
                </div>
            </div>
            <div className='notification-drop-down-list'>
                {
                    notifications.map((notification) => {
                            if (notification.type === "App\\Notifications\\BusinessAccountCommentCreated")
                                return (
                                    <div className='notification-comment' key={notification.id}>

                                        <div className='notification-list'>
                                            <div className='recom-dropdown'>
                                                <div className='recom-dropdown-header'>
                                                    <img className='NotificationDropDown-avatar'
                                                         src={setImages(notification.data.profile_pic_path)} alt='avatar'/>
                                                    <p className='dropdown-header-text'>{notification.data.author} نظری
                                                        درباره‌ی مطلب جدید نوشته است: </p>
                                                </div>
                                                <div className='NotificationDropDown-body'>
                                                    <p> {notification.data.content} </p>
                                                </div>
                                                <div className='NotificationDropDown-bottom'>
                                                    <p className='NotificationDropDown-bottom-time'>{new Date(notification.data.date).toLocaleString('fa-IR')}</p>
                                                    <img src={like_logo} alt="like logo" id='likeLogo'/>
                                                    <img src={comment_logo} alt="comment logo" id='commentLogo'/>
                                                </div>
                                                <hr className="hr1"/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            else if (notification.type === "App\\Notifications\\RecommendationCreated")
                                return (
                                    <div className='notification-recom' key={notification.id}>
                                        <div className='notification-list'>
                                            <div className='recom-dropdown'>
                                                <div className='recom-dropdown-header'>
                                                    <img className='NotificationDropDown-avatar'
                                                         src={setImages(notification.data.profile_pic_path)} alt='avatar'
                                                         onClick={() => {
                                                             console.log(notification.data.profile_pic_path)
                                                         }}
                                                    />
                                                    <p className='dropdown-header-text'>{notification.data.sender_name} برای
                                                        شما توصیه نامه نوشته است: </p>
                                                </div>
                                                <div className='NotificationDropDown-body'>
                                                    <p> {notification.data.content} </p>
                                                </div>
                                                <div className='NotificationDropDown-bottom'>
                                                    <p className='NotificationDropDown-bottom-time'>{new Date(notification.updated_at).toLocaleString('fa-IR')}</p>
                                                    <img src={comment_logo} alt="comment logo" id='commentLogo_recom'/>
                                                </div>
                                                <div className='dropDown-Buttons'>
                                                    <button className='accept-recom-button dropdownBTN' onClick={() => {
                                                        onConfirmClicked(notification.data.recommendation_id, notification.id);
                                                    }}>تایید
                                                    </button>
                                                    <button className='reject-recom-button' onClick={() => {
                                                        onRejectClicked(notification.data.recommendation_id, notification.id);
                                                    }}>رد
                                                    </button>
                                                </div>
                                                <hr className="hr1"/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            else if (notification.type === "App\\Notifications\\NewRequest")
                                return (
                                    <div className='notification-recom' key={notification.id}>
                                        <div className='notification-list'>
                                            <div className='recom-dropdown'>
                                                <div className='recom-dropdown-header'>
                                                    <img className='NotificationDropDown-avatar'
                                                         src={setImages(notification.data.profile_pic_path)} alt='avatar'/>
                                                    <p className='dropdown-header-text'>{notification.data.sender_name} از
                                                        شما می‌خواهد تا برایش توصیه نامه بنویسید.</p>
                                                </div>
                                                <div className='NotificationDropDown-body'>
                                                    <p> {notification.data.content} </p>
                                                </div>
                                                <div className='NotificationDropDown-bottom'>
                                                    <p className='NotificationDropDown-bottom-time'>{new Date(notification.data.date).toLocaleString('fa-IR')}</p>
                                                    <img src={comment_logo} alt="comment logo" id='commentLogo_recom'/>
                                                </div>
                                                <div className='dropDown-Buttons'>
                                                    <button className='accept-recom-button dropdownBTN'>تایید</button>
                                                    <button className='reject-recom-button' onClick={() => {
                                                        console.log(notification)
                                                        onRejectClicked(notification.data.sender_id, notification.id);
                                                    }}>رد</button>
                                                </div>
                                                <hr className="hr1"/>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    )
                }
            </div>

        </div>


    );

}

export default NotificationDropDown;