import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Enter = () => {
  const nav = useNavigate();
  const obj={
    borderRadius: "15px",
      

  }
  if (!localStorage.getItem("authtoken")) {
    nav("/login");
    console.log("dd");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const authtoken = localStorage.getItem("authtoken");

  const may = (data) => {
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", authtoken: authtoken },
      body: JSON.stringify({
        username: data.username,
        title: data.title,
        feedback: data.feedback,
      }),
    };
    fetch("http://localhost:8000/enter", requestOptions).then((d) => {
      if (d.status === 200) {
        alert("Submit  succefully");
        nav("/");
      } else {
        console.log("something wrong");
      }
    });
    reset();
  };

  return (
    <>
      {localStorage.getItem("user") === "normal" ? (
        <div><div>
        <section className="vh-100 bg-image ">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100 ">
              <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card ye" style={obj}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">
                        Create an account
                      </h2>

                      <form onSubmit={handleSubmit(may)}>
                        <div className="form-outline mb-4">
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter your Name"
                            {...register("username", {
                              required: {
                                value: true,
                                message: "enter username",
                              },
                              minLength: { value: 3, message: "minlength 3 " },
                              pattern: {
                                value: /[A-Za-z]{3}/,
                                message: "valid value",
                              },
                            })}
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
                            id="title"
                            className="form-control form-control-lg"
                            {...register("title", {
                              required: {
                                value: true,
                                message: "enter title",
                              },
                              minLength: {
                                value: 3,
                                message: "minlength must 3 ",
                              },
                            })}
                            placeholder="title"
                            type="text"
                          />
                          {errors.title && (
                            <small className="p">
                              <p>{errors.title.message}</p>
                            </small>
                          )}
                        </div>
                        <div className="form-outline mb-4">
                          <textarea
                            id="rollno"
                            className="form-control form-control-lg"
                            {...register("feedback", {
                              required: {
                                value: true,
                                message: "enter feedback",
                              },
                              minLength: {
                                value: 5,
                                message: "minlength must 5 ",
                              },
                            })}
                            placeholder="Enter your feedback"
                            type="text"
                          />
                          {errors.feedback && (
                            <small className="p">
                              <p>{errors.feedback.message}</p>
                            </small>
                          )}
                        </div>

                      

                        <div className="d-flex justify-content-center">
                          <input
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                            type="submit"
                          />
                        </div>

                        <p className="text-center text-muted mt-5 mb-0">
                          Have already an account?{" "}
                          <a href="#!" className="fw-bold text-body">
                            <u>
                              {/* <Link to="/login">Login</Link> */}
                            </u>
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
         
        </div>
      ) : (
        <div>dd</div>
      )}

      
    </>
  );
};
