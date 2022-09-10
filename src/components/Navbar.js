import logo from 'D:/Projects/React/catalogue-app/src/stuff/Logo.png'
import avatar from 'D:/Projects/React/catalogue-app/src/stuff/img_avatar.png'
import {Link} from "react-router-dom";
import NotificationDropDown from "./NotificationDropDown";
import {useState} from "react";

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
    return [rawResponse.status, notifications.length];
}

const DisplayDropDown = ({status}) => {
    if (status === 200) {
        return <NotificationDropDown notifications={notifications}/>
    } else return (<div/>)
}

const Navbar = () => {
    const [status, setStatus] = useState();
    const [length, setLenghth] = useState();
    getNotifications().then(res => {
        setStatus(res[0]);
        setLenghth(res[1]);
    });


    return (
        <nav className="navbar">
            <div className="main-logo">
                <img src={logo} alt="Logo"/>
            </div>
            <h1>کاتالوگ‌ساز</h1>
            <div className="links">
                <Link to="/BusinessProfile"> خانه </Link>
                <Link to="/Home"> پروفایل </Link>
                <Link to="/MailBox"> صندوق پیام </Link>
                <Link to="/Settings"> تنظیمات </Link>
            </div>


            <div className="dropdown">
                <button onClick={
                    () => {
                        document.getElementById("myDropdown").classList.toggle("show");
                    }
                } className="dropbtn">
                    <span className='icon-button__badge'>{length}</span>
                </button>
                <div id="myDropdown" className="dropdown-content">
                    <DisplayDropDown status={status}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
