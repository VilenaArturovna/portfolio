import React from "react";
import style from './Header.module.scss'
import Nav from "./Nav/Nav";
import styleContainer from "../../Common/Styles/Container.module.scss";

function Header() {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <Nav />
            </div>

        </div>
    )
}

export default Header