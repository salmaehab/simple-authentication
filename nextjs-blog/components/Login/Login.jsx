import React, { useState } from "react";
import styles from "./login.module.css";
import axios from 'axios'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const register= ()=>{
      axios.post('http://localhost:3001/register',{
          username:signupEmail,
          password:signupPassword
      }).then(response=> {
          console.log("RESS",response)
      })
  }
  return (
    <div>
      <h1>here</h1>
      <div>
        <h3>Register &rarr;</h3>
        <div className={styles.inputWrapper}>
          <input
            placeholder="email"
            type="text"
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
          />

          <input
            placeholder="password"
            className={styles.input}
            onChange={e => setPassword(e.target.value)}
          />
          
        </div>
    <div className={styles.inputWrapper}>
        <h3>Login &rarr;</h3>
        <input
        className={styles.input}
          placeholder="email"
          onChange={e => setSignupEmail(e.target.value)}
        />

        <input
        className={styles.input}
          placeholder="password"
          onChange={e => setSignupPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
        </div>
      </div>
    </div>
  );
}
