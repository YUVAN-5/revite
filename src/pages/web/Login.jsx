import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// import Loginbg from '../assets/Logbag.png';
import { emailValidator, passwordValidator } from './LoginValidator';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [input, setInput] = React.useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  // const { Login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const formSubmitter = (e) => {
    e.preventDefault();

    if (!emailValidator(input.email)) return setErrorMessage('Please enter a valid email id');
    if (!passwordValidator(input.password)) return setErrorMessage('Password is incorrect');
    login({ name: input.username });
    navigate('/');
  };

  return (
    <div className='HomeContainer'>
      {/* <img src={Loginbg} alt='Login' className='imageLogin' /> */}

      <form className='sub-container' onSubmit={formSubmitter}>
        <div className='headers'>Welcome Back!</div>

        <div className='inputs'>
          {errorMessage.length > 0 && <div style={{ marginBottom: '3px', color: 'red' }}>{errorMessage}</div>}

          <div className='input'>
            <input type='text' placeholder='Username' name='username' onChange={handleChange} />
          </div>
          <div className='input'>
            <input type='text' placeholder='Email' name='email' onChange={handleChange} />
          </div>

          <div className='input'>
            <input type='password' placeholder='Password' name='password' onChange={handleChange} />
          </div>
        </div>

        <div className='account'>
          <Link to='/' id='id1'>
            Login as Guest
          </Link>
          <Link to='/signup' className='linkabs'>
            <span>Signup</span>
          </Link>
        </div>

        <div className='submit-container'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}