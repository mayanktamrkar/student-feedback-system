import React from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

export const Enter = () => {

  
  const nav = useNavigate();
  if(!localStorage.getItem("authtoken")){
    nav("/login")
    console.log("dd")
  }

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const authtoken=localStorage.getItem("authtoken")


const may=(data)=>{
  console.log(data)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" , "authtoken":authtoken},
    body: JSON.stringify({
      username: data.username,
      title: data.title,
      feedback: data.feedback,
  
    }),
  };
  fetch("http://localhost:8000/enter", requestOptions)
    
    .then((d) => {
    
    
      if (d.status ===200) {
        alert('Submit  succefully')
        nav("/");
      }else{
        console.log("something wrong")
      }
      

     
    });
    reset()
    
  
}
 



  return (
    <>
    {  localStorage.getItem("user")==="normal"?<div>

            <div className='center'>
    <form onSubmit={handleSubmit(may)}>
    
       <input className='sa' placeholder='Enter your Name' id='name'type='text' 
       
       {...register('username')}/>
       <br/>
    
       <input id='title' placeholder='Enter the title .'  type='text'  
        {...register("title", { required: {value:true,message:"enter title"} ,minLength:{value:3,message:"minlength 3 "} ,pattern:{value:/[A-Za-z]{3}/,message:"valid value"}})}
       />
             {errors.title && (
            <small title="p">
              <p>{errors.title.message} </p>
            </small>
          )}
       <br/>
       
       <textarea
            className="sa"
            placeholder="Enter feedback"
            {...register("feedback", { required: {value:true,message:"enter feedback"} ,minLength:{value:10,message:"minlength 10 "} ,pattern:{value:/[A-Za-z]{3}/,message:"valid value"}})}
            id="feedback"
          
            type="text"
          />
          {errors.feedback && (
            <small className="p">
              <p>{errors.feedback.message} </p>
            </small>
          )}
       <br/>
       
    

       <input type='submit'/>

    </form>


    </div>


    </div>:<div>dd</div>}
    </>
  )
}
