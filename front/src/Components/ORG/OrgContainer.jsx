import React, { useEffect } from 'react'
import { Main } from '../Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getOrgTHUNK } from '../../Redux/org_reduser'

export const OrgContainer = () => {
    let dispatch = useDispatch()
    let title = 'Организации'
    let dataDB = useSelector((state) => state.ORG)

    useEffect(() => {
        dispatch(getOrgTHUNK())
    }, [dispatch])

    return (
        <Main title={title} data={dataDB} />
    )
}