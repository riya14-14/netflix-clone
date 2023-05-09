import React, { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signin">
      <form>
        <h1>SIGN IN</h1>
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
        />
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
        />
        <button
          className="submit"
          onClick={signIn}
        >
          Sign In
        </button>

        <h4>
          <span className="grey">
            New to Netflix?
          </span>
          <span
            className="link_hover"
            onClick={register}
          >
            {" "}
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};
