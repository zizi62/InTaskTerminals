import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Input from '../common/Input'
import Button from '../common/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column'
    }
}))

const LoginForm = (props) => {

    const { values, errors, handleInputChange } = props

    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Input
                label='Login'
                name='userName'
                value={values.userName}
                onChange={handleInputChange}
                error={errors.userName}
            />
            <Input
                label='Password'
                name='password'
                type='password'
                value={values.password}
                onChange={handleInputChange}
                error={errors.password}
            />
            <Button text='Login' component='button' type='submit' />
        </Paper>
    )
}

export default LoginForm