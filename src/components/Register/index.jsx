import React, { memo, createRef,  } from "react";
import { signupMutation } from "../../GraphQL/Queries/signup";
import { useMutation } from "@apollo/client";

export const Register = memo(() => {
  const [addTodo, { data }] = useMutation(signupMutation);

  let nameInput = createRef();
  let emailInput = createRef();
  let passwordInput = createRef();

  const _registerUser = (e) => {
    e.preventDefault()
    let name = nameInput.current.value;
    let email = emailInput.current.value;
    let password = passwordInput.current.value;

    if (name && email && password) {
      let variables = { name, email, password };
      addTodo({ variables })
        .then((data) => {
          console.log("user created", data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      throw new Error("Please fill the form correctly..");
    }
  };

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
        <form onSubmit={_registerUser}>
          <label>Name</label>
          <br />
          <input type="text" ref={nameInput} required placeholder="Name" />
          <br />
          <br />
          <label htmlFor="">Enter Email</label>
          <br />
          <input type="email" ref={emailInput} required placeholder="email" />
          <br />
          <br />
          <label htmlFor="">Enter Password</label>
          <br />
          <input
            type="password"
            ref={passwordInput}
            required
            placeholder="password"
          />

          <br />
          <br />

          <input type="submit" value="Register"/>
        </form>

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
});
