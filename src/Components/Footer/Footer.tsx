import React from "react";
import style from './Footer.module.scss'
import styleContainer from "../../Common/Styles/Container.module.scss";
import {faFacebook, faInstagram, faLinkedinIn, faTelegram, faVk, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Footer() {
    return(
        <footer className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Вилена Сазанова</h2>
                <div className={style.social}>
                    <a href={'https://vk.com/id15969480'}><FontAwesomeIcon icon={faVk} className={style.icon} style={{color: '#FFF'}}/></a>
                    <a href={'https://www.instagram.com/vilena_arturovna/'}><FontAwesomeIcon icon={faInstagram} className={style.icon} style={{color: '#FFF'}}/></a>
                    <a href={'https://www.facebook.com/vilena.forever'}><FontAwesomeIcon icon={faFacebook} className={style.icon} style={{color: '#FFF'}}/></a>
                    <a href={'https://www.linkedin.com/in/vilena-sazanova-359a411b1/'}><FontAwesomeIcon icon={faLinkedinIn} className={style.icon} style={{color: '#FFF'}}/></a>
                    <a href={"https://wa.me/79620496314"}><FontAwesomeIcon icon={faWhatsapp} className={style.icon} style={{color: '#FFF'}}/></a>
                    <a href={'https://telegram.me/vilena_arturovna'}><FontAwesomeIcon icon={faTelegram} className={style.icon} style={{color: '#FFF'}}/></a>
                </div>
                <div className={style.date}><time>2021</time> © All rights reserved</div>
            </div>
        </footer>
    )
}