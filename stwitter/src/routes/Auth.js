import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import { React, useState } from "react";
import styles from "./Auth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
  const onSocialClick = async (e) => {
    let provider;
    if (e.target.name == "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (e.target.name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    try {
      await authService.signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faTwitter} />
      <div className={styles.authContainer}>
        <AuthForm />

        <div className={styles.authBtnContainer}>
          <button name="google" onClick={onSocialClick}>
            Continue with Google
          </button>
          <button name="github" onClick={onSocialClick}>
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
