import React from "react";
import Nav from "../Nav";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

export default function ProfileScreen() {
  const user = selectUser; 
  
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileBody">
        <h1>Edit Profile</h1>
        <div className="profileinfo">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profiledetails">
            <h2>{user.email}</h2>
            <div className="profileplans">
                <h3>Plans</h3>
              <button className="profilebutton" onClick={() => signOut(auth)}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
