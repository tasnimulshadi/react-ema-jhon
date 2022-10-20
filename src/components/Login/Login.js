import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import googleIcon from '../../images/google-button-icon.png';

const Login = () => {
    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form>
                <div className='from-control'>
                    <label>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='from-control'>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='form-submitBtn'>
                    <button type="submit">Login</button>
                    <p>New to Ema-john? <Link to='/signup' className='form-link'>Create New Account</Link></p>
                </div>
            </form>
            <div className="form-divider">
                <span></span>
                or
                <span></span>
            </div>
            <div className='form-googleBtn'>
                <button type="submit">
                    <img src={googleIcon} />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;