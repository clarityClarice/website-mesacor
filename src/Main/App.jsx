import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import Footer from '../components/Template/Footer'
import Header from '../components/Template/Header'
import Nav from '../components/Template/Nav'
import Logo from '../components/Template/Logo'

export default props =>
    <HashRouter>
        <div className="app">
            <Header />
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>