import React, { useEffect, useState } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
    const [username, setUsername] = useState('');

    useEffect(()=>{
        setUsername(localStorage.getItem("username"));
    },[])
    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('token')

        window.location.href = "/";
    }

  return (
    <div className='nav'>
        <div className="nav-left">
                <h2>Ecommerce</h2>
        </div>
        <div className="nav-right">
        <Link className="text-decoration-none" to={"/account"}>Account</Link>
        <Link className="text-decoration-none" to={"/cart"}>Cart</Link>
        <div className="user-intro">Hi {username}</div>
        <div onClick={logout} className="logout-btn" >Logout</div>
        </div>

    </div>
  )
}

export default Nav