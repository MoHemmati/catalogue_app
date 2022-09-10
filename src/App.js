import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import AuthenticationForm from "./components/AuthenticationForm";
import SignUpNavbar from "./components/SignUpNavbar";
import MailBox from "./components/MailBox";
import NotificationPage from "./components/NotificationPage";
import HomePage from "./components/HomePage";
import BusinessProfile from "./components/BusinessProfile";
import PersonalInformationSettings from "./components/PersonalInformationSettings";
import CreateNewCatalogue from "./components/CreateNewCatalogue";
import CataloguePage from "./components/CataloguePage";

function App() {
    let history = useHistory();
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route exact path="/">

                        </Route>
                        <Route path="/Home">
                            <Navbar/>
                            <HomePage/>
                        </Route>
                        <Route path="/SignUp">
                            <SignUpNavbar/>
                            <AuthenticationForm history={history}/>
                        </Route>
                        <Route path="/MailBox">
                            <Navbar/>
                            <MailBox/>
                        </Route>
                        <Route path="/Notifications">
                            <Navbar/>
                            <NotificationPage/>
                        </Route>
                        <Route path="/BusinessProfile">
                            <Navbar/>
                            <BusinessProfile/>
                        </Route>
                        <Route path='/Settings'>
                            <Navbar/>
                            <PersonalInformationSettings/>
                        </Route>
                        <Route path='/CreateNewCatalogue'>
                            <Navbar/>
                            <CreateNewCatalogue/>
                        </Route>
                        <Route path="/CataloguePage/:id">
                            <Navbar/>
                            <CataloguePage />
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>

    );
}

export default App;
