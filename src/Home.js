import React , {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Home (){
    const navigate = useNavigate();
    const [name ,setName] =  useState('');
   
    useEffect(() => {
        let a = localStorage.getItem('Name')
        setName(a)
    }, [name])

    return (
        <React.Fragment>
            <div>
                <form>
                    <h1 className='h1'>Home</h1>
                    <h3 className='h1'>Hello, {name} </h3>
                  <div className='buttons'>
                    <button onClick={() => navigate('/ChangePassword')}>Change Password</button>&nbsp;
                    </div>
                   
                </form>
            </div>
        </React.Fragment>
    );
}
export default Home;