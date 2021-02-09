import React from "react";
import style from './Main.module.scss'
import styleContainer from '../../Common/Styles/Container.module.css'
import {Title} from "../../Common/Components/Title/Title";

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`} >
                <Title title={'About me'} />
                <div className={style.info}>
                    <div className={style.greeting}>
                        <p>Hi, I'm Vilena. Web developer from Omsk, Russian Federation.</p>
                    </div>
                    <div className={style.photo}></div>
                </div>
            </div>
        </div>
    )

}

export default Main