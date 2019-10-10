import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default props =>
    <div className="menu-area">
        <nav className="menu">
            <Link to="/"> Home </Link>
            <Link to="/sobre"> Sobre </Link>
            <Link to="/produtos"> Produtos </Link>
            <Link to="/contato"> Contato </Link>
        </nav>
    </div>