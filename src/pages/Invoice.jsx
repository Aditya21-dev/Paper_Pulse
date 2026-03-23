




import Header_section from "../components/layout/Header_section"
import Footer_section from "../components/layout/Footer_section"
import { useEffect, useState } from "react"

function Invoice() {

    const [order, setOrder] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch("http://localhost:3001/orders_details")
        const data = await res.json()
        setOrder(data[data.length - 1]) // last order
    }

    if (!order) return <h1 className="text-center mt-20 text-2xl">Loading...</h1>

    const subtotal = order.bookPrice * order.quantity
    const delivery = 20
    const total = subtotal + delivery
    const today = new Date().toLocaleDateString()

    return (
        <>
            <Header_section />
            <section className="bg-[#F5E7A3] min-h-screen py-10 px-6">

                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">

                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-4">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Paper Pulse Invoice
                        </h1>

                        <div className="text-sm text-gray-600 text-right">
                            <p>Invoice ID: #{order.id}</p>
                            <p>Date: {today}</p>
                        </div>
                    </div>

                    {/* Customer Details */}
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-2">
                            Billed To:
                        </h2>

                        <p className="text-gray-700">{order.userName}</p>
                        <p className="text-gray-600 text-sm">
                            {order.address}
                        </p>
                        <p className="text-gray-600 text-sm">
                            {order.userContact}
                        </p>
                    </div>

                    {/* Product Table */}
                    <div className="w-full">

                        <div className="grid grid-cols-4 border-b pb-2 font-semibold text-gray-700">
                            <span>Book</span>
                            <span>Author</span>
                            <span className="text-center">Qty</span>
                            <span className="text-right">Price</span>
                        </div>

                        <div className="grid grid-cols-4 py-3 text-gray-700 text-sm">
                            <span>{order.bookName}</span>
                            <span>{order.author}</span>
                            <span className="text-center">{order.quantity}</span>
                            <span className="text-right">₹ {order.bookPrice}</span>
                        </div>

                    </div>

                    {/* Total */}
                    <div className="border-t pt-4 space-y-2 text-sm">

                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹ {subtotal}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span>₹ {delivery}</span>
                        </div>

                        <div className="flex justify-between text-600">
                            <span>Payment Method </span>
                            <span>{order.paymentType}</span>
                        </div>

                        <div className="flex justify-between font-semibold text-gray-900 text-base border-t pt-2">
                            <span>Total</span>
                            <span>₹ {total}</span>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="text-center text-xs text-gray-500 border-t pt-4">
                        Thank you for shopping with Paper Pulse 📚
                        Every book holds a universe.
                    </div>

                </div>

            </section>
            <Footer_section />
        </>
    )
}

export default Invoice