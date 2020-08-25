import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    maxHeight: 440,
    minWidth: 600
  },
  table: {

  }

}))


const Terminals = (props) => {

  const { terminals, handleDelete } = props

  const classes = useStyles();
  return (
    <TableContainer className={classes.root} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 160 }}>Терминал</TableCell>
            <TableCell >Описание</TableCell>
            <TableCell style={{ width: 80 }} align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {terminals.map((terminal) => (
            <TableRow key={terminal.id}>
              <TableCell component="th" scope="row">
                {terminal.title}
              </TableCell>
              <TableCell >{terminal.description}</TableCell>
              <TableCell >
                <IconButton aria-label="delete" color ='primary'onClick = {() => handleDelete (terminal.id)}> <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Terminals