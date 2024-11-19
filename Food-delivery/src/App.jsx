import Header from "./components/Header.jsx"
import {BrowserRouter,Route,Routes } from "react-router-dom"
import Menu from "./components/Menu.jsx"
import { createContext, useState } from "react"
import ViewCart from "./components/ViewCart.jsx"
import Home from "./components/Home.jsx"
function App() {
  const [cart,setCart] =useState([])
  return (
    <>
    <div className="container">
   <cartContext.Provider value={{cart,setCart}}>
   <BrowserRouter>
     
     <Header cart={cart}          />
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu    />} />
      <Route path="/Viewcart" element={<ViewCart   />} />
     
     </Routes>
     </BrowserRouter>

   </cartContext.Provider>
     </div>
    </>
  )
}
export const cartContext=createContext()

export default App
