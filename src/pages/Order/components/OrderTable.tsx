import React from "react";
import { DataGrid, GridColDef, GridRowParams, GridValueGetterParams } from "@mui/x-data-grid";
import { Box } from '@mui/material';

function OderTable() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Drink name", sortable: true, width: 360 },
    { field: "category", headerName: "Category", sortable: true, width: 200 },
    { field: "price", headerName: "Price", type: 'number', sortable: true, width: 200}
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
    { id: 1, name: "Black Coffee", category: "Coffee", price: 20000 }
  ];

  const handleClick = (e: GridRowParams) =>{
    console.log(e)
  }

  return (
    <Box sx={{height: "80vh", width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize
        editMode={'row'}
        onRowClick={handleClick}
      />
    </Box>
  );
}

export default OderTable;
