import React from 'react'
import './construction.scss'
import construction from '../../img/building-page.png'
import { useMediaQuery } from 'react-responsive';

const Construction = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 840px)' });


    return (
        <main className='main-home'>
            <img className='img-in-construction' src={construction} alt='*'></img>
            {
            isTabletOrMobile?
                <>
                <p className='p1'>⚠️</p>
                <p className='p1'>página en</p>
                <p className='p1'>construcción</p>
                </>
            :
                <p className='p1'>⚠️ página en construcción ⚠️</p>
            }
            <div className='div-contact'>
                <p className='p2'>Contáctanos a nuestro e-mail: <a className='a-contact' href='mailto:bedigitalservicios@gmail.com'>bedigitalservicios@gmail.com</a></p>
            </div>
        </main>
    )
}

export default Construction