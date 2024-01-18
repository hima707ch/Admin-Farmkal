import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const ProductColumns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'image', label: 'Image', minWidth: 100 },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'right',
    format: (value) => value,
  },
  {
    id: 'category',
    label: 'Category',
    minWidth: 100,
    align: 'right',
    format: (value) => value,
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 100,
    align: 'right',
    format: (value) => value,
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 100,
    align: 'right',
    format: (value) => value,
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
    align: 'right',
    
  }
];

const UserColumns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'image', label: 'Image', minWidth: 100 },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 100,
    align: 'right',
    format: (value) => value || "-",
  },
  // {
  //   id: 'userData',
  //   label: 'purchased Items',
  //   minWidth: 100,
  //   align: 'right',
  //   format: (value) => value['purchased_items'].length.toLocaleString('en-US'),
  // },
  {
    id: 'email',
    label: 'E mail',
    minWidth: 100,
    align: 'right',
    format: (value) => { return ( value || "-") },
  },
  {
    id : 'city',
    label : "City",
    minWidth : 100,
    align : "right",
  },
  {
    id: 'createdAt',
    label: 'Days',
    minWidth: 100,
    align: 'right',
    format: (value) => {
      let dif = Date.now() - Date(value);
      return Math.floor(dif / (1000 * 60 * 60 * 24));
    },
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
    align: 'right',
    
  }
];

const Server = `https://cr5pww-4000.csb.app`;

export default function StickyHeadTable( props ) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [columns, setColumns] = React.useState([]);
  const [infoPage, setInfoPage] = React.useState("");

  const nav = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchRows = async ()=>{
    
    if(props.route == "products"){
      let url = `${Server}/api/v1/${props.route}?`;

      if(props.filter.city){
        url = url + `city=${props.filter.city.toLowerCase()}&`;
      }

      if(props.filter.category){
        url = url+`category=${props.filter.category.toLowerCase()}`;
      }

      console.log("url", url)

      const resp = await axios.get(url);
      setRows( resp.data.products ); 
      setColumns(ProductColumns);
      setInfoPage('/productInfo');
    } 

    if(props.route == "users")
    {
      let url = `${Server}/api/v1/${props.route}?populate=sellItem&`;

      if(props.filter.city){
        url = url + `city=${props.filter.city.toLowerCase()}`;
      }

      console.log(url);

      const resp = await axios.get(url);
      setRows( resp.data.users );
      setColumns(UserColumns);
      setInfoPage('/userInfo');
    } 

    console.log("rows",rows);
    setLoading(false);
  }

  React.useEffect(()=>{
    fetchRows();
  } , [props.filter])

  return (
    
    <React.Fragment>

    {loading ? <h1>Loading</h1> : <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ height: 700}}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow  >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.slice(0,-1).map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}

                    <TableCell key="action" align='right'>
                        <button onClick={ ()=>{ nav( infoPage , { state : {data : row}}) } }> See Details </button>
                    </TableCell>

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={(rows.length) || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper> }

    </React.Fragment>
  );
}