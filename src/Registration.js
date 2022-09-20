import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Registration() {

    const navigate = useNavigate();

    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const onSubmit = (e) => {

        e.preventDefault();

        let newEmail = localStorage.getItem('email')
        // let newConfirm = localStorage.getItem('password')
        if ((username === "" || username === null) && (email === '' || email === null) && (password === "" || password === null) && (ConfirmPassword === "" || ConfirmPassword === null)) {
            window.alert("Please Enter Value")
        }
        else if (email === newEmail) {
            alert('Email id Aleady Exist')
        } else if (password !== ConfirmPassword) {


            alert("Password Not Match");
        }
        else {
            localStorage.setItem('Name', username)
            localStorage.setItem('Email', email)
            localStorage.setItem('Password', password)
            window.alert('Registration Succesfull')
            navigate('/Login')
        }

    }

    return (

        <div >
            <h1 className='h1'><b>Registration Form</b></h1>
            <form  onSubmit={onSubmit}>
        <div className='box-div'>
                       <input type="text" className='box' placeholder='Name' name="username" value={username} onChange={e => setName(e.target.value)}></input><br />
                 <br /><input type="text" placeholder='Email' className='box' name="email" value={email} onChange={e => setEmail(e.target.value)}></input><br />
                 <br /><input type="text" className='box' placeholder='Password' name="password" value={password} onChange={e => setPassword(e.target.value)}></input><br />
                 <br /><input type="text" className='box' placeholder='Confrim Password' name="ConfirmPassword" value={ConfirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input><br />
                </div>
                <br />
                <div>
                <button className='button' type="submit" >submit</button>
                </div>
                <div className='buttons'>
                <button   onClick={() => navigate('/Forgot')}>Forgot Password</button>
                <button onClick={() => navigate('/Login')}>Login</button>
                </div>
            </form>

        </div>
    )
}




export default Registration;