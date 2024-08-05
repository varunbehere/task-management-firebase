import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useLoginContext } from '../Context/LoginContext';

function Login() {
  console.log('Login');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const {setRegistered, setAuthenticated} = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User: Username:', Email, 'Password:', Password);
    setAuthenticated(true);
  };
  const createRegister =()=>{
    setRegistered(false);
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
        Login
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={Email}
          onChange={e => setEmail(e.target.value)}
          sx={{ mb: '20px' }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={Password}
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
            mb: '20px'
          }}
        >
          Login
        </Button>
      </form>
      <Button variant="text" color="primary" onClick={()=> createRegister()}>Dont have an account ? Create One</Button>
    </Box>
  );
}

export default Login;
