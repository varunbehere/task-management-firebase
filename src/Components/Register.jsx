import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useLoginContext } from '../Context/LoginContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // You can uncomment and use this if you want to use context for registration
  const { setRegistered } = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User:', email, 'Password:', password);
    setRegistered(true); // Update context state to registered
  };
  const haveAccount = ()=>{
    setRegistered(true);
  }

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        py: '32px',
        px: '24px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto',
        mt: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" color="black" sx={{ fontWeight: 'bold', mb: '24px', textAlign: 'center' }}>
        Register
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ mb: '20px' }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{ mb: '20px' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            py: '12px',
            fontSize: '16px',
            textTransform: 'none',
            mb:'20px'
          }}
        >
          Register
        </Button>
      </form>
      <Button variant="text" color="primary" onClick={()=> haveAccount()}>
        Already have an account ?  Login
      </Button>
    </Box>
  );
}

export default Register;
