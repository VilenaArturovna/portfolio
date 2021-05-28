import React from "react";
import style from './Popup.module.scss'

type PropsType = {
    content: string
    handleClose: () => void
}

export const Popup = (props: PropsType) => {
    return (
        <div className={style.popupBox}>
            <div className={style.box}>
                <span className={style.closeIcon} onClick={props.handleClose}>x</span>
                <>
                    <p>{props.content}</p>
                </>
            </div>
        </div>
    );
};