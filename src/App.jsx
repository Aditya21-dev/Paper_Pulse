import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import Book_Shelf from "./pages/Book_Shelf"
import Book_details_booking from "./pages/Book_detail&booking"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Orders_Page from "./pages/Orders"
import Cart from "./pages/Cart"

import Invoice from "./pages/Invoice"



function App() {
  return (
    <Routes>
      <Route path="/Signup" element = {<Signup/>} />
      <Route path='/Login' element = {<Login/>} />

      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/Book_Shelf" element={<Book_Shelf />} />

      <Route path="/Book_details_booking" element={<Book_details_booking />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Orders_page" element={<Orders_Page />} />
      <Route path="/Invoice" element={<Invoice />} />
    </Routes>
  )
}

export default App