import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../App.css";

export const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const nav = useNavigate();
  const [reg, setreg] = useState("false");
 
  const may = (data) => {
 
    if(data.cpassword===data.password){
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        rollno: data.rollno,
        branch: data.branch,
        password: data.password,
      }),
    };
    fetch("http://localhost:8000/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setreg(data.reg);
        if (data.message === "registered") {
          nav("/login");
          // props.data("false");
        }
        if (data.message == "exist") {
          alert("user exist");
        }

        console.log("--");
      });
      reset()
      alert('registered')
      
    }else{
      alert('cpasswrod and password not match')
    }
    
  };



  // const form = (e) => {
  //   setdata({ ...data, [e.target.id]: e.target.value });
  // };
  return (
    <div>
      <div className="center">
        <form onSubmit={handleSubmit(may)}>
          <input
            className="sa"
            placeholder="Enter your Name"
            {...register("username", { required: {value:true,message:"enter username"} ,minLength:{value:3,message:"minlength 3 "} ,pattern:{value:/[A-Za-z]{3}/,message:"valid value"}})}
            id="username"
          
            type="text"
          />
          {errors.username && (
            <small className="p">
              <p>{errors.username.message} </p>
            </small>
          )}
          <br />

          <input
            id="rollno"
            {...register("rollno", { required:{value:true,message:"enter rollno"},minLength:{value:1,message:"minlength must 1 "} })}
            placeholder="Enter your roll no."
            
            type="text"
          />
          <br />

          <input
            id="branch"
            {...register("branch", { required:{value:true,message:"enter branch"},minLength:{value:3,message:"minlength must 3 "} })}
            placeholder="Branch and  year"
            
            type="text"
          />
          <br />

          <input
            id="password"
            {...register("password", { required:{value:true,message:"enter password"},minLength:{value:5,message:"minlength must 5"} })}
           
            placeholder="Enter Password"
            type="password"
          />
           {errors.password && (
            <small className="p">
              <p>{errors.password.message} </p>
            </small>
          )}
          <br />
          <input
            id="cpassword"
            placeholder="Enter Confirm-Password"
            type="password"
            {...register("cpassword", {
              required: { value: true, message: "enter cpassword" },
              minLength: { value: 5, message: "minlength must 5" },
            })}
          />
          {errors.cpassword && (
            <small className="p">
              <p>{errors.cpassword.message}</p>
            </small>
          )}
          <br />

          <input className="but" type='submit' />
          
     
        </form>
      </div>
    </div>
  );
};
