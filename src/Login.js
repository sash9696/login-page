import React, {useState} from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [showSignup, setShowSignup] = useState(false);
    const BASE_URL = 'http://13.235.87.215:4000';
    const loginFn = () => {
        const username = document.getElementById("username");
        const password = document.getElementById("password");

        const data = {
            username: username.value,
            password: password.value
        };

        axios.post(BASE_URL + '/api/v1/user/login', data)
        .then((response) => {
            console.log(response)
            if (response.data.success) {
                localStorage.setItem("username", response.data.data.username)
                localStorage.setItem("userId", response.data.data.userId);
                localStorage.setItem("token", response.data.data.token);
                window.location.href = "/home";
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    const signupFn = () => {
        
        const username = document.getElementById("username");
        const password = document.getElementById("password");

        const data = {
            username: username.value,
            password: password.value
        };

        axios.post(BASE_URL + '/api/v1/user/signup', data)
            .then(function (response) {
                console.log(response)
                if (response.data.success) {
                    localStorage.setItem("username", response.data.data.username)
                    localStorage.setItem("userId", response.data.data.userId);
                    localStorage.setItem("token", response.data.data.token);
                    window.location.href = "/home";
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    console.log(showSignup)
    const toggleSignup = () => {
        setShowSignup(!showSignup);
    }
  return (
    <div id='loginPage'>
        <div className='container'>
            <div className="row">
                <div className="col">
                <h2 className="home-title text-center">Welcome to Ecommerce</h2>
                {!showSignup ? (<div className="login-wrapper">
                    <h4 className="text-center">Login</h4>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Username" id="username" />
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-control" placeholder="Password" id="password" />
                    </div>
                    <div className="input-group">
                        <input type="submit" className="form-control btn btn-primary" value="Log in as User" onClick={loginFn}  />
                    </div>
                    <div className="signup-btn text-center text-info" onClick={toggleSignup} >Dont have an Account ? Signup</div>
                        <div className="auth-error-msg text-danger text-center"></div>
                </div> ) : (
                     <div className="login-wrapper">
                     <h4 className="text-center">Signup</h4>
                     <div className="input-group">
                         <input type="text" className="form-control" placeholder="Username" id="username" />
                     </div>
                     <div className="input-group">
                         <input type="password" className="form-control" placeholder="Password" id="password" />
                     </div>
                     <div className="input-group">
                         <input type="submit" className="form-control btn btn-primary" value="Sign up as User" onClick={signupFn}  />
                     </div>
                     <div className="signup-btn text-center text-info" onClick={toggleSignup} >Already have an account ? login</div>
                         <div className="auth-error-msg text-danger text-center"></div>
                 </div>
                ) }
               
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login