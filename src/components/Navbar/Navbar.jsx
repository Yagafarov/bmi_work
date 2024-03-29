import React from 'react'
import './Navbar.css'
import Logo from '../../assets/images/navbar/Logo.svg'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'


const Navbar = () => {
    return (
        <navbar className="navbar">
            <div className="container">
                <div className="navbar__logo">
                    <img src={Logo} alt="" className="navbar__logo-img" />
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__menu-item">
                        <Link className='navbar__link'to={'/'}>Bosh sahifa</Link>
                    </li>
                    <li className="navbar__menu-item">
                        <Link className='navbar__link' to={'/course'}>Kurslar</Link>
                    </li>
                    <li className="navbar__menu-item">
                        <Link className='navbar__link' to={'/blog'}>Blog</Link>
                    </li>
                    <li className="navbar__menu-item">
                        <Link className='navbar__link' to={'/'}>Sahifalar</Link>
                    </li>
                    <li className="navbar__menu-item">
                        <Link className='navbar__link'to={'/book'}>Kitoblar</Link>
                    </li>
                    <li className="navbar__menu-item">
                        <Link className='navbar__link' to={'/about'} >Biz haqimizda</Link>
                    </li>
                </ul>
                <div className="navbar__btns">
                    <Button content="Kirish" variant="link"/>
                    <Button content="Ro'yxatdan o'tish" variant="default"/>
                </div>
            </div>
        </navbar>
    )
}

export default Navbar