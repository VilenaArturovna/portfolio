import React from "react";
import style from './Contacts.module.scss'
import styleContainer from "../../Common/Styles/Container.module.scss";
import {Title} from "../../Common/Components/Title/Title";

export function Contacts() {
    return (
        <section className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'} id={'contacts'}/>
                <form className={style.formContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                    <button type={'submit'}>Send</button>
                </form>

            </div>
        </section>
    )
}