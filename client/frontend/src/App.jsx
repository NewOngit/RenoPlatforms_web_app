import { useEffect, useState } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {Route,Routes} from 'react-router-dom';
import Admin from './Admin';
function App() {
  const [count, setCount] = useState(0)
const [items,setItems]=useState([]);
const[search,setSearch]=useState('')
const [searchItems, setSearchItems]=useState([]);
const[name,setName]=useState('')
const[address,setAddress]=useState('')
const[city,setCity]=useState('')
const[state,setState]=useState('')
const[contact,setContact]=useState('')
const[email_id,setEmail_id]=useState('')
const[image,setImage]=useState()

  useEffect(()=>{
    const  url='http://localhost:5000/schools';
    const fetchOptions={
      method:"GET",
      headers:{
        'content-type':'application/json'
      }
    } 

    const fetchData=async()=>{
      try {
        const response=await fetch(url,fetchOptions);
        if(!response.ok) throw Error("Something went Wrong");
        const data=await response.json();
        setItems(data);
        console.log("data fetched Successfully")  ;
        console.log(JSON.stringify(data))  ;
      } catch (error) {
        console.log(error);
      }
      
    }

    (async()=>await fetchData())();
  },[])

  useEffect(()=>{
const itm=items.filter((item)=>{
  return(item.name.toLowerCase().includes(search.toLowerCase()))

})
setSearchItems(itm)
  },[])
  return (
    <div>
      <Header/>
<Routes>
<Route path='/' element={<Content items={searchItems} serach={search} setSearch={setSearch}/>}/>
<Route path='/admin' element={<Admin name={name} setName={setName} address={address} setAddress={setAddress} city={city} setCity={setCity} state={state}  setState={setState} contact={contact} setContact={setContact} email_id={email_id} setEmail_id={setEmail_id} image={image} setImage={setImage}/>  
}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
