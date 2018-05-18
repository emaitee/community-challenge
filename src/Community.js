import React, { Component } from 'react';
import { Router,Route} from 'react-router';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

class Community extends Component {
  render() {
    return (
        <div style={{background: '#2c3e50', color: '#FFF', width: '100%', height:'100%'}}> 
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>    
        <h3>Communities</h3>   
            <Nav >
              
            </Nav>
        </SideNav>
    </div>
    );
  }
}

export default Community;
