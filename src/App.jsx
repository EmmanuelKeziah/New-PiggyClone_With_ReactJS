// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/block/Header'
import Home from './pages/Home'
import Save from './pages/Save'
import Invest from './pages/Invest'
import Stories from './pages/Stories'
import FAQs from './pages/FAQs'
import Resources from './pages/Resources'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/save" element={<Save />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
