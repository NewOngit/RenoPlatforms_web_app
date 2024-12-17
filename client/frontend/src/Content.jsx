import { Link } from 'react-router-dom'
import React from 'react'
import send from './send.png'
const Content = ({items,search,setSearch}) => {
  return (
    
    <div className='content'>
    <Link to={'/admin'} style={{float:"right"}}><button className='btn'>Admin</button></Link>
       <section>
<div className="bodyCnt1">

<h1 style={{fontSize: "3rem"}}>
    School Search
</h1>
<p style={{color:'gray'}}>Find the right school for your child.</p>
</div>

<div className="search">
    <form  className="searchSchoolsName" onSubmit={(e)=>{e.preventDefault()}}>
<input type="text"
placeholder="School Name..."
value={search}
onChange={(e)=>{
    setSearch(e.target.value);
}}
/>
<button className="searchButton">Search</button>
    </form>
</div>
<div className='searchHead'>
<div className="comboBoxSearch">

<select name="example" className="select">
<option value="">dummy</option>
</select>

<select name="example" className="select">
    <option value="">dummy</option>
    </select>

    
<select name="example" className="select">
    <option value="" name="choo">dummy</option>
    </select>


    <select name="example" className="select">
        <option value="">dummy</option>
        </select>
    
</div>
</div>
<scetion  class="cntAlign">
    <div class="allCnt">{
        items.map((data)=>{return(
        <div class="cnt">
            
          
<img src={"data:image/jpg;base64," + data.image} alt="content Image" height="200" width="200"/>
<p>{data.name} </p>
<p> {data.address}</p>
</div>)}
)
    }


</div>
<div class="next">
<button className='nextbtn'>next</button>
</div>
</scetion>
</section>


    </div>
  )
}

export default Content