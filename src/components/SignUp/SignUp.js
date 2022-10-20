import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../images/google-button-icon.png';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2>SignUp</h2>
            <form>
                <div className='from-control'>
                    <label>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='from-control'>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='from-control'>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" required />
                </div>
                <div className='form-submitBtn'>
                    <button type="submit">SignUp</button>
                    <p>Already have an account? <Link to='/login' className='form-link'>Login</Link></p>
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

export default SignUp;