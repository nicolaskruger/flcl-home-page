import React from 'react';
import './App.css';
import { RouterBuilder } from './routes/build/routes.builder';
import { CombineProvider } from './ui';

function App() {
  return (
    <CombineProvider>
      <RouterBuilder />
    </CombineProvider>
  );
}

export default App;
