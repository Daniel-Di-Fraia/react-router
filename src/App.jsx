import './App.css'

// import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import del layout
import Layout from './assets/layout/Layout';


// importiamo le pagine di riferimento
import HomePage from './assets/pages/HomePage';
import AboutUs from './assets/pages/AboutUs';
import CardShop from './assets/pages/CardShop';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/CardShop" element={<CardShop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
