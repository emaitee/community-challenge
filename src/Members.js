import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import Search from './Search';



        const MySideNav = () => (
            <div style={{background: 'rgb(130,130,130)', color: 'red', width: '100%', height:'100%'}}> 
            <h3>Members</h3>  
                <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>    
                <Search/>
                    <Nav id='dashboard'>
                      <div>fggggggggggggggggggggggggggggggggggggggggggggggggggggggggdh</div>
                    </Nav>
                </SideNav>
            </div>
        )
         
        export default MySideNav;
       


