import React from 'react'
import { Container } from 'react-bootstrap'
import { BsFacebook,BsTwitter,BsInstagram,BsSnapchat } from "react-icons/bs";
import './Footer.css'
function Footer() {
  return (
      
    <div className='backgroud'>
        <Container>
   
        <div >
          <div className='row'>
          <div className='d-flex justify-content-between'><label className='Visit col-sm-6 col-6'>Visit Us</label>
          <div className=''><BsFacebook size='25' class='face'/>
            <BsTwitter size='25'  class='ms-1 face'/>
            <BsInstagram size='25'  class='ms-1 face'/>
            <BsSnapchat size='25'  class='ms-1 face'/></div></div>
           
        </div>
          </div>
         
        </Container>
    </div>
  
  )
}

export default Footer