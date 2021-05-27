import React, {useState} from "react";
import style from './Project.module.scss'
import {ProjectType} from "../../../state/state";

export function Project(props: ProjectType) {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={style.project}>
            <div style={props.img} className={style.imgContainer}>
                <a href={props.pages}>Посмотреть проект</a>
                <a href={props.github}>Посмотреть код</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
                <p className={style.description}
                   style={collapsed ? {'textDecoration': 'underline'} : {'textDecoration': 'none'}}
                   onClick={onCollapsed}>Возможности и технологии</p>
                {!collapsed &&
                <div>
                    <div>{props.abilities}</div>
                    <div>{props.technologies}</div>
                </div>}
            </div>
        </div>
    )
}