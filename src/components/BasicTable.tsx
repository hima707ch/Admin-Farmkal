import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo1 from "../Images/Farmkal-black.png";

function createData(
  name: string,
  category: string,
  price: number,
  city: string,
) {
  return { name, category, price, city };
}

const rows = [
  createData('Tractor', "159", 6.0, "24"),
  createData('Fencing wires', "237", 9.0, "37"),
  createData('Trailer', "262", 16.0, "24"),
  createData('tractor', "305", 3.7, "67"),
  createData('wires', "356", 16.0, "49"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Name </TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">city</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"> <img src = {logo1} width = "70px" /> </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right"><button>More</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}