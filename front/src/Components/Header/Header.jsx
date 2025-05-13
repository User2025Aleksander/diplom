import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cleanUsersThunk, getUsersThunk, isAuthThunk, toggleAuthFormThunk, toggleDataFormThunk, toogleIsError } from '../../Redux/authorization_reduser'
import { AuthorizationForm } from './AuthorizationForm/AuthorizarionForm'
import { source } from '../../Data/Source'
import clearAvatar from '../../Data/AvatarClean.png'
import logo from '../../Data/Logo.jpg'
import css from './Header.module.css'

export const Header = () => {
    // БЛОК АВТОРИЗАЦИИ
    let dataForm = useSelector((state) => state.users.dataForm) // ?? открытие формы заполнения
    let authForm = useSelector((state) => state.users.authForm) // открывает форму авторизации
    let user = useSelector((state) => state.users.users)
    let isAuth = useSelector((state) => state.users.isAuth)
    let authError = useSelector((state) => state.users.error) // в форму авторизации
    let dispatch = useDispatch()

    let userName
    let department

    useEffect(() => {
        if (user) {
            dispatch(toggleAuthFormThunk(false))
            dispatch(toogleIsError(false))
            dispatch(isAuthThunk(true))
        }
    })
    if (user) {
        localStorage.setItem('name', JSON.stringify(user.user_depname))
        localStorage.setItem('authorized', JSON.stringify(user.user_auth))
        localStorage.setItem('department', JSON.stringify(user.user_dep))
    }
    if (localStorage.getItem('authorized')) {
        isAuth = JSON.parse(localStorage.getItem('authorized'))
        userName = JSON.parse(localStorage.getItem('name'))
        department = JSON.parse(localStorage.getItem('department'))
    }

    let authorization = (values) => {
        dispatch(getUsersThunk(values))
    }

    let openAuthForm = () => {
        dispatch(toggleAuthFormThunk(true))
    }
    let closeAuthForm = () => {
        dispatch(toggleAuthFormThunk(false))
    }
    let openDataFormChange = () => {
        dispatch(toggleDataFormThunk(true))
    }
    let exitUser = () => {
        localStorage.clear()
        dispatch(isAuthThunk(false))
        dispatch(cleanUsersThunk(''))
        dispatch(toggleDataFormThunk(false))
    }

    return (
        <>
            <header className={css.header}>
                <div className={css.title}>
                    <div className={css.title_container}>
                        <img className={css.logo} src={logo} alt="Logo" />
                        <div className={css.title_content}>
                            <h1 className={css.site_title}>ССОДА</h1>
                            <p>Разработка автоматизированной системы составления форм отчетных документов предприятия</p>
                        </div>
                    </div>
                </div>
            </header>

            <nav className={css.nav}>
                <ul className={css.header__ul}>
                    {source.map((i, index) => <li key={index} className={css.header__ul__list_item}><NavLink to={`/${i.to}`} className={() => (window.location.pathname.split('/')[1] === `${i.to}` || window.location.pathname.split('/')[1] === '') ? css.header__ul__list_item__link__active : css.header__ul__list_item__link}>{i.name}</NavLink></li>)}
                </ul>
                {/* Форма авторизации */}
                <AuthorizationForm authorization={authorization} closeAuthForm={closeAuthForm} authForm={authForm} authError={authError} />

                {(isAuth)
                    ?
                    <div className={css.header__auth_profile_form}>
                        <button className={css.header__auth_button} onClick={openDataFormChange}>Заполнение Плана</button>
                        <div className={css.profile_block}>
                            <img src={clearAvatar} className={css.avatar_img} alt="avatar" />
                            <p className={css.user_name}>{userName || user.name}</p>
                        </div>
                        <button className={css.header__auth_button} onClick={exitUser}>Выйти</button>
                    </div>
                    :
                    <button className={css.header__auth_button} onClick={openAuthForm}>Авторизация</button>
                }
            </nav >
        </>
    )
}