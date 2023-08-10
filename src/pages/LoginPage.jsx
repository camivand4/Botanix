import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from '@firebase/auth';

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          console.log(userCredential);
          window.location.href = '/';
      }).catch((error) => {
          console.log(error);
      })
  }

  const handleGoogleSignIn = async () => {

  };

  return (
    < >
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', pt: '10vh', width: '30vw', marginLeft: 'auto', marginRight: 'auto' }}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form 
        sx={{ mt: 1 }}
        onSubmit={signIn}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: 'secondary.main',
                color: 'primary.main',
                '&:hover': { color: 'white' }
              }}
            >
              Sign In
            </Button>
            
            <Button
              fullWidth
              variant="contained"
              onClick={handleGoogleSignIn}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: 'secondary.main',
                color: 'primary.main',
                '&:hover': { color: 'white' },
              }}
            >
              Sign In with Google
             </Button>

          <Grid container>
            <Grid item>
              <Link href="register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  )
}

