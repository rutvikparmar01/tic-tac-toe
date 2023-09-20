
import Grid from "./components/grid/Grid"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes,BrowserRouter } from "react-router-dom"
import React from "react"

function App() {

  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route index element={<Navbar />}/>
         
          <Route path="/Grid" element={<Grid numberOfCard={(9)} />} />
       
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
