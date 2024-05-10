import React from 'react'
import './construction.scss'
import construction from '../../img/in-construction.jpg'

const Construction = () => {
    return (
        <main className='main-home'>
            <img className='img-in-construction' src={construction} alt='*'></img>
            <p className='p1'>Nuestra página está en construcción</p>
            <div className='div-contact'>
                <a className='a-contact' href='mailto:info@bedigital.uno'>Contáctenos a info@bedigital.uno</a> 
            </div>
        </main>
    )
}

export default Construction