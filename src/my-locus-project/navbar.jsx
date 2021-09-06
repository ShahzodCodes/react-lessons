import React from "react";
import Logo from './images/logo.png';
// import '../index.css';
import {Navbar, LogoWrapper, ListWrapper, List, Button} from './style'

function AllNavbar() {
    return (
      <Navbar>
        <LogoWrapper>
          <a href='#'>
            <img src={Logo} alt='logo' />
          </a>
          <a href='#'>Locus</a>
        </LogoWrapper>

        <ListWrapper>
          <List active>Home</List>
          <List>Contact</List>
          <List>Location</List>
          <List>About Us</List>
        </ListWrapper>
        <Button>Sign Up</Button>
      </Navbar>
    );
}

export default AllNavbar;