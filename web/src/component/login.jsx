import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const Login = (props) => {
  const [login, setlogin] = useState("false");
  console.log(login)
  const [message,setmessage]=useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const nav = useNavigate();

  // const [data,setdata]=useState({
  // 	username:"",
  // 	password:""
  // })
  // console.log(data)
  // const enterdata=(e)=>
  // {
  // 	setdata({...data,[e.target.id]:e.target.value})

  // }
  const passdata = (data) => {
    props.pass(data.username)
    console.log(data)
    //e.preventDefault()
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    };
    fetch("http://localhost:8000", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setlogin(data.login);
        //console.log("-->>", data.authtoken);
        if(data.message==="admin"){
          console.log("admin")
          localStorage.setItem("user","admin");
          
          localStorage.setItem("authtoken", data.authtoken);
         
          nav("/");
          reset()
         
           
        }else if(data.message==="superadmin"){
          setmessage("login")
          localStorage.setItem("user","superadmin");
          localStorage.setItem("authtoken", data.authtoken);
          nav("/");
          console.log("superadminsvala")
   
          
          
     

        }
        else if(data.login==="true"){
          localStorage.setItem("user", "normal");
          localStorage.setItem("authtoken", data.authtoken);
          nav("/feedback");
   
        
        

        }
        else if(data.message==="wrong"){
          setmessage("wrong")
          reset()
        }
        else if(data.message==="notexist"){
          setmessage("notexist")
          reset()
        }
        
        
    
       
      });

  
  };
  return (
    <>
      <Stack sx={{ width: '100%' }}>
     {message==="notexist"? <Alert severity="error">User not exist</Alert>:<span></span>}
     {message==="wrong"? <Alert severity="warning">Wrong user and password </Alert>:<span></span>}
      {errors.password && <Alert severity="info">{errors.password.message}</Alert>}
       { message==="login" ?<Alert severity="success">your login successfully</Alert>:<span></span>}
    </Stack>

  
         
        {/* <form id="form" >
          <label id="o"></label>
          <p class="space" id="l">
            Login Form{" "}
          </p>
         
          <br />
          <input class="input space" type="text" id="username" 
		  placeholder="Username"
		  
		  {...register("username", { required: {value:true,message:"enter username"} ,minLength:{value:3,message:"minlength 3 "} ,pattern:{value:/[A-Za-z]{3}/,message:"valid value"}})}
		  
		  />
		    
          <br />
          
          <br />
          <input class="input space" type="password" id="password" placeholder="Password"
		   {...register("password", { required:{value:true,message:"enter password"},minLength:{value:5,message:"minlength must 5"} })} 
		  />
		     {errors.password && (
            <small className="p">
              <p>{errors.password.message} </p>
            </small>
          )}
          <br />
          <input class="space" type="submit" id="button" />
        </form> */}



     
        <section class="text-center">


     


  

<div class="card mx-4 mx-md-5 shadow-5-strong">
  <div class="card-body py-5 px-md-5">
    

    <div class="row d-flex justify-content-center">
      <div class="col-lg-8">
        <h2 class="fw-bold mb-5">Log in </h2>

        
        <form    onSubmit={handleSubmit(passdata)}>




        
          

      
          <div class="form-outline mb-4">

          <input class="form-control" type="text" id="username" 
		  placeholder="Username"
		  
		  {...register("username", { required: {value:true,message:"enter username"} ,minLength:{value:3,message:"minlength 3 "} ,pattern:{value:/[A-Za-z]{3}/,message:"valid value"}})}
		  
		  />



          </div>

          <div class="form-outline mb-4">
          <input  class="form-control" type="password" id="password" placeholder="Password"
		   {...register("password", { required:{value:true,message:"enter password"},minLength:{value:5,message:"minlength must 5"} })} 
		  />



        
          </div>

          
   

        
          <input type="submit" class="btn btn-primary btn-block mb-4"/>
          
       

        
       
        </form>
      </div>
    </div>
  </div>
</div>
</section>
    
    </>
  );
};
