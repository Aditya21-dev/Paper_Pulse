import Header_section from "../components/layout/Header_section"
import Footer_section from "../components/layout/Footer_section"

function Invoice() {
    return (
        <>
            <Header_section />
            <section className="bg-[#F5E7A3] min-h-screen py-10 px-6">

                {/* Container */}
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">

                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-4">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Paper Pulse Invoice
                        </h1>

                        <div className="text-sm text-gray-600 text-right">
                            <p>Invoice ID: #PP1023</p>
                            <p>Date: 18 March 2026</p>
                        </div>
                    </div>


                    {/* Customer Details */}
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-2">
                            Billed To:
                        </h2>

                        <p className="text-gray-700">Aditya Das</p>
                        <p className="text-gray-600 text-sm">
                            48/N-2 Bengoly Colony, Bhopal, MP
                        </p>
                        <p className="text-gray-600 text-sm">
                            8839125240
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

                        {/* Item */}
                        <div className="grid grid-cols-4 py-3 text-gray-700 text-sm">
                            <span>The Silent Library</span>
                            <span>Emma Clarke</span>
                            <span className="text-center">1</span>
                            <span className="text-right">₹399</span>
                        </div>

                    </div>


                    {/* Total */}
                    <div className="border-t pt-4 space-y-2 text-sm">

                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹399</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span>₹20</span>
                        </div>

                        <div className="flex justify-between text-green-600">
                            <span>Discount</span>
                            <span>- ₹50</span>
                        </div>

                        <div className="flex justify-between font-semibold text-gray-900 text-base border-t pt-2">
                            <span>Total</span>
                            <span>₹369</span>
                        </div>

                    </div>


                    {/* Footer Note */}
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