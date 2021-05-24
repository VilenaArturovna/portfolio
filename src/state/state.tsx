import socialImage from "../Assets/Images/social.jpg";
import todoImage from "../Assets/Images/todolist.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3Alt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import style from "../Components/Skills/Skill/Skill.module.scss";
import redux from "../Assets/Images/iconSkills/redux.png";
import typescript from "../Assets/Images/iconSkills/file_type_typescript_icon_130108.png";
import React from "react";
import {faTv} from "@fortawesome/free-solid-svg-icons/faTv";

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
        title: 'Social network',
        description: 'Небольшая социальная сеть'
    },
    {
        img: {
            backgroundImage: `url(${todoImage})`,
        },
        title: 'TodoList',
        description: 'Всем полюбившийся "to do list"'
    },
]

export type SkillType = {
    title: string
    description: string
}
export const skills: Array<SkillType> = [
    {title: 'React', description: 'Функциональные компоненты, Hooks, react-router, material-ui, swiper и др.'},
    {title: 'Redux', description: 'react-redux, redux-thunk, axios, redux-toolkit, formik, redux-form'},
    {title: 'TypeScript', description: 'Типизация, дженерики'},
    {title: 'JavaScript', description: 'Основы JavaScript'},
    {title: 'HTML5', description: 'Вёрстка, семантика'},
    {title: 'CSS3', description: 'Медиазапросы, препроцессор SASS, миксины'},
    {title: 'Дополнительно', description: 'Storybook, тестирование'}
]

export const iconsForSkills = [
    {title: 'React', icon: <FontAwesomeIcon icon={faReact} className={style.icon} style={{color: '#61dafb'}}/>},
    {title: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} className={style.icon}  style={{color: '#2196f3'}}/>},
    {title: 'CSS3', icon: <FontAwesomeIcon icon={faCss3Alt} className={style.icon} style={{color: '#fc490b'}}/>},
    {title: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} className={style.icon} style={{color: '#f07f21'}}/>},
    {title: 'Redux', icon: <img src={redux} className={style.icon} alt={'redux'} />},
    {title: 'TypeScript', icon: <img src={typescript} className={style.icon} alt={'typescript'}/>},
    {title: 'Дополнительно', icon: <FontAwesomeIcon icon={faTv} className={style.icon} style={{color: 'mediumvioletred'}}/>}
]