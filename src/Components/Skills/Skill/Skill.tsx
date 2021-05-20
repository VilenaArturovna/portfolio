import React from "react";
import style from './Skill.module.scss'
import {iconsForSkills, SkillType} from "../../../state/state";

export function Skill(props: SkillType) {
    return (
        <div className={style.skill}>

            <div className={style.icon}>
                {iconsForSkills.map((i) => {
                    return i.title === props.title ? i.icon : null
                })
            }</div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

