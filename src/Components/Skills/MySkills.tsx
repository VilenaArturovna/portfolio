import React from "react";
import styleContainer from '../../Common/Styles/Container.module.css'
import Skill, {SkillType} from "./Skill/Skill";
import style from './MySkills.module.css'

const skills: Array<SkillType> = [
    {title: 'HTML', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
    {title: 'CSS', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
    {title: 'React', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
    {title: 'Typescript', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
]

function MySkills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    {skills.map(s => <Skill title={s.title} description={s.description} />)}
                </div>
            </div>
        </div>
    )
}

export default MySkills