import React, {Component} from "react";
import style from './Skill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3Alt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import redux from "./../../../Assets/Images/iconSkills/redux.png"
import typescript from "./../../../Assets/Images/iconSkills/file_type_typescript_icon_130108.png"

let icons = [
    {title: 'React', icon: <FontAwesomeIcon icon={faReact} className={style.icon} style={{color: '#61dafb'}}/>},
    {title: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} className={style.icon}  style={{color: '#2196f3'}}/>},
    {title: 'CSS3', icon: <FontAwesomeIcon icon={faCss3Alt} className={style.icon} style={{color: '#fc490b'}}/>},
    {title: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} className={style.icon} style={{color: '#f07f21'}}/>},
    {title: 'Redux', icon: <img src={redux} className={style.icon} />},
    {title: 'TypeScript', icon: <img src={typescript} className={style.icon} />},
]

export type SkillType = {
    title: string
    description: string
}

function Skill(props: SkillType) {

    return (
        <div className={style.skill}>

            <div className={style.icon}>
                {icons.map(i => {
                    return i.title == props.title ? i.icon : null
                })
            }</div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Skill