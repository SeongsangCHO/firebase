import { authService } from "fbase";
import { React, useState } from "react";
import './AuthForm.module.css';


const AuthForm = () => {
  const [newAccount, setNewAccount] = useState(true);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
        ></input>
        <input
          onChange={onChange}
          name="password"
          type="password"
          placeholder="password"
          required
          value={password}
        ></input>
        <input
          type="submit"
          value={"Create Account"}
        ></input>
        {error}
      </form>
    </>
  );
};

export default AuthForm;
