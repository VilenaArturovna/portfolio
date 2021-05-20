import React from "react";
import style from './Nav.module.scss'

export function Nav() {
    return (
        <nav className={style.nav}>
            <a href="#skills">Навыки</a>
            <a href="#projects">Проекты</a>
            <a href="#contacts">Контакты</a>
        </nav>
    )
}