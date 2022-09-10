import React, {Component} from 'react';
import AuthenticationEmail from "./AuthenticationEmail";
import AuthenticationOTP from "./AuthenticationOTP";
import UserSignUpForm from "./UserSignUpForm";

class AuthenticationForm extends Component {
    state = {
        step: 1,
        mailAddress: '',
        password: ''
        // validationNumber: ''
    };

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    render() {
        const {step} = this.state;
        const {
            mailAddress, password
        }
            = this.state
        const values = {
            mailAddress, password
        }

        // eslint-disable-next-line default-case
        switch (step) {
            case 1:
                return (
                    <AuthenticationEmail
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 2:
                return (
                    <AuthenticationOTP
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <UserSignUpForm
                        mailAndPass={values}
                        history={this.props.history}
                    />
                )
        }
    }
}

export default AuthenticationForm;