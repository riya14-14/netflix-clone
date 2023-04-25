import React, { useState } from "react";
import "./LoginScreen.css";
import { SignInScreen } from "./SignInScreen";

export const LoginScreen = () => {
  const [signIn, setSignin] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />

        <button className="logoButton" onClick={() => setSignin(true)}>
          Sign In
        </button>
        <div className="gradient" />
        <div className="main">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              {" "}
              <h1>Unlimited files,TV programmes and more.</h1>
              <h2>Watch anywhere,Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className="login_input">
                <form>
                  <input type="email" placeholder="enter email" />
                  <button className="getStarted">GET STARTED</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
