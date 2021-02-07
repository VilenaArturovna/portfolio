import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../../Common/Styles/Container.module.css";
import {Title} from "../../Common/Components/Title/Title";

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'} />
                <form className={style.formContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                    <button type={'submit'}>Send</button>
                </form>

            </div>
        </div>
    )
}