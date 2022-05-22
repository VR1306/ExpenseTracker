import React from 'react'
import './Header.css'
import { Navbar,Nav,Container } from 'react-bootstrap';
import { FcHome,FcAbout,FcSettings } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import expenses from './Header/expenses.jpg'


function Header() {
  return (
    <Container>
        <div className='row'>
           <div className='d-flex  justify-content-between mt-5'> <div className='expense  d-flex'><div><img src={expenses} width='60' class="rounded-circle"></img></div><div class='mt-3 mx-2'  >EXPENSE TRACKER</div></div>
           <div > <Navbar collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className='heart' />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className='backs'><FcHome size='25'/><label  className=' linktext'>Home</label></Nav.Link>
      <Nav.Link className='backs'><FcAbout size='25'/><label  className=' linktext'>About</label></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link className='backs'><CgProfile size='25'/><label className='linktext'>Profile</label></Nav.Link>
      <Nav.Link className='backs'>
        <FcSettings size='25'/><label className='linktext'>Settings</label>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar></div>
        </div>
        </div>
    </Container>
  )
}

export default Header