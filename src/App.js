import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen";

import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  login,
  logout,
} from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const user = useSelector(
    (state) => state.counter.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
        if (userAuth) {
          dispatch(
            login({
              uis: userAuth.uid,
              email: userAuth.email,
            })
          );
        } else {
          dispatch(logout());
        }
      }
    );
    return unsubscribe;
  }, [auth, dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route
              path="/profile"
              element={<ProfileScreen />}
            />

            <Route
              exact
              path="/"
              element={<HomeScreen />}
            />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
