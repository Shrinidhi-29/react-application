import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./scss/subMenu.css";



const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <Link to={item.path} onClick={item.subNav && showSubnav} className='side-bar'>
          <div>
            {item.icon}
            <Link to = '/' className='sidebar-label'>{item.title}</Link>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </Link>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <Link className='dropdown-link' to={item.path} key={index}>
                {item.icon}
                <Link to = '/' className='sidebar-label' >{item.title}</Link >
              </Link>
            );
          })}
      </>
    );
  };

  export default SubMenu;