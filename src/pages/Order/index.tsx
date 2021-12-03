import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import OderTable from "./components/OrderTable";
import { GridRowParams } from "@mui/x-data-grid";

type Drinks = {
  name: string;
  price: number;
  quantity: number;
  note?: string
};

const Order = (props: any) => {
  const [open, setOpen] = useState(false);
  const [drink, setDrink] = useState<Drinks>({ name: "null", price: 0, quantity: 1 });
  const [order, setOrder] = useState<Drinks[]>([]);
  const [quantity, setQuantity] = useState(1)

  const handleTableClick = (e: GridRowParams) => {
    setOpen(true);
    setDrink({ name: e.row.name, price: e.row.price, quantity: 1 });
  };
  const handleAdd = (e: React.MouseEvent<HTMLElement>) => {
    if (order) {
      const nameDrinkArr = order.map((item) => item.name);
      const isDup = nameDrinkArr.some(
        (item, idx) => {
          return nameDrinkArr.indexOf(drink.name) === idx}
      );
      if(isDup){
        const drinkIdx = nameDrinkArr.indexOf(drink.name)
        order[drinkIdx].quantity +=  quantity
      }
      else{
        setOrder([...order, { name: drink.name, price: drink.price, quantity: quantity }]);
      }
    } else {
      setOrder([{ name: drink.name, price: drink.price, quantity: quantity }]);
    }
    setOpen(false)
    setQuantity(1)
  };
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
    setQuantity(1)
  };
  const handleThanhToan = (e: React.MouseEvent<HTMLElement>) => {
    console.log(order);
  };
  
  const handleChangeQuantity = (e: any)=>{
    setQuantity(parseInt(e.nativeEvent.srcElement.value))
    console.log(quantity);
  }

  const handleDelete = (e: React.MouseEvent<HTMLElement>) =>{
    console.log(e)
  }

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item xs={9} sx={{ height: "100%" }}>
        <Grid
          container
          sx={{ bgcolor: "white", display: "flex", height: "100%" }}
        >
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
            <OderTable
              open={open}
              drink={drink}
              order={order}
              handleTableClick={handleTableClick}
              handleAdd={handleAdd}
              handleClose={handleClose}
              handleChangeQuantity={handleChangeQuantity}
            ></OderTable>
          </Grid>
          <Grid item xs={12} sx={{ px: 1, pb: 1 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ float: "right", ml: 2 }}
              onClick={handleThanhToan}
            >
              Thanh toán
            </Button>
            <Button variant="contained" sx={{ float: "right" }}>
              Xem bill
            </Button>
            <Button variant="contained" color="error" sx={{ float: "left" }}>
              Xóa bill
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ height: "100%", bgcolor: "white" }}>
            <Typography align="center" variant="h3">Order's bill</Typography>
          <Box sx={{ display: "flex" }}>
            <List sx={{width: '100%'}}>
              {order.map((item) => (
                <ListItem
                  key={item.name}
                  secondaryAction={
                    <IconButton id={item.name} edge="end" aria-label="delete" onClick={handleDelete}>
                      <DeleteIcon color="primary"/>
                    </IconButton>
                  }
                >
                  <Box sx={{display: 'flex', justifyContent: 'space-between', flexGrow: 1}}>
                    <Typography sx={{flex: 1, pl: 1}}>{item.name}</Typography>
                    <Typography align='left' sx={{minWidth: '30px'}}>x{item.quantity}</Typography>
                    <Typography align='right' sx={{ml: 2, minWidth: '120px'}}>{(item.price * item.quantity).toLocaleString(undefined)} VND</Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Order;
