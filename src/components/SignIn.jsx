import { TextField, Checkbox, Button } from '@mui/material';
import './scss/SignIn.scss'
import SignInPNG from '../assets/signin.png';
import Facebook from '../assets/facebook.png';
import LinkedIn from '../assets/linkedin.png';
import Google from '../assets/search.png';
import Twitter from '../assets/twitter.png';

export default function SignIn() {

    return (
        <div className='sign-in'>
            <div className='sign-in-section'>
                <h1>Sign In</h1>
                <p className='sign-up'>New User? <a href="#">Create an account</a></p>
                <div className='sign-in-form'>
                    <TextField className='sign-in-form-input' id="outlined-basic" placeholder="Username or email" />
                    <TextField className='sign-in-form-input' id="outlined-basic" placeholder="Password" type="password" />
                    <div className='sign-in-keep'>
                        <Checkbox /> Keep me signed in
                    </div>
                    <button className='sign-in-button' onClick={() => window.location.href = "/dashboard"}>Sign In</button>
                </div>
                <div className='sub-section'>
                    <div className='sign-in-other-head'>
                        <span>&nbsp;</span>
                        <p>Or Sign In With</p>
                        <span>&nbsp;</span>
                    </div>
                    <div className='sign-in-icons'>
                        <p><img src={Google} width={15} height={15} /></p>
                        <p><img src={Facebook} width={15} height={15} /></p>
                        <p><img src={LinkedIn} width={15} height={15} /></p>
                        <p><img src={Twitter} width={15} height={15} /></p>

                    </div>
                </div>
            </div>
            <div className='sign-in-logo'>
                <img src={SignInPNG} alt="sign in image" />
            </div>

        </div>
    )
}