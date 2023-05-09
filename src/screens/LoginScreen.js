import React, { useState } from "react";
import "./LoginScreen.css";
import { SignInScreen } from "./SignInScreen";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const [signIn, setSignin] = useState(false);

  const navigate = useNavigate();

  const signin = () => {
    setSignin(true);
    navigate("/");
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />

        <button
          className="logoButton"
          onClick={() => setSignin(true)}
        >
          Sign In
        </button>
        <div className="gradient" />
        <div className="top">
          {signIn ? (
            <div className="main">
              <SignInScreen />
            </div>
          ) : (
            <div className="mainclass">
              <h1>
                Unlimited files,TV programmes and
                more.
              </h1>
              <h2>
                Watch anywhere,Cancel at any time
              </h2>
              <h3>
                Ready to watch? Enter your email
                to create or restart your
                membership
              </h3>
              <div className="login_input">
                <form>
                  <input
                    type="email"
                    placeholder="enter email"
                  />
                  <button
                    className="getStarted"
                    onClick={signin}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
