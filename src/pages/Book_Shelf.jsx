import Header_section from "../components/layout/Header_section"
import Footer_section from "../components/layout/Footer_section"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"


function Book_Shelf() {

    const navigate = useNavigate()

    function openBook() {
        navigate("/Book_details_booking")
    }
    return (
        <>

            <Header_section />

            <section className="min-h-screen bg-[#F5E7A3] py-12">
                <div className="max-w-7xl mx-auto px-6 flex gap-10">

                    {/* Sidebar Filter */}
                    <aside className="w-64 bg-white p-6 rounded-lg shadow-md h-fit">
                        <h2 className="text-2xl font-bold mb-6">Filter Books</h2>

                        {/* Category */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Category</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li><input type="checkbox" className="mr-2" /> Fiction</li>
                                <li><input type="checkbox" className="mr-2" /> Mystery</li>
                                <li><input type="checkbox" className="mr-2" /> Fantasy</li>
                                <li><input type="checkbox" className="mr-2" /> Romance</li>
                                <li><input type="checkbox" className="mr-2" /> Self Help</li>
                            </ul>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Price</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li><input type="radio" name="price" className="mr-2" /> Under ₹200</li>
                                <li><input type="radio" name="price" className="mr-2" /> ₹200 - ₹500</li>
                                <li><input type="radio" name="price" className="mr-2" /> ₹500+</li>
                            </ul>
                        </div>

                        {/* Rating */}
                        <div>
                            <h3 className="font-semibold mb-3">Rating</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>⭐⭐⭐⭐⭐</li>
                                <li>⭐⭐⭐⭐</li>
                                <li>⭐⭐⭐</li>
                            </ul>
                        </div>
                    </aside>

                    {/* Books Section */}
                    <div className="flex-1">

                        <h1 className="text-4xl font-bold mb-10">
                            Explore Our Book Shelf
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >

                            {/* Book Card */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition" onClick={openBook} >
                                <img
                                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                                    alt="Book"
                                    className="h-56 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">The Silent Library</h3>
                                    <p className="text-sm text-gray-600">by Emma Clarke</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹399</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition" onClick={openBook}>
                                <img
                                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Dream Beyond Stars</h3>
                                    <p className="text-sm text-gray-600">by Olivia Hart</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹499</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition" onClick={openBook}>
                                <img
                                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Mystery of Old Town</h3>
                                    <p className="text-sm text-gray-600">by Daniel Reed</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹299</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition" onClick={openBook}>
                                <img
                                    src="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">The Hidden Path</h3>
                                    <p className="text-sm text-gray-600">by Sophia Lane</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹350</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition" onClick={openBook}>
                                <img
                                    src="https://images.unsplash.com/photo-1528207776546-365bb710ee93"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Echoes of Time</h3>
                                    <p className="text-sm text-gray-600">by Noah Carter</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹420</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition" onClick={openBook}>
                                <img
                                    src="https://images.unsplash.com/photo-1535909339361-9b15c0c1b40c"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Whispers in Pages</h3>
                                    <p className="text-sm text-gray-600">by Liam Brooks</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹380</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <Footer_section />
        </>
    )
}

export default Book_Shelf