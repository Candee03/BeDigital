import React from 'react'
import './construction.scss'
import construction from '../../img/in-construction.jpg'

const Construction = () => {
    return (
        <main className='main-home'>
            <img className='img-in-construction' src={construction} alt='*'></img>
            <p>Nuestra página está en construcción</p>
            <div className='div-contact'>
                <p className='p-contact'>Contáctenos a <a className='a-mailTo' href='mailto:info@bedigital.uno'>info@bedigital.uno</a></p>
            </div>
        </main>
    )
}

export default Construction