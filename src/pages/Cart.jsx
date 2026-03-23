import Header_section from "../components/layout/Header_section"
import Footer_section from "../components/layout/Footer_section"
import { Link } from "react-router-dom"

function Cart() {

    // ✅ localStorage se data
    const cart = JSON.parse(localStorage.getItem("selectedBook"))

    return (
        <>
            <Header_section />

            <section className="bg-[#F5E7A3] min-h-screen py-10 px-6">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Your Cart
                </h1>

                {/* Cart Container */}
                <div className="max-w-3xl mx-auto space-y-6">

                    {/* CARD 1 (Dynamic) */}
                    {cart && (
                        <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6">

                            <img
                                src={cart.img}
                                alt="Book"
                                className="h-32 w-24 object-cover rounded-md"
                            />

                            <div className="flex-1 space-y-1">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {cart.name}
                                </h2>

                                <p className="text-gray-600 text-sm">
                                    {cart.author}
                                </p>

                                <p className="text-gray-600 text-sm">
                                    Quentity - {cart.qty}
                                </p>

                                <p className="text-lg font-bold text-gray-900">
                                    ₹{cart.price}
                                </p>
                            </div>

                            <Link to={"/Orders_page"}>
                                <button className="bg-[#E7D48A] px-6 py-2 rounded-lg font-semibold hover:bg-[#d8c26e] transition">
                                    Buy It
                                </button>
                            </Link>

                        </div>
                    )}

                </div>

            </section>

            <Footer_section />
        </>
    )
}

export default Cart