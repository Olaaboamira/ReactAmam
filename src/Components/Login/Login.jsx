import React, { useState } from "react";
import Css from "./Login.module.css";
import { Link } from "react-router-dom";
import { app, auth } from "../fire/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate("");

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       navigate("weather");
         console.log(userCredential)
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <form action="" onSubmit={Login}>
            <h1>Login In!</h1>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter yourr Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
            />
            <div className={Css.card}>
              <Link to="/">Forget your Passowerd?!</Link>
              {/* <Link to="weather"> */}
                <button>Login</button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
