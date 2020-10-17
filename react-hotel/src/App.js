import React from 'react';
import AppRouter from './Components/AppRouter';
import RoomsContextProvider from './contexts/roomsContext';

function App() {
  return (
    <div className='App'>
    <RoomsContextProvider >
    <AppRouter />
    </RoomsContextProvider>
    </div>

  );
}

export default App;
