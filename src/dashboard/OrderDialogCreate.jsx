import React, { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useNotification } from '../contexts/notification.context';

const OrderDialog = ({
  open,
  onClose,
  onCreateOrder,
  newOrder,
  setNewOrder,
}) => {
  
  const [isPagar, setIsPagar] = useState(false);
  const { getError, getSuccess } = useNotification();

  const handleCreate = () => {
    
    if(newOrder[0]?.items[0]?.sku && newOrder[0]?.items[0]?.name && newOrder[0]?.items[0]?.quantity && newOrder[0]?.items[0]?.price){
      getSuccess('Se añadido la orden de pago correctamente!');
      onCreateOrder(newOrder);
      onClose();
      setIsPagar(false);
    }else{
      setIsPagar(true);
      getError('Favor de completar los campos!');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Añadir Orden</DialogTitle>
      <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="sku"
        label="Añade sku"
        type="text"
        value={newOrder[0]?.items[0]?.sku}
        onChange={(e) => setNewOrder([{ ...newOrder[0], items: [{ ...newOrder[0]?.items[0], sku: e.target.value }] }])}
        fullWidth
        variant="standard"
        error={isPagar && !newOrder[0]?.items[0]?.sku} 
        helperText={isPagar && !newOrder[0]?.items[0]?.sku ? 'Este campo es requerido' : ''}
        required
      />

      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Añadir nombre"
        type="text"
        value={newOrder[0]?.items[0]?.name}
        onChange={(e) => setNewOrder([{ ...newOrder[0], items: [{ ...newOrder[0]?.items[0], name: e.target.value }] }])}
        fullWidth
        variant="standard"
        error={isPagar && !newOrder[0]?.items[0]?.name} 
        helperText={isPagar && !newOrder[0]?.items[0]?.name ? 'Este campo es requerido' : ''}
        required
      />

      <TextField
        autoFocus
        margin="dense"
        id="quantity"
        label="Añadir cantidad"
        type="number"
        value={newOrder[0]?.items[0]?.quantity}
        onChange={(e) => setNewOrder([{ ...newOrder[0], items: [{ ...newOrder[0]?.items[0], quantity: e.target.value }] }])}
        fullWidth
        variant="standard"
        error={isPagar && !newOrder[0]?.items[0]?.quantity} 
        helperText={isPagar && !newOrder[0]?.items[0]?.quantity ? 'Este campo es requerido' : ''}
        required
      />

      <TextField
        autoFocus
        margin="dense"
        id="price"
        label="Añadir precio"
        type="number"
        value={newOrder[0]?.items[0]?.price}
        onChange={(e) => setNewOrder([{ ...newOrder[0], items: [{ ...newOrder[0]?.items[0], price: e.target.value }] }])}
        fullWidth
        variant="standard"
        error={isPagar && !newOrder[0]?.items[0]?.price} 
        helperText={isPagar && !newOrder[0]?.items[0]?.price ? 'Este campo es requerido' : ''}
        required
      />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleCreate}> Pagar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDialog;
