import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './stylee.css'

function Login () {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
   const handlesubmit = (event) => {
    
        event.preventDefault();
    
        let newEmail = localStorage.getItem('Email')
        let newPassword = localStorage.getItem('Password')
        if (email === newEmail && password === newPassword) {
            
            navigate('/Home')
           
        }
        else {
            if (email !== newEmail && password !== newPassword) {
                window.alert('Both email and password are Invalid')
            }
            else if (email !== newEmail) {
                window.alert('email is Invalid')
            }
            else (
                window.alert('password is Invalid')
            )
        }
    }

    
  
        return (
            <div>
                <h1 className='h1'>Login Page</h1>
                <form onSubmit={handlesubmit} >
            <div className='box-div'>
                   <br/> <input type="text" placeholder='Name' className='box' name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                   <br/><input type="text" placeholder='Password' className='box' name="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                    </div>
                    <br/><button  className='button' type="submit">LogIn</button>
                    <div className='buttons'>
                <br/>    <button onClick={() => navigate('/ChangePassword')}>ChangePassword</button>
                  <br/>  <button onClick={() => navigate('/')}>Register</button>
                  </div>
                </form>
            </div>

        );
 
        }
export default Login;
