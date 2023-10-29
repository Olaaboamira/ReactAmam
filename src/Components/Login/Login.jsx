import React from 'react'
import Css from "./Login.module.css"
import { Link } from 'react-router-dom'
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
export default function Login() {
  return (
    <div>
     <div className={Css.parent}>
          <div className={Css.container}>
            <form action=''>
            <h1>Login In!</h1>
              <input type="text" placeholder='Enter yourr Email' />
              <input type="text" placeholder='Your Passowerd !' />
              <div className={Css.card}>
                <Link to="/">Forget your Passowerd?!</Link>
                <button><Link to="weather">Login In</Link></button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
