import Logo from '../logo/logo'
import React, { useState } from 'react';
import './navBar.scss'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Navbar = ({navList}) => {
    const [deployed, setDeployed] = useState(false)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 840px)' });

    const clickNav = () => {
        if (deployed) {
            setDeployed(false)
        } else {
            setDeployed(true)
        }
    }
    // const parse = (li) => {
    //     return li
    //         .toLowerCase()
    //         .trim()
    //         .replace(/\s+/g, '-')
    // }
    
    return (
        <header>
            <nav className='nav'>
                <Link to={'/'}>
                    <Logo></Logo>
                </Link>
                {
                isTabletOrMobile?
                    <button onClick={() => clickNav()} className='btn-nav'>&#8801;</button>
                    :
                    <ul className='ul-linksNav'>
                        {navList.map((li) => {
                            return (
                                <li>
                                    <Link className='linksNav' /*to={`/${parse(li)}`}*/>
                                            {li}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                }
            </nav>
            {
                isTabletOrMobile?
                    <ul className={deployed?'ul-nav-bar': 'disable'}>
                        {deployed?
                            <>
                            {navList.map((li) => {
                                return (
                                    <li className='li-nav-bar'>
                                        {li}
                                    </li>
                                )
                            })}
                            </>
                            :
                            <></>
                        }
                    </ul>
                    :
                    <></>
            }
        </header>
    );
}

export default Navbar;