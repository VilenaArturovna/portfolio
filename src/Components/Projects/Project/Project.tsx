import React from "react";
import style from './Project.module.scss'
import {ProjectType} from "../../../state/state";

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