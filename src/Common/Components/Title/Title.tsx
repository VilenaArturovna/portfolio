import style from "./Title.module.css";
import React from "react";

export const Title = (props: { title: string }) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
}