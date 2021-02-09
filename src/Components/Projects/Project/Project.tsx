import React from "react";
import style from './Project.module.scss'

export type ProjectType = {
    img: {backgroundImage: string}
    title: string
    description: string
}

export function Project(props: ProjectType) {
    return (
        <div className={style.project}>
            <div style={props.img} className={style.imgContainer}>
                <a>See</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    )
}