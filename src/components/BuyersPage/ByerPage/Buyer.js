import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    position: 'relative',
    width: '80%',
  }
}))

const Buyer = (props) => {

  const classes = useStyles()
  const { id, name, check, purchases, proceeds } = props
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" color="primary" gutterBottom>
          Имя покупателя :  {name}
        </Typography>
        <Typography variant="button" display="block" gutterBottom >
          Средний чек: {check}
        </Typography>
        <Typography variant="button" display="block" gutterBottom >
          Количество покупок: {purchases}
        </Typography>
        <Typography variant="button" display="block" gutterBottom >
          Общая выручка: {proceeds}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Buyer






