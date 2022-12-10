import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const userSubmit = (formdata) => {
    console.log(formdata);
  };

  return (
    <>
      <title>CSS GRIDS</title>
      <div className="col-8 mx-auto pt-4" >
      <div className="card shadow" >

        <div className="row">
          <div className="col-md-6">
            <div className="item2"></div>
          </div>
          <div className="col-md-6">
            <div className="cardbody">
              <h1 className="welc">WELCOME</h1> <hr />
              <h4 className="log">Sign-up below to get started</h4>
              <Formik initialValues={{ Username: "", email: "", password: "" }} onSubmit={userSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                      className="form-control mb-4"
                      name="Username"
                      onChange={handleChange}
                      value={values.Username}
                      required
                    />
                    <label>EMAIL</label>
                    <input
                      className="form-control mb-4"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      required
                    />
                    <label> Create Password </label>
                    <input type={"password"}
                      className="form-control mb-4"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      required
                    />
                    <label> Enter password again </label>
                    <input type={"password"}
                      className="form-control mb-4"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      required
                    />
                    <button className="btnn"> Create Account</button>
                  </form>
                )}
              </Formik>
              <p style={{ textAlign: "center", paddingTop: 40 }}>
                New User?
                <Link to={"/Login"}>Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
