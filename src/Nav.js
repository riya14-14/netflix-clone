import React, {
  useEffect,
  useState,
} from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [show, handleShow] = useState(false);

  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(!show);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      transitionNavBar
    );
    return () =>
      window.removeEventListener(
        "scroll",
        transitionNavBar
      );
  });

  return (
    <div className={`nav ${show && `nav_black`}`}>
      <div className="nav_content">
        <img
          onClick={() => history("/")}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          className="nav_avatar"
          onClick={() => history("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}
