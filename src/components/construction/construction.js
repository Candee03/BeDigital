import React from 'react'
import './construction.scss'
import construction from '../../img/building-page.png'

const Construction = () => {
    return (
        <main className='main-home'>
            <img className='img-in-construction' src={construction} alt='*'></img>
            <p className='p1'>⚠️ página en construcción ⚠️</p>
            <div className='div-contact'>
                <p className='p2'>Contáctanos a nuestro e-mail: <a className='a-contact' href='mailto:bedigitalservicios@gmail.com'>bedigitalservicios@gmail.com</a></p>
            </div>
        </main>
    )
}

export default Construction