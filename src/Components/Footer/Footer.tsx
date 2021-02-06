import React from "react";
import style from './Footer.module.css'
import styleContainer from "../../Common/Styles/Container.module.css";

export function Footer() {
    return(
        <footer className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Vilena Sazanova</h2>
                <div className={style.social}>---social icons---</div>
                <div><time>2021</time> All rights reserved</div>
            </div>
        </footer>
    )
}