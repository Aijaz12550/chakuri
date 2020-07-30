import React from "react";
import { Link} from 'react-router-dom'
export const Signin = () => {
  return (
    <div className="signin-container">
      <div className="instruction-container">
        <span>
          Don't delay ! join us and let us help you get your dream job!
        </span>
      </div>
      <div className="signin-form-container">
        <h1>Login Below</h1>
        <form>
          <label htmlFor="">Enter Email</label>
          <br/>
          <input type="email" required placeholder='email' />
          <br/>
          <br />
          <label htmlFor="" >Enter Password</label>
          <br/>
          <input type="password" placeholder='password' />
        </form>
        <span>
          Don't have any account? 
          <Link to="/register">Register</Link>
        </span>
        <button>SignIn</button>
      </div>

      <div className="flex-basis-1"></div>
    </div>
  );
};
