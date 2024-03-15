import React, { createContext, useState, useContext } from 'react';
import { Notification } from '../components/Notification';
// import { AlertColor } from '@mui/material';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (msg) => {
    setSeverity('error');
    setOpen(true);
    setMsg(msg);
  };

  const getSuccess = (msg) => {
    setSeverity('success');
    setOpen(true);
    setMsg(msg);
  };

  const value = {
    getError,
    getSuccess,
  };

  return (
    React.createElement(NotificationContext.Provider, { value: value },
      React.createElement(Notification, { handleClose: handleClose, open: open, severity: severity, msg: msg }),
      children
    )
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('No existe contexto');
  return context;
};
