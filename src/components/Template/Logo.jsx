import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
import Logo from '../../Assets/Logo.png'


export default props =>
<aside className="logo">
    <Link to="/" className="logo">
        <img src={Logo} alt="Mesacor"/>
    </Link>
</aside>