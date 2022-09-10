import React, {useState} from 'react';
import like_logo from 'D:/Projects/React/catalogue-app/src/stuff/heart.svg'
import tick_icon from 'D:/Projects/React/catalogue-app/src/stuff/IONIcon_C_checkmark_C_circle_outline.svg'
import {toast} from "react-toastify";
import {EditorState} from "draft-js";
import {convertToHTML} from "draft-convert";
import {Editor} from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

toast.configure()
let notifications;

const getNotifications = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/notifications/index";

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        }
    })
    notifications = await rawResponse.json()
    return rawResponse.status;
}

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
    await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        },
        body: JSON.stringify({
            "notification_id": ID
        })
    });
}

const readAllNotifications = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/notifications/read-all";
    await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        }
    });
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
        await readNotification(notifID);
    }
}
const sendRecommendation = async (user_name, html, notifID) => {
    const url = "http://www.justfortestjustfortest.ir/api/recommendation/send";

    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        },
        body: JSON.stringify({
            recommended_username: user_name,
            content: html
        })
    })
    if (rawResponse.status === 201) {
        readNotification(notifID);
    }
}

const sendAnswer = async (business_account_id, html, notifID) => {
    const url = "http://www.justfortestjustfortest.ir/api/business-account/comments/create";

    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        },
        body: JSON.stringify({
            business_account_id: business_account_id,
            text: html
        })
    })
    console.log(rawResponse.status)
    if (rawResponse.status === 200) {
        readNotification(notifID);
    }
}
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


