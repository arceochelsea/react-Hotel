import React from 'react';
import AppRouter from './Components/AppRouter';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
function App() {
  return (
    <div className='App'>
    <NavBar />
    <Form />
    <AppRouter />
    </div>
  );
}

export default App;
