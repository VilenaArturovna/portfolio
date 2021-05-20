import style from "./Title.module.scss";
import React from "react";
import {Slide} from "react-awesome-reveal";

export const Title = (props: { title: string, id: string }) => {
    return (
        <Slide direction={"up"} triggerOnce={true} duration={2000}>
            <div className={style.title} id={props.id}>
                <h2>{props.title}</h2>
            </div>
        </Slide>
    )
}