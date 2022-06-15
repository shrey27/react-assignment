import React from 'react';
import './style.css';
import Main from './Main';
import Sidebar from './Sidebar';
import Input from './Input';

export default function App() {
  
  return (
    <div className="app">
      <Input />
      <Sidebar />
      <Main />
    </div>
  );
}
