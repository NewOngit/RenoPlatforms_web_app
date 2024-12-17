import React from 'react'
import send from './send.png'
const Footer = () => {
  return (
    <div>
        
<section className="footer">
<div className="column">
<div style={{textAlign:"center"}}>
<h1>Subscribe to our Newsletter</h1>
<p>Get updated about admission forms, deadlines and articles to help you through the process.</p>
<form onsubmit="">
<input type="text"
placeholder="Enter Email Here"/>
<button style={{backgroundColor: "white",border:" none"}}><img src={send} height="30" width="30"/></button>
</form>
</div>
</div>
<div className="column">
    <div style={{textAlign:"center"}}>
<h1>
    
Important Links
</h1>
<p>Schools in India</p>
<p>Other Schools in India</p>
<p>Colleges in India</p>
<p>Advertise With Us</p>
<p>Common Admissions</p>
<p>Edunify India</p>

</div>
</div>
<div className="column" >
<div style={{textAlign:"center"}}>
<h1>Support</h1>
<p>Privacy Policy</p>
<p>Terms and Conditions</p>
<p>Refund Policy</p>
<p>Contact Us</p>
<p>About Us</p>
<p>CGPA Converter</p>
</div>
</div>
</section>
    </div>
  )
}

export default Footer