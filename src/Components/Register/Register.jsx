import React from 'react';
import Css from "./Register.module.css"
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div>
        <div className={Css.parent}>
          <div className={Css.container}>
            <form action=''>
            <h1>Sgin up</h1>
              <input type="text" placeholder='Enter Your full Name' />
              <input type="email" placeholder='Enter yourr Email' />
              <input type="password" placeholder='Your Passowerd !' />
              <input type="password" placeholder='Check your Passowerd' />
              <input type="file" placeholder='Upload your Cv' />
              <div className={Css.card}>
                <Link to="SginUp">Have an account?!</Link>
                <button>Sgin up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Register;
