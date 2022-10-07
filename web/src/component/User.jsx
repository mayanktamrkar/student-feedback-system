import React from 'react'
import '../App.css'
import { useEffect,useState } from 'react'

export default function User() {
  //console.log("userinfor==> " ,data)
    const [items,setItems]=useState([])
    const [s,sets]=useState("")
    const authtoken=localStorage.getItem("authtoken")
    //console.log(authtoken )
   
    var fun ;




  

    useEffect( () => {
     fun =async()=>{
      const response = await fetch(`http://localhost:8000/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "authtoken": authtoken
        }
      });
      const json = await response.json() 
      console.log("show data---22> ",json)
      setItems(json.f);
    }
    fun()
     
    }, [s])
    const edit= async(value,val)=>{
      const response = await fetch(`http://localhost:8000/admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "authtoken": authtoken
        },
        body: JSON.stringify({
          username: value,
          admin:val,
       
        }),
      });
      const json = await response.json() 
      sets(value)
    
     

    }
  return (
  <>
   {<div>
           <h1>User Details</h1>
           {/* <button onClick={fun}>click</button> */}

<table id="customers">
    <tr>
        <th className='tb'>Name</th>
        <th className='tb' id="k">Rollno</th>
        <th className='tb'>Branch</th>
        <th>Admin</th>
        <th>Make</th>
    
   
    </tr>
    { items && items.map((val,key)=>{
        return(
            <tr key={key}>
            <td>{val.username}</td>
            <td>{val.rollno}</td>
            <td>{val.branch}</td>
            <td>{val.admin}</td>
            <td><button onClick={()=>{edit(val.username,val.admin)}}>click</button></td>
         
          </tr>
                 
        )
    })}
    

</table>




    </div>}
  </>)
}
