import React from "react";
import style from './Projects.module.scss'
import styleContainer from '../../Common/Styles/Container.module.scss'
import {Project} from "./Project/Project";
import {Title} from "../../Common/Components/Title/Title";
import {projects} from "../../state/state";

export function Projects() {
    return (
        <section className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Проекты'} id={'projects'}/>
                <div className={style.projects}>
                    {projects.map((p, index) => <Project key={index} img={p.img} title={p.title}
                                                         description={p.description} github={p.github} pages={p.pages}
                                                         technologies={p.technologies} abilities={p.abilities}/>)}
                </div>
            </div>
        </section>
    )
}