import React, { useEffect } from 'react'
import { Main } from '../Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getVmpTHUNK } from '../../Redux/vmp_reduser'

export const VmpContainer = () => {
    let dispatch = useDispatch()
    let title = 'ВМП'
    let dataDB = useSelector((state) => state.VMP)

    useEffect(() => {
        dispatch(getVmpTHUNK())
    }, [dispatch])

    return (
        <Main title={title} data={dataDB} />
    )
}