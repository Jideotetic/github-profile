import React from 'react';
import Layout from './layout/Layout';
import Router from './routes/Routes';
import './App.css';



export default function App() {
  return (
    <div className="App">
      <Layout />
      <div className='route-container'>
        <Router />
      </div>
      
      
    </div>
  );
}


