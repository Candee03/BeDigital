import React from 'react'
import './logo.scss'
import logo from '../../img/logo.png'

const Logo = () => {
    return (
        <>
            <img className='logo-navbar' src={logo}></img>
            <h1>Be Digital</h1>
        </>
    )
}

export default Logo