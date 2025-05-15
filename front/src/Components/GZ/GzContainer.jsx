import React, { useEffect } from 'react'
import { Main } from '../Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getGzTHUNK } from '../../Redux/gz_reduser'

export const GzContainer = () => {
    let dispatch = useDispatch()
    let title = 'ГЗ'
    let dataDB = useSelector((state) => state.GZ)

    useEffect(() => {
        dispatch(getGzTHUNK())
    }, [dispatch])

    return (
        <Main title={title} data={dataDB} />
    )
}