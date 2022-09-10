import React, {useEffect, useState} from 'react';
import Picker from 'emoji-picker-react';
import navigation from 'D:/Projects/React/catalogue-app/src/stuff/navigation.svg'
import ContactsModal from "./ContactsModal";

const sendMessage = async (user_name, content) => {
    const url = "http://www.justfortestjustfortest.ir/api/message/send";

    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        },
        body: JSON.stringify({
            type: 'text',
            to: user_name,
            content: content
        })
    })
    return await rawResponse.json()
}

function ShowMessage(props) {
    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);


    const onEmojiClick = (event, emojiObject) => {
        setInputStr(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };


    let messages = props.message;
    let user_name = props.user_name;



    return (
        <div className='ShowMessages'>
            <div className='ShowMessages-header'>
                <img className='ShowMessages-avatar' src={props.avatar} alt='avatar'/>
                <p className='ShowMessages-Name'>{props.name}</p>
            </div>


            <hr className='ShowMessages-hr'/>

            <div className='ShowMessages-Messages'>
                {
                    Object.values(messages).map((message) => {
                            if (message.sender_id === parseInt(localStorage.getItem('user_id')))
                                return (
                                    <div className='myMessages' key={message.id}>
                                        {message.content}
                                    </div>
                                )
                            else
                                return (
                                    <div className='contact-message' key={message.id}>
                                        {message.content}
                                    </div>
                                )
                        }
                    )
                }

            </div>
            <hr className='ShowMessages-hr2'/>
            <div className="ShowMessages-writeMessages">
                <button className='ShowMessages-writeMessages-button'>
                    <img className='ShowMessages-writeMessages-button-img' src={navigation} alt='Send' onClick={() => {
                        sendMessage(user_name, inputStr).then(r => console.log(r));
                        setInputStr('');
                    }}/>
                </button>
                <div className="picker-container">
                    <img
                        className="emoji-icon"
                        src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                        alt='emoji'
                        onClick={() => {
                            setShowPicker(val => !val);
                        }}/>

                    {showPicker && <Picker
                        pickerStyle={{width: '100%'}}
                        onEmojiClick={onEmojiClick}/>}
                    <input
                        className="input-style"
                        value={inputStr}
                        onChange={e => setInputStr(e.target.value)}/>
                </div>
            </div>


        </div>

    )
}

function HandleMailBoxContactListBarClick(props) {
    if (props.IsClicked) {
        return (
            <ShowMessage
                name={props.name}
                avatar={props.avatar}
                message={props.message}
                user_name={props.user_name}
            />
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}

const createChat = async (user_id) => {
    const url = "http://www.justfortestjustfortest.ir/api/chat/create";

    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        },
        body: JSON.stringify({
            contact_id: user_id
        })
    })
    console.log(rawResponse.json())
}
const setImages = (img) => {
    if (typeof img !== 'undefined') {
        if (img.includes('storage')) {
            return "http://www.justfortestjustfortest.ir/" + img;
        } else {
            return img;
        }
    }
}

const DisplayContacts = (props) => {
    const contacts = props.contacts;
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <div>
            <input
                type="text"
                placeholder="جستجوی کاربر..."
                className='DisplayContactsSearchBox'
                onChange={event => {
                    setSearchTerm(event.target.value)
                }}
            />
            {Object.values(contacts).filter((contact) => {
                if (searchTerm === "") return contact.contact_name;
                else if (contact.contact_name.toLowerCase().includes(searchTerm.toLowerCase())) return contact.contact_name
            }).map((contact) => {
                return (
                    <div className="DisplayContactsList" key={contact.contact_id}>

                        <div className='DisplayContactsListBar' onClick={() => {
                            console.log(contact.id);
                            createChat(contact.id).then(res => console.log(res));
                        }}>
                            <div className="DisplayContacts-avatar-content">
                                <img className='DisplayContacts-avatar'
                                     src={setImages(contact.contact_profile_pic_path)}
                                     alt='avatar'/>
                            </div>
                            <div className="DisplayContacts-details">
                                <p className='MailBoxContactsListBarContentLeftName'>{contact.contact_name}</p>
                                <p className='MailBoxContactsListBarContentLeftTime'>{new Date(contact.updated_at).toLocaleString('fa-IR')}</p>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    )
}


const getContacts = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/contacts";

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        }
    })
    return await rawResponse.json()
}

