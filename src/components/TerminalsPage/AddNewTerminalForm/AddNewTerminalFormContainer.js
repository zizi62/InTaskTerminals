import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AddNewTerminalForm from './AddNewTerminalForm'
import { useDispatch } from 'react-redux'
import {addNewTerminal} from '../../../Redux/terminalsPageReducer'


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom:theme.spacing(2),
        '& .MuiFormControl-root':{
            margin: theme.spacing(1)
        }

    }
}))


const initialValues = {
    title : '',
    description : ''
}


const AddNewTerminalFormContainer = () => {

    const dispatch = useDispatch()

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const validate = ()=>{
        let temp = {}
        temp.title = values.title?'': 'This field is required.'
        temp.description = values.description?'': 'This field is required.'
        
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == '')
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(validate()){
            dispatch(addNewTerminal(values))
            setValues(initialValues)
        }
          
    }

    const classes = useStyles();
    return (
        <form className={classes.root} onSubmit = {handleSubmit}>
          <AddNewTerminalForm  values = {values} handleInputChange = {handleInputChange} errors =  {errors}/>
          </form>
    
    )
}

export default AddNewTerminalFormContainer