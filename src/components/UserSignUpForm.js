import React, {Component} from 'react'
import UserSignUpS1 from './UserSignUpS1';
import UserSignUpS2 from './UserSignUpS2';
import UserSignUpS3 from './UserSignUpS3';


export class UserSignUpForm extends Component {
    state = {
        step: 1,
        nameOfCompany: '',
        year: '',
        description: '',
        logo: '',
        industry: '',
        typeOfCompany: '',
        numberOfEmployees: '',
        webAddress: '',
        mailAddress: '',
        phoneNumber: '',
        address: '',
        password: '',
        email: ''
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };
    handleLogo = input => e => {
        this.setState({[input]: e.target.files[0]});
        console.log(this.state.logo);
    };


    render() {
        const {mailAndPass} = this.props
        const {step} = this.state;
        const {
            nameOfCompany, year, description, logo, industry, typeOfCompany,
            numberOfEmployees, webAddress, mailAddress, phoneNumber, address, password,
            email
        }
            = this.state
        const values = {
            nameOfCompany, year, description, logo, industry, typeOfCompany,
            numberOfEmployees, webAddress, mailAddress, phoneNumber, address, password,
            email
        }

        switch (step) {
            case 1:
                return (
                    <UserSignUpS1
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleLogoChange={this.handleLogo}
                        values={values}
                    />
                )

            case 2:
                return (
                    <UserSignUpS2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <UserSignUpS3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        mailAndPass={mailAndPass}
                        history={this.props.history}
                    />
                )
            default:
                return (
                    <div/>
                )
        }
    }
}

export default UserSignUpForm
