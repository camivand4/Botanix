import React, { useState } from 'react';
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword } from '@firebase/auth';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div>
        <h1>signup</h1>
        <form onSubmit={signUp}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default SignUp