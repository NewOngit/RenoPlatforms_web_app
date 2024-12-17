import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import insta from './insta.png'
import linked from './linked.png'
import yt from './yt.png'
import headerImage from './headerImage.png'
import Facebook_Logo_Primary from './Facebook_Logo_Primary.png'
const Header = () => {
  return (
<div>  

         <div className="major">
    <div className="head">
    
    <div className="up">
        <div >
<a href=""> mail@uniformapp.in</a>
        </div>
        <div className="right">
            <a href="https://www.facebook.com/uniformapplication"><img src={Facebook_Logo_Primary} className='imag' height='20' width='20'/></a>
            <a href="https://www.instagram.com/uniformapplication/"><img src={insta} className='imag' height='20' width='20'/></a>
            <a href="https://in.linkedin.com/company/uniform-application"><img src={linked} className='imag' height='20' width='20'/></a>
            <a href="https://www.youtube.com/channel/UCByRFtqYDRxaTx6r7r9TvTQ"><img src={yt} className='imag' height='20' width='20'/></a>
            
        </div>
    </div>

    <div className="up">
        <div >
<a href="" > <img src={headerImage} alt="clickableImage"/></a>
        </div>
        <div className="right">
            <a href="" >Common Admissions</a>
            <a href="">School Porta</a>
            <a href="">Find Schools
</a>
            <a href="">blog</a>
        
        </div>
    </div>
</div>

</div>
</div>  
  )
}

export default Header