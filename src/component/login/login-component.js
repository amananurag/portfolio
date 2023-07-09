import './login.css'
import Example from '../example/example-component';
import Avatar from '../avatar/avatar-component';
import { useState } from 'react';
function Login(){

    const [name, setName  ] = useState('');
    const [password, setPassword  ] = useState('');
    function submitHandler(e) {
        e.preventDefault();
        setName('');
        setPassword('');
        
    }

    const onChangeHandler = (field) => {
        
        
        if(field === 'username'){
         
            return (e) => {
                setName(e.target.value);
            }
        }else{
        
             return (e) => {
                setPassword(e.target.value);
             }
        }
        
    }
    return (
        <>
        <Avatar/>
         <div class="login">
            <input type="text" placeholder="Enter your username" value={name} onChange={onChangeHandler('username')}/>
            <input type="password" placeholder="Enter your password" value={password} onChange={onChangeHandler('password')} />
            <input type="submit" value="Login" onClick={(e) => submitHandler(e)} />
            </div>
        
        
        </>
    ) ;
}

export default Login;