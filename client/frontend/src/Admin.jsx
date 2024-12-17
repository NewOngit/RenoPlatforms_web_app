import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
const Admin = ({name, setName, address, setAddress, city, setCity, state, setState, contact, setContact, image, setImage, email_id, setEmail_id}) => {
  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    const textData={
    name,
    address,
    city,
    state,
    contact,
    email_id
}
const formData=new FormData();
formData.append('image',image)
formData.append('text',JSON.stringify(textData))

const  url='http://localhost:5000/upload';
try {
    const response=await axios.post(url,formData,{
        headers:{
            'content-type':'multipart/formdata'
        }
    });
    if(!response.ok) throw Error("something went wrong");
    console.log('submitted successfully');
alert("Data submitted succesfully");
} catch (error) {
    console.log("grtghf");
    alert("Something went wrong");
}   
  }
    return (
    <div className='admin'>
        
        <div >
        <Link to={'/'} ><button className='btn'>Go Home </button></Link>
        </div>
<div className="admincent">
        <form action="" className="adminInput" onSubmit={handleSubmit}>
        <input type='text' className='inpu'
        placeholder='enter name of school'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
        />

<input type='text' className='inpu'
        placeholder='enter name of address'
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        required
        />

<input type='text' className='inpu'
        placeholder='enter name of city'
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        required
        />


<input type='text' className='inpu'
        placeholder='enter name of state'
        value={state}
        onChange={(e)=>setState(e.target.value)}
        required
        />

<input type='text' className='inpu'
        placeholder='enter name of email id'
        value={email_id}
        onChange={(e)=>setEmail_id(e.target.value)}
        required
        />

<input type='text' className='inpu'
        placeholder='enter name of contact'
        value={contact}
        onChange={(e)=>setContact(e.target.value)}
        required
        />

<input type='file' className='inpu'
        placeholder='choose image file'
        
        onChange={(e)=>setImage(e.target.files[0])}
        required
        />

        <button className='submitbtn'> Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Admin