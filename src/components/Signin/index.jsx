import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client'
import { LoginQuery } from '../../GraphQL/Queries/login'
export const Signin = () => {
  const [loginUser] = useMutation(LoginQuery)
  const loginHandler = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    loginUser({variables:{email,password}}).then(data=> {
      console.log('data',data)
    }).catch(error => {
      console.log("error",error)
    })
  };
  return (
    <div className="signin-container">
      <div className="instruction-container">
        <span>
          Don't delay ! join us and let us help you get your dream job!
        </span>
      </div>
      <div className="signin-form-container">
        <h1>Login Below</h1>
        <form onSubmit={loginHandler} >
          <label htmlFor="">Enter Email</label>
          <br />
          <input type="email" required placeholder="email" name="email" />
          <br />
          <br />
          <label htmlFor="">Enter Password</label>
          <br />
          <input type="password" placeholder="password" required name="password" />
          <br />
          <span>
            Don't have any account?
            <Link to="/register">Register</Link>
          </span>
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>

      <div className="flex-basis-1"></div>
    </div>
  );
};
