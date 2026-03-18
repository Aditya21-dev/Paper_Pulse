import Header_section from "../components/layout/Header_section"
import Footer_section from "../components/layout/Footer_section"
import { Link } from "react-router-dom"

import { useState } from "react"

function Book_Details_booking() {
  const [qty, setQty] = useState(1)

  const increase = () => {
    setQty(qty + 1)
  }

  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  return (
    <>
      <Header_section />
      <section className="h-screen bg-[#F5E7A3] flex items-center justify-center p-4">
        <div className="w-full max-w-6xl h-[90vh] bg-white rounded-xl shadow-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8">
            {/* Main Image */}
            <div className="w-[260px] h-[340px] flex items-center justify-center bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                alt="Book cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 lg:gap-5">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                alt="Thumbnail 1"
                className="h-16 w-12 object-cover rounded border-2 border-gray-200 hover:scale-105 cursor-pointer transition-transform flex-shrink-0"
              />
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="Thumbnail 2"
                className="h-16 w-12 object-cover rounded border-2 border-gray-200 hover:scale-105 cursor-pointer transition-transform flex-shrink-0"
              />
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                alt="Thumbnail 3"
                className="h-16 w-12 object-cover rounded border-2 border-gray-200 hover:scale-105 cursor-pointer transition-transform flex-shrink-0"
              />
            </div>

            {/* Book Info */}
            <div className="text-center space-y-2">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                The Silent Library
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Author: Emma Clarke
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                ₹399
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between space-y-6 lg:space-y-8">
            {/* DETAILS */}
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                Details:
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  A mysterious novel set in an ancient forgotten library where every book hides a secret. A young historian discovers manuscripts that can rewrite history itself.
                </p>

                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <p>• Genre: Mystery / Fantasy</p>
                  <p>• Pages: 320</p>
                  <p>• Language: English</p>
                  <p>⭐ 4.6 Rating (1200+ Reviews)</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <p className="font-semibold text-base md:text-lg text-gray-800">
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={decrease}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
                    disabled={qty <= 1}
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-gray-900 min-w-[2rem] text-center">
                    {qty}
                  </span>
                  <button
                    onClick={increase}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-3">
                <p className="font-semibold text-base md:text-lg text-gray-800">
                  Address
                </p>
                <textarea
                  rows="3"
                  placeholder="Enter your delivery address..."
                  className="w-full p-4 border-2 border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:border-blue-500 resize-vertical"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4 border-t">
              <Link to="/Cart">
                <button className="flex-1 sm:flex-none px-6 py-3 border-2 border-black rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                  Add to Cart
                </button>
              </Link>

              <Link to={"/Orders_page"}>
                <button className="flex-1 sm:flex-none px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm md:text-base">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer_section />
    </>
  )
}

export default Book_Details_booking








// function Book_Details_booking() {
//   const [qty, setQty] = useState(1)

//   const increase = () => {
//     setQty(qty + 1)
//   }

//   const decrease = () => {
//     if (qty > 1) {
//       setQty(qty - 1)
//     }
//   }

//   return (
//     <>
//       <Header_section />
//       <section className="bg-[#F5E7A3] flex items-center justify-center p-4">
//         <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
//           {/* LEFT SIDE */}
//           <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8">
//             {/* Main Image */}
//             <div className="w-[260px] h-[340px] flex items-center justify-center bg-gray-100 rounded-lg shadow-md overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
//                 alt="Book cover"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Thumbnails */}
//             <div className="flex gap-3 lg:gap-5">
//               <img
//                 src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
//                 alt="Thumbnail 1"
//                 className="h-16 w-12 object-cover rounded border-2 border-gray-200 hover:scale-105 cursor-pointer transition-transform flex-shrink-0"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
//                 alt="Thumbnail 2"
//                 className="h-16 w-12 object-cover rounded border-2 border-gray-200 hover:scale-105 cursor-pointer transition-transform flex-shrink-0"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
//                 alt="Thumbnail 3"
//                 className="h-16 w-12 object-cover rounded border-2 border-gray-200 hover:scale-105 cursor-pointer transition-transform flex-shrink-0"
//               />
//             </div>

//             {/* Book Info */}
//             <div className="text-center space-y-2">
//               <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
//                 The Silent Library
//               </h1>
//               <p className="text-gray-600 text-sm md:text-base">
//                 Author: Emma Clarke
//               </p>
//               <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
//                 ₹399
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex flex-col justify-between space-y-6 lg:space-y-8">
//             {/* DETAILS */}
//             <div className="space-y-4 lg:space-y-6">
//               <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
//                 Details:
//               </h2>

//               <div className="space-y-3">
//                 <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                   A mysterious novel set in an ancient forgotten library where every book hides a secret. A young historian discovers manuscripts that can rewrite history itself.
//                 </p>

//                 <div className="space-y-2 text-sm md:text-base text-gray-700">
//                   <p>• Genre: Mystery / Fantasy</p>
//                   <p>• Pages: 320</p>
//                   <p>• Language: English</p>
//                   <p>⭐ 4.6 Rating (1200+ Reviews)</p>
//                 </div>
//               </div>

//               {/* Quantity */}
//               <div className="space-y-3">
//                 <p className="font-semibold text-base md:text-lg text-gray-800">
//                   Quantity
//                 </p>
//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={decrease}
//                     className="w-12 h-12 border-2 border-gray-300 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
//                     disabled={qty <= 1}
//                   >
//                     -
//                   </button>
//                   <span className="text-2xl font-bold text-gray-900 min-w-[2rem] text-center">
//                     {qty}
//                   </span>
//                   <button
//                     onClick={increase}
//                     className="w-12 h-12 border-2 border-gray-300 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="space-y-3">
//                 <p className="font-semibold text-base md:text-lg text-gray-800">
//                   Address
//                 </p>
//                 <textarea
//                   rows="3"
//                   placeholder="Enter your delivery address..."
//                   className="w-full p-4 border-2 border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:border-blue-500 resize-vertical"
//                 />
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4 border-t">
//               <button className="flex-1 sm:flex-none px-6 py-3 border-2 border-black rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
//                 Add to Cart
//               </button>
//               <button className="flex-1 sm:flex-none px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm md:text-base">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer_section />
//     </>
//   )
// }

// export default Book_Details_booking
