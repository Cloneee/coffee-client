import { Button, TextField, Typography, Container, Box } from "@mui/material";
import React, { useState } from "react";
import {Redirect} from 'react-router-dom'

type User = {
  handleLogin: (e:any) => void;
  redirect: boolean
}

const Login: React.FC<User>  = ({handleLogin, redirect}) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleUserChange = (e: any) => {
    setUser({
      username: e.target.value,
      password: user.password,
    });
  };

  const handlePassChange = (e: any) => {
    setUser({
      username: user.username,
      password: e.target.value,
    });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        bgcolor: "white",
        boxShadow: 1,
        mt: "10%",
        py: "2%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 16,
      }}
    >
      <Typography variant="h2" align="center">
        Coffee Manager
      </Typography>
      <Typography variant="h4" align="center">
        For employees only
      </Typography>
      <form onSubmit={handleLogin} id="login-form">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Username"
            id="username"
            name="username"
            variant="standard"
            type="text"
            onChange={handleUserChange}
            sx={{ mt: "5%" }}
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            variant="standard"
            type="password"
            onChange={handlePassChange}
            sx={{ mt: "5%" }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: "5%", display: "flex" }}
            form="login-form"
          >
            Login
          </Button>
        </Box>
      </form>
      {redirect? <Redirect to="/" /> : null}
    </Container>
  );
};

export default Login;
