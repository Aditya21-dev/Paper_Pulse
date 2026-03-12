// function App() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-5xl font-bold text-blue-600">
//         Tailwind Activated
//       </h1>
//     </div>
//   )
// }

// export default App


// import { Routes, Route, useNavigate } from 'react-router-dom'

// function App() {
//   const navigate = useNavigate()

//   return (
//     <div className="p-6">

//       {/* Buttons for Navigation */}
//       <div className="mb-6 space-x-4">
//         <button onClick={() => navigate("/")}className="bg-blue-500 text-white px-4 py-2 rounded">Home</button>
//         <button onClick={() => navigate("/about")} className="bg-orange-500 text-white px-4 py-2 rounded">About</button>
//       </div>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<h1 className="text-4xl font-bold">Home Page</h1>} />
//         <Route path="/about" element={<h1 className="text-4xl font-bold">About Page</h1>} />
//       </Routes>

//     </div>
//   )
// }

// export default App


// import { Route,Routes } from "react-router-dom"
// import HomePage from "./pages/Home"
// import AboutPage from "./pages/About"

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route index element={ <HomePage/>} />
//         <Route path="/home" element={ <HomePage />} />
//         <Route path="/about" element={ <AboutPage />} />
//       </Routes>
//     </div>
//   )
// }

// export default App






import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App