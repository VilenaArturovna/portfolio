import React from "react";
import styleContainer from '../../Common/Styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import style from './MySkills.module.scss'
import {Title} from "../../Common/Components/Title/Title";
import {skills} from "../../state/state";

export function MySkills() {
    return (
        <section className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Навыки"} id={'skills'}/>
                <div className={style.skills}>
                    {skills.map((s, index) => <Skill key={index} title={s.title} description={s.description} />)}
                </div>
            </div>
        </section>
    )
}