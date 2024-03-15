import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import { useStyles } from './Styles';

export const NavBar = () => {
  return (
    <Box sx={useStyles.appBar}>
      <AppBar position="sticky">
        <Toolbar sx={{ width: '100%' }}>
          <Container maxWidth="xl">
            <Grid container sx={useStyles.appBar.gridConainer}>
              <Grid item md={3} sm={3} xs={8} sx={useStyles.appBar.gridConainer.gridItemTitle}>
                <Typography>Página de Pago</Typography>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
