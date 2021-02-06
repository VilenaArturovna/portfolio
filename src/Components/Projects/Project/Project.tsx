import React, {CSSProperties} from "react";
import style from './Project.module.css'

export type ProjectType = {
    img: string
    title: string
    description: string
}

export function Project(props: ProjectType) {
    const styles: CSSProperties = {
        backgroundImage: `url(${props.img})`
    }
    return (
        <div className={style.project}>
            <div style={styles || ''} className={style.imgContainer}>
                <button>See</button>
            </div>
            <h3>{props.title}</h3>
            <div>{props.description}</div>
        </div>
    )
}