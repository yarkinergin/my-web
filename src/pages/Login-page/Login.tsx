import { Button } from "baseui/button";
import 'bootstrap/dist/css/bootstrap.css';
import {FormGroup, Container, InputGroup, Alert } from "react-bootstrap";

import { useSignIn } from "react-auth-kit";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { response } from "express";

function Login(props: any) {
  const [error, setError] = useState("");
  const [passType, setPass] = useState("password");
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const url = "http://127.0.0.1:2400/"

  const onSubmit = async (values: any) => {
    console.log("Values: ", values);
    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:2400/api/auth/login",
        values
      );

      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: values.email },
      });
      navigate('/admin')

    } catch (err) {
      if (err && err instanceof AxiosError){
        setError(err.response?.data.message);
        setShow(false)
        if (err.response?.status === 403){
          setError("Email and password do not match!")
        }
        else if (err.response?.status === 404){
          setError("Email can not found!")
        }
      }
      else if (err && err instanceof Error) setError(err.message);

      console.log("Error: ", err);
    }
  };

  const revertPass = () => {
    if(passType === "password")
      setPass("pass")
    else
      setPass("password")
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <Container fluid className="bg-lg" >
      <Container fluid="sm" className='sm300 p-2 rounded bg-dark text-white my-5 mx-auto'>
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-center py-4 fw-bold mt-3 text-uppercase">Login</h1>
          <p className="text-white-50 px-5">Please enter your email and password!</p>
          <FormGroup className="px-2 pt-4">
            <label>Email</label>
            <InputGroup >
              <input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
                type="email"
                className="form-control mb-2 mx-auto w-75"
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className="px-2 my-3">
            <label>Password</label>
            <InputGroup>
              <input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                type={passType}
                className="form-control mb-4 mx-auto rounded"
              />
              <div className="input-group-append mx-2">
                <button className="btn bg-white" type="button" onClick={revertPass}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                  </svg>
                </button>
              </div>
            </InputGroup>
          </FormGroup>
          <Alert className="alert alert-danger" id="pswAlert" hidden={show}>{ error}</Alert>
          <InputGroup>
            <Button className="btn mb-4 mx-auto border text-white my-2" type="submit" size="large" kind="primary" isLoading={formik.isSubmitting}>
              Login
            </Button>
          </InputGroup>
        </form>
      </Container>
    </Container>
  );
}

export { Login };