import socialImage from "../Assets/Images/social.jpg";
import todoImage from "../Assets/Images/todolist.jpg";
import portfolioImage from "../Assets/Images/portfolio.png";
import itDocImage from "../Assets/Images/itDoc.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3Alt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import style from "../Components/Skills/Skill/Skill.module.scss";
import redux from "../Assets/Images/iconSkills/redux.png";
import typescript from "../Assets/Images/iconSkills/file_type_typescript_icon_130108.png";
import React from "react";
import {faTv} from "@fortawesome/free-solid-svg-icons/faTv";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";

export type ProjectType = {
    img: { backgroundImage: string }
    title: string
    description: string
    pages: string
    github: string
    abilities: string
    technologies: string
}
export const projects: Array<ProjectType> = [
    {
        img: {
            backgroundImage: `url(${socialImage})`,
        },
        title: 'Social network',
        description: 'Небольшая социальная сеть',
        pages: 'https://vilenaarturovna.github.io/WayOfSamurai/',
        github: 'https://github.com/VilenaArturovna/WayOfSamurai',
        abilities: 'Авторизация в приложении, редактирование профиля, переход ' +
            'по страницам пользователей, подписка и отписка от пользователей, добавление постов',
        technologies: 'React, redux, typescript, router, thunk, axios'
    },
    {
        img: {
            backgroundImage: `url(${todoImage})`,
        },
        title: 'TodoList',
        description: 'Всем полюбившийся "to do list"',
        pages: 'https://vilenaarturovna.github.io/todolist/',
        github: 'https://github.com/VilenaArturovna/todolist',
        abilities: 'Авторизация в приложении, добавление, удаление листов и тасок, редактирование названия листов и ' +
            'тасок, изменение статуса выполнения тасок',
        technologies: 'React, redux, typescript, router, thunk, axios, toolkit, material-ui, formik, тесты'
    },
    {
        img: {
            backgroundImage: `url(${itDocImage})`,
        },
        title: 'IT Doc',
        description: 'Сайт для ООО "Айти ДОК"',
        pages: 'https://vilenaarturovna.github.io/it-doc/',
        github: 'https://github.com/VilenaArturovna/it-doc',
        abilities: 'Сайт находится в разработке. В ближайшее время будет реализована информация о наличии запасных ' +
            'частей на складе организации. В будущем также будет реализована информация о заказах и база клиентов' +
            ' организации. Backend-часть на стадии разработки у представителя организации',
        technologies: 'React, typescript, swiper, material-ui'
    },
    {
        img: {
            backgroundImage: `url(${portfolioImage})`,
        },
        title: 'Портфолио',
        description: 'Именно это портфолио',
        pages: 'https://vilenaarturovna.github.io/portfolio/',
        github: 'https://github.com/VilenaArturovna/portfolio',
        abilities: 'Ничего особенного. Просто лэндинг с минимумом анимации и формой обратной связи',
        technologies: 'React, typescript, axios, formik, nodejs-express'
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
    {title: 'Дополнительно', description: 'Storybook, тестирование'},
    {title: 'Soft skills', description: 'Аналитический склад ума, быстрая обучаемость, коммуникабельность'}
]

export const iconsForSkills = [
    {title: 'React', icon: <FontAwesomeIcon icon={faReact} className={style.icon} style={{color: '#61dafb'}}/>},
    {title: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} className={style.icon} style={{color: '#2196f3'}}/>},
    {title: 'CSS3', icon: <FontAwesomeIcon icon={faCss3Alt} className={style.icon} style={{color: '#fc490b'}}/>},
    {title: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} className={style.icon} style={{color: '#f07f21'}}/>},
    {title: 'Redux', icon: <img src={redux} className={style.icon} alt={'redux'}/>},
    {title: 'TypeScript', icon: <img src={typescript} className={style.icon} alt={'typescript'}/>},
    {
        title: 'Дополнительно',
        icon: <FontAwesomeIcon icon={faTv} className={style.icon} style={{color: 'mediumvioletred'}}/>
    },
    {
        title: 'Soft skills',
        icon: <FontAwesomeIcon icon={faUserCircle} className={style.icon} style={{color: 'orange'}}/>
    }
]