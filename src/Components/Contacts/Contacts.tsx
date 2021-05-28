import React, {useState} from "react";
import style from './Contacts.module.scss'
import styleContainer from "../../Common/Styles/Container.module.scss";
import {Title} from "../../Common/Components/Title/Title";
import {Formik} from 'formik';
import axios from "axios";
import {Popup} from "../../Common/Components/Popup/Popup";

export type FormikType = {
    email: string
    name: string
    theme: string
    message: string
}

type FormikErrorType = {
    email?: string
    name?: string
    theme?: string
    message?: string
}

export function Contacts() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <section className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Связаться'} id={'contacts'}/>
                <Formik
                    initialValues={{email: '', name: '', theme: '', message: ''}}
                    validate={values => {
                        const errors: FormikErrorType = {};
                        if (!values.email) {
                            errors.email = 'E-mail должен быть заполнен';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {errors.email = 'Invalid email address'}
                        if (!values.message) {
                            errors.message = 'Поле сообщения должно быть заполнено';
                        }
                        return errors;
                    }}
                    onSubmit={async (values, {setSubmitting}) => {
                        try {
                            await axios.post('https://vilena-feedback.herokuapp.com', {values})
                            togglePopup()
                        } catch (e) {
                            alert('Произошла непредвиденная ошибка: ' + e)
                        }
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit} className={style.formContainer}>

                            <div className={style.columnInputs}>
                                <div className={style.paddingForm}><input type="text" name="name"
                                                                          onChange={handleChange}
                                                                          onBlur={handleBlur}
                                                                          value={values.name} placeholder={'Ваше имя'}/>
                                </div>
                                <div className={style.paddingForm}><input type="email" name="email"
                                                                          onChange={handleChange}
                                                                          onBlur={handleBlur}
                                                                          value={values.email}
                                                                          placeholder={'Ваш e-mail'}/>
                                </div>

                            </div>
                            {errors.email && touched.email && <div className={style.error}>{errors.email}</div>}
                            <div className={style.paddingForm}><input type="text" name="theme"
                                                                      onChange={handleChange}
                                                                      onBlur={handleBlur}
                                                                      value={values.theme}
                                                                      placeholder={'Тема сообщения'}/></div>
                            <div className={style.paddingForm}><textarea name="message"
                                                                         onChange={handleChange}
                                                                         onBlur={handleBlur}
                                                                         value={values.message}
                                                                         placeholder={'Сообщение'}/></div>
                            {errors.message && <div className={style.error}>{errors.message}</div>}
                            <button type={'submit'} disabled={isSubmitting}>Отправить</button>

                        </form>
                    )}
                </Formik>
                {isOpen && <Popup
                    content={'Ваше сообщение отправлено. Спасибо за внимание к моей персоне. Я свяжусь с Вами в ' +
                    'ближайшее время'}
                    handleClose={togglePopup}
                />}
            </div>
        </section>
    )
}