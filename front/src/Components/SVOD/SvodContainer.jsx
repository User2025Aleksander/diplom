import React, { useEffect } from 'react'
import { Main } from '../Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getSvodTHUNK } from '../../Redux/svod_reduser'

export const SvodContainer = () => {
    let dispatch = useDispatch()
    let title = 'Сводная'
    let dataDB = useSelector((state) => state.SVOD)

    useEffect(() => {
        dispatch(getSvodTHUNK())
    }, [dispatch])

    return (
        <Main title={title} data={dataDB} />
    )
}