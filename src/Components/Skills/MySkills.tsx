import React from "react";
import styleContainer from '../../Common/Styles/Container.module.scss'
import Skill, {SkillType} from "./Skill/Skill";
import style from './MySkills.module.scss'
import {Title} from "../../Common/Components/Title/Title";


const skills: Array<SkillType> = [
    {title: 'HTML5', description: 'Вёрстка, семантика'},
    {title: 'CSS3', description: 'Медиазапросы, препроцессор SASS, миксины'},
    {title: 'React', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
    {title: 'TypeScript', description: 'Типизация, дженерики'},
    {title: 'Redux', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
    {title: 'JavaScript', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
]

function MySkills() {
    return (
        <section className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"} id={'skills'}/>

                <div className={style.skills}>
                    {skills.map(s => <Skill title={s.title} description={s.description} />)}
                </div>
            </div>
        </section>
    )
}

export default MySkills