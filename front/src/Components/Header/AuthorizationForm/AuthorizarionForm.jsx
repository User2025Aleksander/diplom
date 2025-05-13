import css from './AuthorizarionForm.module.css'
import { Form, Field, Formik } from 'formik'

export const AuthorizationForm = ({ authorization, closeAuthForm, authForm, authError }) => {
    return (
        <div className={(authForm) ? css.authFormOpen : css.authFormClose}>
            <button className={css.close_button} onClick={closeAuthForm}>X</button>
            <div>                
                <h1 className={css.h1}>Введите логин и пароль...</h1>
                <Formik
                    initialValues={{ login: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.login) {
                            errors.login = 'Введите логин';
                        }
                        if (!values.password) {
                            errors.password = 'Введите пароль';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                        authorization(values)
                    }}
                >
                    {({ isSubmitting, handleChange, errors, touched }) => (
                        <Form className={css.signin}>
                            <Field className={css.login} type="text" name="login" placeholder="Login" autoComplete="off" onChange={handleChange} />
                            <Field className={css.password} type="password" name="password" placeholder="Password" autoComplete="off" onChange={handleChange} />
                            <button className={css.button} type="submit" disabled={isSubmitting}>{'\u2BC8'}</button>
                            <div>
                                <p>{errors.login && touched.login && errors.login}</p>
                                <p>{errors.password && touched.password && errors.password}</p>
                                {(authError) && <p>Неправильный логин или пароль!</p>}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <p className={css.p}>Для регистрации свяжятесь по телефону: +7 (915) 281-11-11</p>
        </div>
    )
}