import React from "react";
import style from './Projects.module.css'
import styleContainer from '../../Common/Styles/Container.module.css'
import {Project, ProjectType} from "./Project/Project";

const projects: Array<ProjectType> = [
    {img: '', title: 'Social', description: 'Note that the development build is not optimized.To create a production build, use yarn build.'},
    {img: '', title: 'Todolist', description: 'Note that the development build is not optimized.To create a production build, use yarn build.'},
]

export function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    {projects.map(p => <Project img={p.img} title={p.title} description={p.description} />)}
                </div>

            </div>

        </div>
    )
}