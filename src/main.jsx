import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Komponen/Header.jsx'
import Footer from './Komponen/Footer.jsx'
import Utama from './Komponen/Utama.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <Header/>
    <Utama/>
    <Footer/>
  </React.StrictMode>,
)
