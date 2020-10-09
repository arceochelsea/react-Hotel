import React from 'react';
import AppRouter from './Components/AppRouter';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import RoomsContextProvider from './contexts/roomsContext';

function App() {
  return (
    <div className='App'>
    <RoomsContextProvider >
    <NavBar />
    <Form />
    <AppRouter />
    </RoomsContextProvider>
    </div>

  );
}

export default App;
