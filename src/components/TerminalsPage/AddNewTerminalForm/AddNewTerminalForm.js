import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '../../common/Input'
import Button from '../../common/Button'
import TextAria from '../../common/TextAria'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',  
    }
}))


const AddNewTerminalForm = (props) => {
    const {values, errors, handleInputChange} = props  

    const classes = useStyles();
    return (
       <Paper className = {classes.root}>
       <Input
       label='Название'
       name='title'
       value={values.title}
       onChange={handleInputChange}
       error={errors.title}
       />
       <TextAria
       variant='outlined'
       label='Описание'
       name = 'description'
       value= {values.description}
       multiline
       rows={4}
       onChange= {handleInputChange}
       error={errors.description}
        />
    <div><Button  size='small' text = 'Добавить' component = 'button' type = 'submit'/></div>
      
       </Paper>
    
    )
}

export default AddNewTerminalForm