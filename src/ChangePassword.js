import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import './stylee.css'
function ChangePassword(){
 const navigate = useNavigate() ;
 const [oldpass , setOldpass] = useState('');
 const [newpass , setNewpass] = useState('');
 const [conpass , setConpass] = useState('');  
 
 const handleSubmit = (event) => {
    event.preventDefault();
    let newPassword = localStorage.getItem('Password')

    if (newPassword !== oldpass) {
        window.alert('Old Password Did Not match')
    }
    else if (newpass !== conpass) {
        window.alert('Confirm Password Did not metch')

    }
    else if (oldpass === newpass) {
        window.alert('Old Password and New Password must not be Same')
    }
    else {
        localStorage.setItem('Password', newpass)
        window.alert('Password Change Successfully')
        navigate('/Login')
    }
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h1 className="h1">Change Password</h1>
            <div className="box-div">
                <input type='password'className="box" placeholder="Enter Old Password" onChange={e => setOldpass(e.target.value)} /><br />
                <input type='password'className="box" placeholder="Enter New Password" onChange={e => setNewpass(e.target.value)} /><br />
                <input type='password'className="box" placeholder="Re-Enter New Password" onChange={e => setConpass(e.target.value)} /><br />
                </div>
                <button className="button" type='submit'>submit</button>
                <div className="buttons" >
                <button onClick={()=>navigate('/Login')}>cancel</button>
                </div>
            </form>
        </div>
    )
}
export default ChangePassword;