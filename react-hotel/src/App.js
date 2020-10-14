import React from 'react';
import AppRouter from './Components/AppRouter';
import NavBar from './Components/NavBar';
import RoomsContextProvider from './contexts/roomsContext';

function App() {
  return (
    <div className='App'>
    <RoomsContextProvider >
    <NavBar />
    <AppRouter />
    </RoomsContextProvider>
    </div>

  );
}

export default App;
