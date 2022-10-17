import React from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../App.css";

export const Register = (props) => {

  const obj={
    borderRadius: "15px",
      

  }
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



 
  return (
    <>
   

    <section className="vh-100 bg-image ">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card ye" style={obj}  >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit(may)}>

              
              
                <div className="form-outline mb-4">
                 
                  <input
             className="form-control form-control-lg"
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
                </div>
                <div className="form-outline mb-4">
                <input
            id="rollno"
            className="form-control form-control-lg"
            {...register("rollno", { required:{value:true,message:"enter rollno"},minLength:{value:1,message:"minlength must 1 "} })}
            placeholder="Enter your roll no."
            
            type="text"
          />
           {errors.rollno && (
            <small   className="p">
              <p>{errors.rollno.message}</p>
            </small>
          )}
          
                </div>

                <div className="form-outline mb-4">
                <input
            id="branch"
            className="form-control form-control-lg" 
            {...register("branch", { required:{value:true,message:"enter branch"},minLength:{value:3,message:"minlength must 3 "} })}
            placeholder="Branch and  year"
            
            type="text"
          />
          {errors.branch && (
            <small className="p">
              <p>{errors.branch.message}</p>
            </small>
          )}
                </div>

                <div className="form-outline mb-4">
                <input
            id="password"
            className="form-control form-control-lg"
            {...register("password", { required:{value:true,message:"enter password"},minLength:{value:5,message:"minlength must 5"} })}
           
            placeholder="Enter Password"
            type="password"
          />
           {errors.password && (
            <small className="p">
              <p>{errors.password.message} </p>
            </small>
          )}
           
                </div>

                <div className="form-outline mb-4">
                <input
            id="cpassword"
            className="form-control form-control-lg"
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
               
                </div>

                

                <div className="d-flex justify-content-center">
                <input className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"  type='submit' />
               
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body"><u><Link to="/login">Login</Link></u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section >
    </>
  );
};
