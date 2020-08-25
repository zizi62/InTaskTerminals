import React from 'react'
import { TextField} from '@material-ui/core'


const TextAria = (props)=>{

    const {name, label, value, error = null,  rows, onChange} = props
    return (
        <TextField
        variant='outlined'
        label={label}
        name = {name}
        value={value}
        onChange= {onChange}
        multiline
        rows={rows}
        {...(error && {error:true, helperText: error})}
    />
    )
}

export default TextAria 
