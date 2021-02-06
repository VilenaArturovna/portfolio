import React from "react";
import style from './Header.module.css'
import Nav from "./Nav/Nav";
import styleContainer from "../../Common/Styles/Container.module.css";

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