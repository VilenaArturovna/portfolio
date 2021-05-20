import socialImage from "../Assets/Images/social.jpg";
import todoImage from "../Assets/Images/todolist.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3Alt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import style from "../Components/Skills/Skill/Skill.module.scss";
import redux from "../Assets/Images/iconSkills/redux.png";
import typescript from "../Assets/Images/iconSkills/file_type_typescript_icon_130108.png";
import React from "react";

export type ProjectType = {
    img: {backgroundImage: string}
    title: string
    description: string
}
export const projects: Array<ProjectType> = [
    {
        img: {
            backgroundImage: `url(${socialImage})`,
        },
        title: 'Social',
        description: 'Note that the development build is not optimized.To create a production build, use yarn build.'
    },
    {
        img: {
            backgroundImage: `url(${todoImage})`,
        },
        title: 'Todolist',
        description: 'Note that the development build is not optimized.'
    },
]

export type SkillType = {
    title: string
    description: string
}
export const skills: Array<SkillType> = [
    {title: 'HTML5', description: 'Вёрстка, семантика'},
    {title: 'CSS3', description: 'Медиазапросы, препроцессор SASS, миксины'},
    {title: 'React', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
    {title: 'TypeScript', description: 'Типизация, дженерики'},
    {title: 'Redux', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
    {title: 'JavaScript', description: 'Корпорация Майкрософт (Microsoft Corporation), 2020. Все права защищены.'},
]

export const iconsForSkills = [
    {title: 'React', icon: <FontAwesomeIcon icon={faReact} className={style.icon} style={{color: '#61dafb'}}/>},
    {title: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} className={style.icon}  style={{color: '#2196f3'}}/>},
    {title: 'CSS3', icon: <FontAwesomeIcon icon={faCss3Alt} className={style.icon} style={{color: '#fc490b'}}/>},
    {title: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} className={style.icon} style={{color: '#f07f21'}}/>},
    {title: 'Redux', icon: <img src={redux} className={style.icon} alt={'redux'} />},
    {title: 'TypeScript', icon: <img src={typescript} className={style.icon} alt={'typescript'}/>},
]