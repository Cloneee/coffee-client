import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import OderTable from "./components/OrderTable";
import { GridRowParams } from "@mui/x-data-grid";

type Drinks = {
  name: string;
  price: number;
  quantity: number;
  note?: string;
};

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const Order = (props: any) => {
  const [open, setOpen] = useState(false);
  const [drink, setDrink] = useState<Drinks>({
    name: "null",
    price: 0,
    quantity: 1,
  });
  const [order, setOrder] = useState<Drinks[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [drawer, setDrawer] = useState(true);

  const handleTableClick = (e: GridRowParams) => {
    setOpen(true);
    setDrink({ name: e.row.name, price: e.row.price, quantity: 1 });
  };
  const handleAdd = (e: React.MouseEvent<HTMLElement>) => {
    if (order) {
      const nameDrinkArr = order.map((item) => item.name);
      const isDup = nameDrinkArr.some((item, idx) => {
        return nameDrinkArr.indexOf(drink.name) === idx;
      });
      if (isDup) {
        const drinkIdx = nameDrinkArr.indexOf(drink.name);
        order[drinkIdx].quantity += quantity;
      } else {
        setOrder([
          ...order,
          {
            name: drink.name,
            price: drink.price,
            quantity: quantity,
            note: note,
          },
        ]);
      }
    } else {
      setOrder([
        {
          name: drink.name,
          price: drink.price,
          quantity: quantity,
          note: note,
        },
      ]);
    }
    setOpen(false);
    setQuantity(1);
    setNote("");
  };
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
    setQuantity(1);
    setNote("");
  };
  const handleThanhToan = (e: React.MouseEvent<HTMLElement>) => {
    console.log(order);
  };

  const handleChangeQuantity = (e: any) => {
    setQuantity(parseInt(e.nativeEvent.srcElement.value));
  };
  const handleChangeNote = (e: any) => {
    setNote(e.nativeEvent.srcElement.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  const toggleBill = (e: React.MouseEvent<HTMLElement>) => {
    setDrawer(!drawer);
  };

  return (
    <Box sx={{ height: "100%", display: "flex" }}>
      <Main open={drawer}>
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
              handleTableClick={handleTableClick}
              handleAdd={handleAdd}
              handleClose={handleClose}
              handleChangeQuantity={handleChangeQuantity}
              handleChangeNote={handleChangeNote}
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
            <Button
              variant="contained"
              onClick={toggleBill}
              sx={{ float: "right" }}
            >
              Xem bill
            </Button>
            <Button variant="contained" color="error" sx={{ float: "left" }}>
              Xóa bill
            </Button>
          </Grid>
        </Grid>
      </Main>
      <Drawer
        anchor="right"
        variant="persistent"
        open={drawer}
        onClose={toggleBill}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
          display: "flex",
        }}
      >
        <Typography align="center" variant="h3" sx={{ pt: 8 }}>
          Receiption
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            borderTop: "1px solid gray",
            borderBottom: "1px solid gray",
          }}
        >
          <List sx={{ width: "100%" }}>
            {order.map((item) => (
              <ListItem
                key={item.name}
                secondaryAction={
                  <IconButton
                    id={item.name}
                    edge="end"
                    aria-label="delete"
                    onClick={handleDelete}
                  >
                    <DeleteIcon color="primary" />
                  </IconButton>
                }
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    width: "100%",
                  }}
                >
                  <Typography sx={{ flex: 1, pl: 1 }}>{item.name}</Typography>
                  <Typography align="left" sx={{ minWidth: "30px" }}>
                    x{item.quantity}
                  </Typography>
                  <Typography align="right" sx={{ ml: 2, minWidth: "120px" }}>
                    {(item.price * item.quantity).toLocaleString(undefined)} VND
                  </Typography>
                </Box>
                {item.note ? (
                  <Box sx={{ flexGrow: 1, width: "100%" }}>
                    <Typography align="right" variant="subtitle2">
                      - {item.note} -
                    </Typography>
                  </Box>
                ) : (
                  ""
                )}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            p: 2,
          }}
        >
          <Typography>Tổng</Typography>
          <Typography align="right" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            {order
              .map((el) => el.price * el.quantity)
              .reduce((partial_sum, a) => partial_sum + a, 0)
              .toLocaleString(undefined)}
            VND
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Order;
