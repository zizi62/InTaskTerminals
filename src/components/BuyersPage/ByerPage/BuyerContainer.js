import React, { useEffect } from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import Buyer from './Buyer'
import { useDispatch, useSelector } from 'react-redux'
import { getBuyer } from '../../../Redux/buyersPageReducer'
import { useParams } from "react-router-dom"

const useStyles = makeStyles(theme => ({
    root: {

    }
}))

const BuyerContainer = () => {

    const buyer = useSelector((state) => state.buyersPage.buyer)
    const classes = useStyles()
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getBuyer(id))
    }, [])

    return (
        <Buyer {...buyer} />

    )
}

export default BuyerContainer