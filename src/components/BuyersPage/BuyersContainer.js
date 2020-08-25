import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Buyers from './Buyers'
import { getBuyersList } from '../../Redux/buyersPageReducer'
import { useSelector, useDispatch } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

const BuyersContainer = (props) => {

    const buyersList = useSelector((state) => state.buyersPage.buyers)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBuyersList())
    }, [dispatch])

    return (
        <Buyers buyersList={buyersList} />
    )
}

export default BuyersContainer