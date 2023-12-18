import React from 'react'
import './Footer.css'
import Logo from '../../assets/images/navbar/Logo.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper grid">
                    <div className="footer__content">
                        <div className="footer__content-logo">
                            <img src={Logo} alt="" className="footer__logo-img" />
                        </div>
                        <p className="footer__content-text">
                        Bu loyiha orqali siz dunyodagi eng yangi kasb egasi bo’lishingiz mumkin bo’ladi. Turli xildagi 1500 dan ziyod kurslarni jamlagan yagona platforma.
                        </p>
                    </div>
                    <div className="footer__links">
                        <h3 className="footer_title">Havolalar</h3>
                    </div>
                    <div className="footer__support">
                        <h3 className="footer_title">Biz bilan bog'lanish</h3>
                    </div>
                    <div className="footer__location">
                        Lorem, ipsum dolor.
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>
                        Copyright 2023 | Barcha huquqlar himoyalangan
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer