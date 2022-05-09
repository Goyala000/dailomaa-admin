// material-ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { IconButton, Chip } from '@mui/material';

import { IconEye, IconDownload } from '@tabler/icons';

function createData(sl, order, date, customername, status, total, orderstatus, action) {
    return { sl, order, date, customername, status, total, orderstatus, action };
}

const rows = [
    createData('1', 10200, '09 MAY 2022', 'Random Name', 'Unpaid', 'Rs 10200', 'Pending', 'View'),
    createData('2', 10200, '09 MAY 2022', 'Random Name', 'Unpaid', 'Rs 10200', 'Pending', 'View'),
    createData('3', 10200, '09 MAY 2022', 'Random Name', 'Unpaid', 'Rs 10200', 'Pending', 'View'),
    createData('4', 10200, '09 MAY 2022', 'Random Name', 'Unpaid', 'Rs 10200', 'Pending', 'View'),
    createData('5', 10200, '09 MAY 2022', 'Random Name', 'Unpaid', 'Rs 10200', 'Pending', 'View'),
    createData('6', 10200, '09 MAY 2022', 'Random Name', 'Unpaid', 'Rs 10200', 'Pending', 'View'),
    createData('7', 10200, '09 MAY 2022', 'Random Name', 'Unpaid', 'Rs 10200', 'Pending', 'View'),
    createData('8', 10200, '09 MAY 2022', 'Random Name', 'Unpaid', 'Rs 10200', 'Pending', 'View'),
    createData('9', 10200, '09 MAY 2022', 'Random Name', 'Unpaid', 'Rs 10200', 'Pending', 'View')
];

const TableComponent = () => (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>SL</TableCell>
                    <TableCell align="right">ORDER</TableCell>
                    <TableCell align="right">DATE</TableCell>
                    <TableCell align="right">CUSTOMER NAME</TableCell>
                    <TableCell align="right">STATUS</TableCell>
                    <TableCell align="right">TOTAL</TableCell>
                    <TableCell align="right">ORDER STATUS</TableCell>
                    <TableCell align="right">ACTION</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {row.sl}
                        </TableCell>
                        <TableCell align="right">{row.order}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.customername}</TableCell>
                        <TableCell align="right">
                            <Chip color="primary" label={row.status} sx={{ marginLeft: 1 }} />
                        </TableCell>
                        <TableCell align="right">{row.total}</TableCell>
                        <TableCell align="right">
                            <Chip color="secondary" label={row.orderstatus} sx={{ marginLeft: 1 }} />
                        </TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="delete" color="primary">
                                <IconEye />
                            </IconButton>
                            <IconButton aria-label="delete" color="primary">
                                <IconDownload />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default TableComponent;
