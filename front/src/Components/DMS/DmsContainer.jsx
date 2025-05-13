import React, { useEffect } from 'react'
import { Main } from '../Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getDmsTHUNK } from '../../Redux/dms_reduser'

export const DmsContainer = () => {
    let dispatch = useDispatch()
    let title = 'ДМС'
    let dataDB = useSelector((state) => state.DMS)
    console.log('CONTAINER', dataDB)

    useEffect(() => {
        dispatch(getDmsTHUNK())
    }, [dispatch])

    return (
        <Main title={title} />
    )
}