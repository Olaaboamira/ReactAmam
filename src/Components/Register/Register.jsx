import React, { useState } from "react";
import Css from "./Register.module.css";
import { Link } from "react-router-dom";
import { auth , app} from "../fire/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate("");

  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       navigate("/SginUp");
        console.log(userCredential);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <form action="" onSubmit={SignUp}>
            <h1>Sign up</h1>
            <input type="text" placeholder="Enter your full Name" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Passowerd !"
            />
            <input type="password" placeholder="Check your Passowerd" />
            <input type="file" placeholder="Upload your Cv" />
            <div className={Css.card}>
              <Link to="SginUp">Have an account?!</Link>
              {/* <Link to="/SginUp"> */}
                <button>SignUp</button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
