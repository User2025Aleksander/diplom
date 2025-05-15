import React, { useEffect } from 'react'
import { Main } from '../Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getSportTHUNK } from '../../Redux/sport_reduser'

export const SportContainer = () => {
    let dispatch = useDispatch()
    let title = 'Спорт'
    let dataDB = useSelector((state) => state.SPORT)

    useEffect(() => {
        dispatch(getSportTHUNK())
    }, [dispatch])

    return (
        <Main title={title} data={dataDB} />
    )
}