const DisplayNotificationPage = (props) => {

    notifications = props.notifications;

    const [displayAnswerModal, setDisplayAnswerModal] = useState(false);
    const [displayWriteRecommendationModal, setDisplayWriteRecommendationAnswerModal] = useState(false);

    function showAnswerModal() {
        setDisplayAnswerModal(true);
    }

    function hideAnswerModal() {
        setDisplayAnswerModal(false);
    }

    function showWriteRecommendationModal() {
        setDisplayWriteRecommendationAnswerModal(true);
    }

    function hideWriteRecommendationModal() {
        setDisplayWriteRecommendationAnswerModal(false);
    }


    const showHideClassName = displayWriteRecommendationModal ? "modal-editor display-block-editor" : "modal-editor display-none-editor";
    const showHideAnswerClassName = displayAnswerModal ? "modal-editor display-block-editor" : "modal-editor display-none-editor";


    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState(null);
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    }
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }

    const TextEditor = () => {
        return (
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                editorStyle={{height: "450px"}}
            />
        )
    }


    if (notifications.length !== 0) {
        return (
            <div>
                <div className='notification-page-header'>
                    <select className='notification-page-select'
                            required
                    >
                        <option value='تازه‌ترین'> تازه‌ترین</option>
                    </select>
                    <img src={tick_icon} alt='tick' id='tickIcon_notificationPage'/>
                    <p id='readAll_notificationPage' onClick={() => {
                        readAllNotifications().then();
                    }}> خواندن همه‌ی پیام‌ها </p>
                </div>
                <div className='NotificationPage'>
                    {
                        notifications.map((notification) => {
                                if (notification.type === "App\\Notifications\\BusinessAccountCommentCreated")
                                    return (
                                        <div className='notification-page-comment' key={notification.id}>
                                            <div className='notification-page-comment-content'>
                                                <div className='notification-page-content-right'>
                                                    <div className='notification-page-content-right-header'>
                                                        <img className='NotificationPage-avatar'
                                                             src={setImages(notification.data.profile_pic_path)}
                                                             alt='avatar'/>
                                                        <div className='notification-page-content-right-header-content'>
                                                            <p className='NotificationPage-text'>{notification.data.author} نظری
                                                                درباره‌ی مطلب جدید نوشته است:</p>
                                                            <p className='NotificationPage-time'>{new Date(notification.data.date).toLocaleString('fa-IR')}</p>
                                                        </div>
                                                    </div>
                                                    <div className='notification-page-content-right-bottom'>
                                                        <img src={like_logo} alt="like logo"/>
                                                        <p id='reply-notification' onClick={showAnswerModal}>پاسخ دادن</p>
                                                    </div>
                                                </div>
                                                <div className={showHideAnswerClassName}
                                                     onClick={hideAnswerModal}>
                                                    <section className="modal-main-editor"
                                                             onClick={event => event.stopPropagation()}>
                                                        <div className='modal-main-header-editor'>
                                                            <button onClick={hideAnswerModal}
                                                                    className='modal-main-close-button-editor'/>
                                                        </div>
                                                        <div className='modal-main-body-editor'>
                                                            <TextEditor/>
                                                        </div>
                                                        <div className='modal-main-submit-editor'>
                                                            <button className='modal-main-submit-btn-editor'
                                                                    onClick={() => {
                                                                        sendAnswer(notification.data.account_id, convertedContent, notification.id);
                                                                        setDisplayAnswerModal(false);
                                                                    }}>ارسال
                                                            </button>
                                                        </div>
                                                    </section>
                                                </div>
                                                <div className='notification-page-content-left'>
                                                    <div className='notification-page-content-left-body'>
                                                        {notification.data.content}
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="hr2"/>
                                        </div>
                                    )
                                else if (notification.type === "App\\Notifications\\RecommendationCreated")
                                    return (
                                        <div className='notification-page-recommendation' key={notification.id}>
                                            <div className='notification-page-recommendation-content'>
                                                <div className='notification-page-content-right'>
                                                    <div className='notification-page-content-right-header'>
                                                        <img className='NotificationPage-avatar'
                                                             src={setImages(notification.data.profile_pic_path)}
                                                             alt='avatar'/>
                                                        <div className='notification-page-content-right-header-content'>
                                                            <p className='NotificationPage-text'>{notification.data.sender_name} برای
                                                                شما
                                                                توصیه نامه نوشته است.</p>
                                                            <p className='NotificationPage-time'>{new Date(notification.updated_at).toLocaleString('fa-IR')}</p>
                                                        </div>
                                                    </div>
                                                    <div className='notification-page-content-right-bottom'>
                                                        <p id='reply-notification'>پاسخ دادن</p>
                                                    </div>
                                                </div>
                                                <div className='notification-page-content-left'>
                                                    <div className='notification-page-content-left-body'>
                                                        {notification.data.content}
                                                    </div>
                                                    <div className='notification-page-recommendation-content-buttons'>
                                                        <button className='accept-recom-button' onClick={() => {
                                                            onConfirmClicked(notification.data.recommendation_id, notification.id).then();
                                                        }}>تایید
                                                        </button>
                                                        <button className='reject-recom-button' onClick={() => {
                                                            onRejectClicked(notification.data.recommendation_id, notification.id).then();
                                                        }}>رد
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>

                                            <hr className="hr2"/>
                                        </div>
                                    )
                                else if (notification.type === "App\\Notifications\\NewRequest")
                                    return (
                                        <div className='notification-page-recommendation' key={notification.id}>
                                            <div className='notification-page-recommendation-content'>
                                                <div className='notification-page-content-right'>
                                                    <div className='notification-page-content-right-header'>
                                                        <img className='NotificationPage-avatar'
                                                             src={setImages(notification.data.profile_pic_path)}
                                                             alt='avatar'/>
                                                        <div className='notification-page-content-right-header-content'>
                                                            <p className='NotificationPage-text'>{notification.data.sender_name} از
                                                                شما می‌خواهد تا برایش توصیه نامه بنویسید</p>
                                                            <p className='NotificationPage-time'>{new Date(notification.data.date).toLocaleString('fa-IR')}</p>
                                                        </div>
                                                    </div>
                                                    <div className={showHideClassName}
                                                         onClick={hideWriteRecommendationModal}>
                                                        <section className="modal-main-editor"
                                                                 onClick={event => event.stopPropagation()}>
                                                            <div className='modal-main-header-editor'>
                                                                <button onClick={hideWriteRecommendationModal}
                                                                        className='modal-main-close-button-editor'/>
                                                            </div>
                                                            <div className='modal-main-body-editor'>
                                                                <TextEditor/>
                                                            </div>
                                                            <div className='modal-main-submit-editor'>
                                                                <button className='modal-main-submit-btn-editor'
                                                                        onClick={() => {
                                                                            sendRecommendation(notification.data.sender_user_name, convertedContent, notification.id).then();
                                                                            setDisplayWriteRecommendationAnswerModal(false);
                                                                        }}>ارسال
                                                                </button>
                                                            </div>
                                                        </section>
                                                    </div>
                                                    <div className='notification-page-content-right-bottom'>
                                                        <p id='reply-notification'>پاسخ دادن</p>
                                                    </div>
                                                </div>
                                                <div className='notification-page-content-left'>
                                                    <div className='notification-page-content-left-body'>
                                                        {notification.data.content}
                                                    </div>
                                                    <div className='notification-page-recommendation-content-buttons'>
                                                        <button className='accept-recom-button'
                                                                onClick={() => {
                                                                    showWriteRecommendationModal();
                                                                }}>تایید
                                                        </button>
                                                        <button className='reject-recom-button' onClick={() => {
                                                            onRejectClicked(notification.data.recommendation_id, notification.id).then();
                                                        }}>رد
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>

                                            <hr className="hr2"/>
                                        </div>
                                    )
                            }
                        )
                    }
                </div>
            </div>
        );
    } else if (notifications.length === 0) {
        return <p className='notif-empty'>شما هیچ نوتفیکیشنی ندارید.</p>
    }

}
const NotificationPage = () => {
    const [status, setStatus] = useState();


    getNotifications().then(res => {
        setStatus(res)
    });
    if (status === 200) {
        return (<DisplayNotificationPage notifications={notifications}/>)
    } else {
        return <div/>
    }


};

export default NotificationPage;