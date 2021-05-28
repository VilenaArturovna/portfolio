import React from "react";
import style from './Main.module.scss'
import styleContainer from '../../Common/Styles/Container.module.scss'
import {Title} from "../../Common/Components/Title/Title";
import {Figures} from "./Figures-background/Figures";
import photoImg from '../../Assets/Images/Photo.jpg'

export function Main() {
    return (
        <section className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Figures/>
                <Title title={'Обо мне'} id={'about'}/>
                <div className={style.info}>
                    <div className={style.greeting}>
                        <p>Привет!!<br/> Меня зовут Вилена<br/>Я - frontend-разработчик из Омска <br/>Возраст: 34
                            года<br/>Образование: ОмГТУ, промышленная теплоэнергетика <br/>
                        </p>
                    </div>
                    <div className={style.photo}
                         style={{backgroundImage: `url(${photoImg})`, backgroundSize: 'cover'}}></div>
                </div>
            </div>
        </section>
    )
}

