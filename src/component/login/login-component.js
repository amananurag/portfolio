import './login.css'
import Example from '../example/example-component';
import Avatar from '../avatar/avatar-component';
function Login(){
    return (
        <>
        <Avatar/>
         <div class="login">
            <input type="text" placeholder="Enter your username" />
            <input type="password" placeholder="Enter your password" />
            <input type="submit" value="Login" />
            </div>
        
        
        </>
    ) ;
}

export default Login;