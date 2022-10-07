import React from 'react'
import '../App.css'
import { useEffect,useState } from 'react'

export default function Show(props) {
    const [items,setItems]=useState([])
    var fun ;
   // console.log("showdata-55--6>",props.data)
    const authtoken=localStorage.getItem("authtoken")
    console.log(authtoken )
    const edit= async(value)=>{
      const response = await fetch(`http://localhost:8000/show`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "authtoken": authtoken
        },
        body: JSON.stringify({
          username: value,
       
        }),
      });
      const json = await response.json() 
    


    }

  

    useEffect(() => {

    fun=async()=>{
      const response = await fetch(`http://localhost:8000/show`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "authtoken": authtoken
        }
      });
      const json = await response.json() 
      console.log("show data---22> ",json)
      setItems(json.d);
    }
    fun()


    }, [])
    
  return (
    <>
    <div>
           <h1>Student Feedback</h1>
           {/* <button onClick={fun}>click</button> */}

<table id="customers">
    <tr>
        <th>Name</th>
        <th id="k">Title</th>
        <th id='kk'>Feedback</th>
        <th>Resolve</th>
        
   
    </tr>
    { items && items.map((val,key)=>{
        return(
            <tr key={key}>
            <td>{val.username}</td>
            <td>{val.title}</td>
            <td>{val.feedback}
          
            </td>
            <td><button onClick={()=>edit(val.username)} >Resolve</button></td>
          
            
            
         
          </tr>
         
                 
        )
    })}
    

</table>



    </div>
    </>
  )
}
