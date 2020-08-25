import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm'
import { useDispatch } from 'react-redux'
import {logIn} from '../../Redux/loginPageReducer'


const useStyles = makeStyles(theme => ({
    root: {
        width : '400px',
        margin: '0 auto',
        '& .MuiFormControl-root':{
            margin: theme.spacing(1)
        },[theme.breakpoints.down('md')]: {
            maxWidth : '100%',
    }

    }
}))


const initialValues = {
    userName : '',
    password : ''
}


const LoginFormContainer = () => {

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialValues)
    const dispatch = useDispatch()

    const validate = ()=>{
        let temp = {}
        temp.userName = values.userName?'': 'This field is required.'
        temp.password = values.password?'': 'This field is required.'
        
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == '')
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    if(validate()){
        dispatch(logIn(values))
        setValues(initialValues)
    }
       
        
    }


    const classes = useStyles();
    return (
        <form className={classes.root} onSubmit = {handleSubmit}>
          <LoginForm  values = {values} handleInputChange = {handleInputChange} errors =  {errors}/>
          </form>
    
    )
}

export default LoginFormContainer