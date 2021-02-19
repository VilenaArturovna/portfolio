import React from "react";
import style from './Projects.module.scss'
import styleContainer from '../../Common/Styles/Container.module.scss'
import {Project, ProjectType} from "./Project/Project";
import {Title} from "../../Common/Components/Title/Title";
import socialImage from './../../Assets/Images/social.jpg'
import todoImage from './../../Assets/Images/todolist.jpg'

const projects: Array<ProjectType> = [
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

export function Projects() {

    return (
        <section className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'} id={'projects'}/>
                <div className={style.projects}>
                    {projects.map(p => <Project img={p.img} title={p.title} description={p.description}/>)}
                </div>

            </div>

        </section>
    )
}