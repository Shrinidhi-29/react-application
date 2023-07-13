import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./scss/navBar.css";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebarData';
import  SubMenu  from './subMenu';

const Header = () => {

 const [open , setOpen] = useState(false);

 const showSidebar = () => setOpen(!open);

  
 
  return (
    <React.Fragment>
      <AppBar sx = {{ bgcolor : '#060b26'}} >
        <Toolbar  variant="dense" >
          <Box sx={{ flexGrow: 1 }} >
           <Link to = '/' className = 'menu-icon'>
            <FaIcons.FaBars onClick = {showSidebar}/>
            </Link>
          </Box>
          <nav className={open ? 'nav-menu active' : 'nav-menu'} open = {open}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='/' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            
          </ul>
        </nav>
          <Box sx={{ flexGrow: 0 }} pr={1} display = 'flex' alignItems = 'center' justifyContent= 'center'>
            <Tooltip title="profile">
              <IconButton sx={{ p: 1 }}>
                <Avatar alt="Shri Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Typography pr = {1}>Shrinidhi</Typography>
            <div className="vertical-line"></div>
            <MenuIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
