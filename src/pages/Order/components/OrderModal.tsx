import React, { useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

type Props = {
  open: boolean;
  handleAdd: (e: any) => void;
  handleClose: (e: any) => void;
  drink: any;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5
};

const OrderModal: React.FC<Props> = ({
  open,
  handleAdd,
  handleClose,
  drink,
}) => {
  const [quantity, setQuantity] = useState(1)
  const handleChange = (e: any)=>{
    setQuantity(parseInt(e.nativeEvent.srcElement.value))
    console.log(quantity);
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {drink.name || ''}
        </Typography>
        <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2, float: 'right' }}>
          {drink.price || ''} VND
        </Typography>
        <TextField type='number' id="standard-basic" label="Quantity" variant="standard" defaultValue={1} onChange={handleChange} sx={{mt: 2}}/>
        <TextField id="standard-basic" label="Note" variant="standard" sx={{mt: 2}}/>
        <Button variant="contained" color="success" sx={{float: 'right'}} onClick={handleAdd}><AddIcon/></Button>
      </Box>
    </Modal>
  );
};

export default OrderModal;
