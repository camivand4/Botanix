import React, { useState } from 'react';
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword } from '@firebase/auth';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div>
        <h1>signin</h1>
        <form onSubmit={signIn}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default SignIn