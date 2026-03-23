import Header_section from "../components/layout/Header_section"
import Footer_section from "../components/layout/Footer_section"
import { Link } from "react-router-dom"

function Orders_Page() {

    //  localStorage se data
    const book = JSON.parse(localStorage.getItem("selectedBook"))

    //  safety
    if (!book) {
        return <h1 className="text-center mt-20 text-2xl">No Order Found</h1>
    }

    // values
    const qty = book.qty || 1
    const price = book.price || 0
    const delivery = 20
    const total = (price * qty) + delivery

    return (
        <>
            <Header_section />
            <section className="bg-[#F5E7A3] min-h-screen py-10 px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* USER DETAILS */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h2 className="text-lg font-semibold mb-4 text-gray-800">
                                Delivery Details
                            </h2>

                            <div className="space-y-2 text-gray-700">
                                <p><span className="font-semibold">Name :</span> Aditya Das</p>
                                <p><span className="font-semibold">Contact :</span> 8839125240</p>
                                <p>
                                    <span className="font-semibold">Address : </span>
                                    {book.address}
                                </p>
                                <p>
                                    <span className="font-semibold">Expected Delivery : </span>
                                    22 March
                                </p>
                            </div>
                        </div>


                        {/* BOOK DETAILS */}
                        <div className="bg-white p-6 rounded-xl shadow-md flex gap-6">

                            <img
                                src={book.img}
                                alt="Book"
                                className="h-30 w-24 object-cover rounded"
                            />

                            <div className="flex flex-col justify-between w-full">

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {book.name}
                                    </h3>

                                    <p className="text-sm text-gray-600">
                                        {book.author}
                                    </p>

                                    <p className="mt-2 font-bold text-lg text-gray-900">
                                        ₹{book.price}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>



                    {/* RIGHT SIDE */}
                    <div className="space-y-6">

                        {/* PRICE DETAILS */}
                        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

                            <h2 className="text-lg font-semibold text-gray-800">
                                Price Details
                            </h2>

                            <div className="flex justify-between text-sm">
                                <span>Book Price</span>
                                <span>₹{price}</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span> Quantity </span>
                                <span>{qty}</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span>Delivery Fees</span>
                                <span>₹{delivery}</span>
                            </div>

                            <hr />

                            <div className="flex justify-between font-semibold text-gray-900">
                                <span>Total Amount</span>
                                <span>₹{total}</span>
                            </div>

                            <h2 className="text-lg font-semibold text-gray-800">
                                Payment Method
                            </h2>

                            <select className="w-full border px-3 py-2 rounded">
                                <option>Cash on Delivery</option>
                                <option>UPI</option>
                                <option>Debit Card</option>
                                <option>Credit Card</option>
                                <option>Net Banking</option>
                            </select>

                            <Link to={"/Invoice"}>
                                <button className="w-full bg-[#E7D48A] py-3 rounded-lg font-semibold hover:bg-[#d8c26e] transition">
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

export default Orders_Page