const getAllMessages = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/chats";

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        }
    })
    return await rawResponse.json()
}

const getEachMessages = async (ID) => {
    const url = "http://www.justfortestjustfortest.ir/api/chats/" + ID;

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        }
    })
    return await rawResponse.json()
}


function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const MailBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [mailBoxContactsListIsClicked, setMailBoxContactsListIsClicked] = useState(false);
    const [Messages, setMessages] = useState({});
    const [Name, setName] = useState('');
    const [contactAvatar, setContactAvatar] = useState(null);
    const [chatList, setChatList] = useState({});
    const [eachChat, setEachChat] = useState({});
    const [contacts, setContacts] = useState({});
    const [user_name, setUser_name] = useState('');
    const [run, setRun] = useState(false);
    const [reRun, setRerun] = useState(false);
    const forceUpdate = useForceUpdate();

    const [displayModal, setDisplayModal] = useState(false);

    function showModal() {
        setDisplayModal(true);
    }

    function hideModal() {
        setDisplayModal(false);
    }

    useEffect(() => {
        getAllMessages().then((res) => {
            setChatList(res);
            setRun(true)
        })
        getContacts().then((res) => {
            setContacts(res);
            setRerun(true);
        })
    }, [run, reRun]);

    return (
        <div className="MailBox">
            <div className='MailBox-content-right'>
                <div className='MailBox-content-right-header'>
                    <p className='inbox-header-text'>صندوق دریافت </p>
                    <button className='MailBox-content-right-header-badge-button'>{(chatList.length)}</button>
                    <p className='new-message-MailBox-text'> پیام جدید </p>

                    <button type='button' onClick={showModal}
                            className='MailBox-content-right-header-newMessage-button'>نوشتن پیام جدید
                    </button>

                    <ContactsModal show={displayModal} handleClose={hideModal}>
                        <DisplayContacts contacts={contacts}/>
                    </ContactsModal>

                </div>
                <hr className='hr3'/>
                <div className='MailBox-content-right-Mails-top'>
                    <input
                        type="text"
                        placeholder="جستجوی کاربر..."
                        className='MailBoxSearchBox'
                        onChange={event => {
                            setSearchTerm(event.target.value)
                        }}
                    />
                    <select className='MailBox-content-right-Mails-top-select'>
                        <option value='تازه ترین'> تازه ترین</option>
                    </select>
                </div>
                <div className='MailBox-content-right-list'>
                    {
                        Object.values(chatList).filter((val) => {
                            if (searchTerm === "") return val.user2.user2_name
                            else if (val.user2.user2_name.toLowerCase().includes(searchTerm.toLowerCase())) return val.user2.user2_name
                        }).map((val, key) => {
                            console.log(val)
                            return (
                                <div className="MailBoxContactsList" key={val.chat.chat_id}>
                                    <div className='MailBoxContactsListBar' onClick={() => {
                                        setUser_name(val.user2.user2_email);
                                        getEachMessages(val.chat.chat_id).then(res => {
                                            setEachChat(res);
                                            forceUpdate();
                                        });
                                        setMailBoxContactsListIsClicked(true);
                                        setMessages(eachChat);
                                        setContactAvatar(val.user2.user2_profile_pic_path);
                                        setName(val.user2.user2_name);
                                    }}>
                                        <div className="MailBoxContactsListBarContentRight">
                                            <img className='MailBoxContactListAvatar'
                                                 src={val.user2.user2_profile_pic_path} alt='avatar'/>
                                        </div>
                                        <div className="MailBoxContactsListBarContentLeft">
                                            <p className='MailBoxContactsListBarContentLeftName'>{val.user2.user2_name}</p>
                                            <p className='MailBoxContactsListBarContentLeftTime'>{val.chat.chat_last_date}</p>
                                            <p className='MailBoxContactsListBarContentLeftMessage'>{val.chat.chat_last_message}</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className='MailBox-content-left'>
                <HandleMailBoxContactListBarClick
                    IsClicked={mailBoxContactsListIsClicked}
                    avatar={contactAvatar}
                    message={Messages}
                    name={Name}
                    user_name={user_name}
                />
            </div>
        </div>

    );


}

export default MailBox;