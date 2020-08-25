import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TableContainer, TableBody, TableRow, TableCell, Table, TableHead, TablePagination, TableSortLabel, TextField } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { BUYERS_PATH } from '../Routes'

const headCells = [
    { id: 'id', label: 'ID', disableSorting: true },
    { id: 'name', label: 'Имя покупателя' },
    { id: 'check', label: 'Средний чек' },
    { id: 'purchases', label: 'Количество покупок' },
    { id: 'proceeds', label: 'Общая выручка' }
]

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    }, container: {
        maxHeight: 440,
        width:'100%',
        overflowX: 'auto'
    },
    table: {
        marginTop: theme.spacing(2),
        '& thead tr': {
            backgroundColor: '#e0e0e0'
        },
        '& tbody tr:hover': {
            backgroundColor: '#f5f5f5',
            cursor: 'pointer'
        }
    },
    search: {
        width: 300,
        marginBottom: theme.spacing(2)
    }

}))


const Buyers = (props) => {

    const classes = useStyles()

    const { buyersList } = props

    const [buyers, setByers] = useState(buyersList)
    const pages = [5, 10, 15]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()


    useEffect(() => {
        setByers(buyersList)
    }, [buyersList])


    const handleSearch = (e) => {
        if (e.target.value === '') {
            setByers(buyersList)
        } else {
            let filteredBuyers = buyers.filter(buyer => buyer.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setByers(filteredBuyers)
        }
    }

    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(0)
    }

    const tableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }


    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const handleSort = (sortColumn) => {
        const isAsn = orderBy === sortColumn && order === 'asc'
        setOrder(isAsn ? 'desc' : 'asc')
        setOrderBy(sortColumn)
    }


    const setFullFilteredByers = () => {
        return tableSort(buyers, getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }



    return (
        <div className={classes.root}>
            <TextField className={classes.search} id="standard-search" label="Search" type="search" onChange={handleSearch} />
            <TableContainer className={classes.container}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>{headCells.map(headCell => (
                            <TableCell key={headCell.id}
                                sortDirection={orderBy === headCell.id ? order : false}>
                                {headCell.disableSorting ? headCell.label :
                                    <TableSortLabel
                                        onClick={() => handleSort(headCell.id)}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        active={orderBy === headCell.id}
                                    >
                                        {headCell.label}
                                    </TableSortLabel>}
                            </TableCell>
                        ))}</TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            setFullFilteredByers().map(buyer =>
                                (
                                    <TableRow key={buyer.id}>
                                        <TableCell><NavLink to={`${BUYERS_PATH}/${buyer.id}`}>{buyer.id}</NavLink></TableCell>
                                        <TableCell>{buyer.name}</TableCell>
                                        <TableCell>{buyer.check}</TableCell>
                                        <TableCell>{buyer.purchases}</TableCell>
                                        <TableCell>{buyer.proceeds}</TableCell>

                                    </TableRow>
                                ))
                        }
                    </TableBody>

                </Table>
            </TableContainer>
            <TablePagination align='right'
                component='div'
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={pages}
                page={page}
                count={buyers.length}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default Buyers