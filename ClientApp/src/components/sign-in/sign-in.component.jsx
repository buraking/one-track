import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    

    render() {
        const responseFacebook = (response) => {
            console.log(response);
        }
        const responseGoogle = (response) => {
            console.log(response);
        }
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='email'
                        
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        
                    />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={responseFacebook} isFaceBookSignIn>
                        {' '}
                            Sign in with Facebook{' '} 
                        </CustomButton>
                        <CustomButton onClick={responseGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '} 
                        </CustomButton>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default SignIn;