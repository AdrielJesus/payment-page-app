import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { NotificationProvider } from './contexts/notification.context';
import { AppRouter } from './Router';

function App() {
  return (
    <div>
      {/* Envolver la aplicación con RecoilRoot, NotificationProvider y BrowserRouter */}
      <RecoilRoot>
        <NotificationProvider>
          <BrowserRouter>
            {/* Componente principal de enrutamiento */}
            <AppRouter />
          </BrowserRouter>
        </NotificationProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
