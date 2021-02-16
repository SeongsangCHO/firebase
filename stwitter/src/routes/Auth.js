import { authService, firebaseInstance } from "fbase";
import { React, useState } from "react";
// import './Auth.scss'

const Auth = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
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
  const onSocialClick = async (e) => {
    let provider ;
    if(e.target.name == "google"){
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (e.target.name === "github"){
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
   }
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <div>
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
          value={newAccount ? "Create Account" : "Login"}
        ></input>
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign in" : "Create Account"}
      </span>
      <div>
        <button name="google" onClick={onSocialClick} >Continue with Google</button>
        <button name="github" onClick={onSocialClick} >Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
