import React from "react";
import style from './Contacts.module.scss'
import styleContainer from "../../Common/Styles/Container.module.scss";
import {Title} from "../../Common/Components/Title/Title";
import {Formik} from 'formik';
import axios from "axios";

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
    return (
        <section className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Связаться'} id={'contacts'}/>
                <Formik
                    initialValues ={{email: '', name: '', theme: '', message: ''}}
                    validate={values => {
                        const errors: FormikErrorType = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        axios.post('http://localhost:3010/sendMessage', {values})
                            .then(() => alert('Your message has been send'))
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
                          /* and other goodies */
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
                                {errors.email && touched.email && errors.email}</div>
                            </div>
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
                            <button type={'submit'} disabled={isSubmitting}>Отправить</button>

                        </form>
                    )}
                </Formik>
            </div>
        </section>
    )
}