import React from "react";
import style from './Nav.module.scss'

function Nav() {
    return (
        <nav className={style.nav}>
            <a href="#skills">Скиллы</a>
            <a href="#projects">Проекты</a>
            <a href="#contacts">Контакты</a>
        </nav>
    )
}

export default Nav