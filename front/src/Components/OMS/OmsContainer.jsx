import React, { useEffect } from 'react'
import { Main } from '../Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getOmsTHUNK } from '../../Redux/oms_reduser'

export const OmsContainer = () => {
    let dispatch = useDispatch()
    let title = 'ОМС'
    let dataDB = useSelector((state) => state.OMS)

    console.log(dataDB)
    
    useEffect(() => {
        dispatch(getOmsTHUNK())
    }, [dispatch])

    return (
        <Main title={title} data={dataDB} />
    )
}