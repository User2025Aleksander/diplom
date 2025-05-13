import React, { useEffect } from 'react'
import { Main } from '../Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getGzTHUNK } from '../../Redux/GZ_reduser'

export const FlContainer = () => {
    let dispatch = useDispatch()
    let title = 'ГЗ'
    let dataDB = useSelector((state) => state.GZ)

    useEffect(() => {
        dispatch(getGzTHUNK())
    }, [dispatch])

    return (
        <Main title={title} />
    )
}