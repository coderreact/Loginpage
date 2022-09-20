import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stylee.css'
function Forgot(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        let newEmail = (localStorage.getItem('Email'))
        let newPassword = localStorage.getItem('Password')
        if (email !== newEmail) {
            window.alert('Email Does not Match')
        }
        else {
            setPassword(newPassword)
        }
    }

    return (
        <React.Fragment>
            <div>
            <h1 className='h1'>Forgot Password</h1>
            <div className='box-div'>
              <input className='box' type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} /><br />
                </div>
                <button className='button' onClick={handleSubmit}>Submit</button>
                <h3 className='h1'>Your Password is </h3><h2>{password}</h2>
                <button className='button' onClick={() => navigate('/Home')}> Home Page</button>
            </div>
        </React.Fragment>
    );
}

export default Forgot;
