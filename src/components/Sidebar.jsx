import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";

import { Link } from "react-router-dom";

import './styles/sidebar.css'


const Sidebar = () => {
  return (
    <div className='dash-list'>

<div className='sidebar'>
            <ul>
            
            <Link to='/'>  <li> <DashboardIcon className='icon'/> Dashboard </li>  </Link>
            <Link to="/products">    <li> <ImportExportIcon className='icon'  /> Products </li> </Link>
            <Link to="/users">    <li> <PeopleIcon className='icon'  /> Users </li> </Link>
            <Link to="/orders">   <li> <ListAltIcon className='icon'  /> Orders </li> </Link>
            </ul>
</div>
        </div>
  )
}

export default Sidebar