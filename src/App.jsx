import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <div className='app'>
    <div className='body'>
      <div className="sidebar">
    <Sidebar/>
      </div>
      <div className="dashboards">
    <Dashboard/>

      </div>
    </div>
    </div>
    </BrowserRouter>
    
  )
}

export default App
