import React, {useEffect, useCallback} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Terminals from './Terminals'
import { getTerminalsData, deleteTerminal } from '../../Redux/terminalsPageReducer'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles(theme => ({
    root: {

    }
}))


const TerminalsContainer = (props) => {
    const terminals = useSelector((state)=> state.terminalsPage.terminals)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTerminalsData())
    },[dispatch])

    const handleDelete = useCallback((id) => {
        dispatch(deleteTerminal(id))
    }, [dispatch, deleteTerminal]);
   
    const classes = useStyles();
    return (
       <>
       <Terminals terminals = {terminals} handleDelete = {handleDelete}/>
       </>  
    )
}

export default TerminalsContainer