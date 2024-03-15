import React, { useEffect, useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import {
  createOrder,
  getAllItems,
} from '../api/access/payment';
import OrderDialog from './OrderDialogCreate';

export const homePath = '/';

export const Home = ({ }) => {

    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialogView, setOpenDialogView] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [newOrder, setNewOrder] = useState([
            {
            id: '', 
            items: [
                {
                id: '',
                sku: '',
                name: '',
                quantity: undefined,
                price: undefined
                }
            ]
            }
        ]);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
   setNewOrder( [
        {
          id: '', 
          items: [
            {
              id: '',
              sku: '',
              name: '',
              quantity: undefined,
              price: undefined
            }
          ]
        }
      ]
   )
    setOpenDialogView(false);
    setOpenDialog(false);
  };

  const handleCreateOrder = async (order) => {
    setData(data.concat(order));
    //Se agrega localmente debido a que no se proporcionó método post
    // try {
    //   const response = await createOrder(categoria);
    //   console.log('Orden creada:', response.data);
    //   getSuccess('¡Se ha creado una nueva orden!');
    //   } catch (error) {
    //   getError('Error al crear una nueva orden, vuelve a intentar!');
    //   console.error('Error al crear una orden:', error);
    // }
  };

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setOpenDialogView(true);
  };
 

  useEffect(() => {
    getAllItems()
      .then((data) => {
        console.log('los datos', data)
        setData(data.orders);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de categorías:', error);
      });
  }, []);

  return (
    <>
      <Stack>
        <Typography>
          Consulta y Registro de <strong>Orden de Pago</strong>. 
        </Typography>
        <Button sx={{ width: '100%' }} onClick={handleClickOpenDialog}>
             Añadir nueva orden
            </Button> 
            <OrderDialog
            open={openDialog}
            onClose={handleCloseDialog}
            onCreateOrder={handleCreateOrder}
            newOrder={newOrder}
            setNewOrder={setNewOrder}
            /> 
      </Stack>
      <Box sx={{ mt: 4 }}>
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell align="center">SKU</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Precio</TableCell>
                <TableCell align="center"></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((order, index) => (
                <TableRow key={index}>
                    <TableCell align="center">{order.items[0].sku}</TableCell>
                    <TableCell align="center">{order.items[0].name}</TableCell>
                    <TableCell align="center">{order.items[0].quantity}</TableCell>
                    <TableCell align="center">$ {order.items[0].price}</TableCell>
                    <TableCell align="center">
                    <Button fullWidth onClick={() => handleRowClick(order)}>
                        Ver 
                    </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
            <Dialog open={openDialogView} onClose={handleCloseDialog}>
                <DialogTitle>Orden {selectedOrder?.number}</DialogTitle>
                <DialogContent>
                {selectedOrder && (
                    <>
                    <div>SKU: {selectedOrder.items[0].sku}</div>
                    <div>Nombre: {selectedOrder.items[0].name}</div>
                    <div>Cantidad: {selectedOrder.items[0].quantity}</div>
                    <div>Precio: ${selectedOrder.items[0].price}</div>
                    </>
                )}
                </DialogContent>
          </Dialog>
      </Box>
    </>
  );
};

export default Home;
