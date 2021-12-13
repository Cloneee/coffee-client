import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Info = (props: any) => {
  const [fullname, setFullname] = useState("Nguyễn Thanh Huy");
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [validate, setValidate] = useState(true);

  useEffect(() => {
    password === rePassword ? setValidate(true) : setValidate(false);
    return () => {};
  }, [password, rePassword]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    password === rePassword? console.log(
      `Fullname: ${fullname}\nPassword: ${password}\nrePassword: ${rePassword}`
    ) : alert('Check your information')
  };
  const handleNameChange = (e: any) => {
    setFullname(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleChangeRePassword = (e: any) => {
    setRePassword(e.target.value);
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        bgcolor: "white",
        boxShadow: 1,
        mt: "10%",
        py: "2%",
        borderRadius: 16,
      }}
    >
      <Typography variant="h4" align="center">
        Edit infomation
      </Typography>
      <form onSubmit={handleSubmit} id="login-form">
        <Box sx={{ display: "flex", flexDirection: "column", px: 5, pb: 2 }}>
          <TextField
            label="Full name"
            id="name"
            name="name"
            variant="standard"
            type="text"
            onChange={handleNameChange}
            sx={{ mt: 2 }}
            defaultValue={fullname}
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            variant="standard"
            type="password"
            onChange={handleChangePassword}
            sx={{ mt: 2 }}
          />
          <TextField
            error={!validate}
            label="Comfirm password"
            id="repassword"
            name="repassword"
            variant="standard"
            type="password"
            onChange={handleChangeRePassword}
            sx={{ mt: 2 }}
          />
          <Button
            disabled={!validate || rePassword === undefined}
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
            form="login-form"
          >
            Submmit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Info;
