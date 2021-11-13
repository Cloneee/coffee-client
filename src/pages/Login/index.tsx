import { Button, TextField, Typography, Container, Box } from "@mui/material";
import React, { useState } from "react";

const Login = (props: any) => {
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`username: ${user.username} \npassword: ${user.password}`);
  };

  return (
    <Container
      sx={{ bgcolor: "white", boxShadow: 1, width: "45%", mt: "10%", py: "2%", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: 16 }}
    >
      <Typography variant="h1" align="center">
        Coffee Manager
      </Typography>
      <Typography variant="h4" align="center">
        For employees only
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit} id="login-form">
          <TextField
            label="Username"
            id="username"
            name="username"
            variant="standard"
            type="text"
            onChange={handleUserChange}
            sx={{mt: "5%"}}
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            variant="standard"
            type="password"
            onChange={handlePassChange}
            sx={{mt: "5%"}}
          />
        </form>
          <Button type="submit" variant="contained" size="large" sx={{mt: "5%", display: "flex"}} form="login-form">
            Login
          </Button>
      </Box>
    </Container>
  );
};

export default Login;
