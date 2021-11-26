import React from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import OderTable from './components/OrderTable';

const Order = (props: any) => {
  return (
    <Grid container sx={{height: "100%"}}>
      <Grid item xs={9} sx={{height: "100%"}}>
        <Grid container sx={{ bgcolor: "white", display: "flex", height: "100%" }}>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
          >
            <Typography variant="h3" sx={{}}>
              Order
            </Typography>
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              sx={{}}
            />
          </Grid>
          <Grid item xs={12}>
            <OderTable></OderTable>
          </Grid>
          <Grid item xs={12} sx={{px: 1, pb: 1}}>
              <Button variant="contained" color="success" sx={{float: "right", ml: 2}}>Thanh toán</Button>
              <Button variant="contained" sx={{float: "right"}}>Chỉnh sửa</Button>
              <Button variant="contained" color="error" sx={{float: "left"}}>Xóa bill</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ height: "100%", bgcolor: "white", display: "flex" }}>
          bill
        </Box>
      </Grid>
    </Grid>
  );
};

export default Order;
