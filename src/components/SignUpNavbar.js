import logo from 'D:/Projects/React/catalogue-app/src/stuff/Logo.png'

const SignUpNavbar = () => {
    return (
        <nav className="navbar navbarSignUp">
            <div className="main-logo">
                <img src={logo} alt="Logo"/>
            </div>
            <h1>کاتالوگ‌ساز</h1>
        </nav>
    );
}

export default SignUpNavbar;
