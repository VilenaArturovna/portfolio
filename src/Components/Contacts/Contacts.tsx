import React from "react";
import style from './Contacts.module.scss'
import styleContainer from "../../Common/Styles/Container.module.scss";
import {Title} from "../../Common/Components/Title/Title";

export function Contacts() {
    return (
        <section className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Контакты'} id={'contacts'}/>
                <form className={style.formContainer}>
                    <div>
                        <div className={style.paddingForm}><input type="text" placeholder={'Ваше имя'}/></div>
                        <div className={style.paddingForm}><input type="email" placeholder={'Ваш e-mail'}/></div>
                    </div>
                    <div className={style.paddingForm}><input type="text" placeholder={'Тема сообщения'}/></div>
                    <div className={style.paddingForm}><textarea placeholder={'Сообщение'}/></div>
                    <button type={'submit'}>Отправить</button>
                </form>
            </div>
        </section>
    )
}