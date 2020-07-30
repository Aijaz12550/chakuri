import React from "react";

export const Register = () => {
  return (
    <div className="signin-container">
      <div className="instruction-container">
        <span>
          Don't delay ! join us and let us help you get your dream job!
          <p> Don't delay ! join us and let us help you get your dream job!</p>
          <p> Don't delay ! join us and let us help you get your dream job!</p>
          <p> Don't delay ! join us and let us help you get your dream job!</p>
        </span>
      </div>
      <div className="signin-form-container">
        <h1>Register Below</h1>
        <form>
          <label htmlFor="">Enter Email</label>
          <br />
          <input type="email" required placeholder="email" />
          <br />
          <br />
          <label htmlFor="">Enter Password</label>
          <br />
          <input type="password" placeholder="password" />

          <br />
          <br />
          <label htmlFor="">Re-Enter Password</label>
          <br />
          <input type="password" placeholder="password" />
        </form>

        <button>Register</button>
      </div>

      <div className="flex-basis-1">
        <p>Select Role</p>
        <br />
        <input type="radio" />
        Detail
        <br />
        .... in progress
      </div>
    </div>
  );
};
