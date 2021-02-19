import style from "./Title.module.scss";
import React from "react";

export const Title = (props: { title: string, id: string }) => {
    return (
        <div className={style.title} id={props.id}>
            <h2>{props.title}</h2>
        </div>
    )
}