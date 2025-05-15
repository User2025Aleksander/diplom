import React, { useEffect } from 'react'
import { Main } from '../Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getFlTHUNK } from '../../Redux/fl_reduser'

export const FlContainer = () => {
    let dispatch = useDispatch()
    let title = 'Платные'
    let dataDB = useSelector((state) => state.FL)

    useEffect(() => {
        dispatch(getFlTHUNK())
    }, [dispatch])

    return (
        <Main title={title} data={dataDB} />
    )
}