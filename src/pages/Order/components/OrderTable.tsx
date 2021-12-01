import React, { useState } from "react";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import OrderModal from "./OrderModal";

type Drinks = {
  name: string;
  price: number;
};

function OderTable() {
  const [open, setOpen] = useState(false);
  const [drink, setDrink] = useState<Drinks>({name: 'null', price: 0});
  const [order, setOrder] = useState<Drinks[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", minWidth: 70 },
    {
      field: "name",
      headerName: "Drink name",
      sortable: true,
      minWidth: 200,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      sortable: true,
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      sortable: true,
      minWidth: 100,
    },
  ];

  const rows = [
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 },
  ];

  const handleTableClick = (e: GridRowParams) => {
    setOpen(true);
    setDrink({name: e.row.name, price: e.row.price});
  };

  const handleAdd = (e: any) => {
    if (order) {
      setOrder([
        ...order,
        { name: drink.name, price: drink.price },
      ]);
    } else {
      setOrder([{ name: drink.name, price: drink.price }]);
    }
    console.log(order)
  };

  const handleClose = (e: any) => {
    setOpen(false);
  };

  return (
    <Box sx={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize
        editMode={"row"}
        onRowClick={handleTableClick}
      />
      <OrderModal
        open={open}
        handleAdd={handleAdd}
        handleClose={handleClose}
        drink={drink}
      />
    </Box>
  );
}

export default OderTable;
