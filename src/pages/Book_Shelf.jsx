import Header_section from "../components/layout/Header_section"
import Footer_section from "../components/layout/Footer_section"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"


function Book_Shelf() {

    const navigate = useNavigate()

    function openBook(book) {
        navigate("/Book_details_booking", { state: book })
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
                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                                onClick={() => openBook({
                                    name: "A Little Life",
                                    author: "Hanya Yanagihara",
                                    price: 399,
                                    img: "https://0.academia-photos.com/attachment_thumbnails/68671076/mini_magick20210809-16352-yaw46b.png?1628525534"
                                })}>
                                <img
                                    src="https://0.academia-photos.com/attachment_thumbnails/68671076/mini_magick20210809-16352-yaw46b.png?1628525534"
                                    alt="Book"
                                    className="h-56 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">A Little Life </h3>
                                    <p className="text-sm text-gray-600">by Hanya Yanagihara</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹399</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                                onClick={() => openBook({
                                    name: " चरित्रहीन ",
                                    author: " शरदचंद्र चट्टोपाध्याय ",
                                    price: 499,
                                    img: "https://m.media-amazon.com/images/I/91CzA-rAtEL._UF1000,1000_QL80_.jpg"
                                })}>
                                <img
                                    src="https://m.media-amazon.com/images/I/91CzA-rAtEL._UF1000,1000_QL80_.jpg"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">चरित्रहीन </h3>
                                    <p className="text-sm text-gray-600">by शरदचंद्र चट्टोपाध्याय </p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹499</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                                onClick={() => openBook({
                                    name: " Never Let Me Go ",
                                    author: " Kazuo Ishiguro ",
                                    price: 299,
                                    img: "https://0.https://m.media-amazon.com/images/I/71DgZ3LElXL._AC_UF1000,1000_QL80_.jpg"
                                })}>
                                <img
                                    src="https://m.media-amazon.com/images/I/71DgZ3LElXL._AC_UF1000,1000_QL80_.jpg"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold"> Never Let Me Go </h3>
                                    <p className="text-sm text-gray-600">by Kazuo Ishiguro</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹299</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                                onClick={() => openBook({
                                    name: " The Book Thief ",
                                    author: " Markus Zusak ",
                                    price: 350,
                                    img: "https://cdn.penguin.co.in/wp-content/uploads/2023/06/9781909531611.jpg"
                                })}>
                                <img
                                    src="https://cdn.penguin.co.in/wp-content/uploads/2023/06/9781909531611.jpg"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold"> The Book Thief </h3>
                                    <p className="text-sm text-gray-600"> by Markus Zusak </p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹350</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                                onClick={() => openBook({
                                    name: " Of Mice and Men ",
                                    author: " John Steinbeck ",
                                    price: 420,
                                    img: "https://m.media-amazon.com/images/I/51MIjeQtWAL._UF1000,1000_QL80_.jpg"
                                })}>
                                <img
                                    src="https://m.media-amazon.com/images/I/51MIjeQtWAL._UF1000,1000_QL80_.jpg"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Of Mice and Men</h3>
                                    <p className="text-sm text-gray-600">by John Steinbeck</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold">₹420</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                                onClick={() => openBook({
                                    name: " गुनाहों का देवता ",
                                    author: " धर्मवीर भारती ",
                                    price: 380,
                                    img: "https://www.motilalbanarsidass.com/cdn/shop/files/Gunahon_Ka_Devta_Hindi_by_Dharmveer_Bharati.jpg?v=1747831656"
                                })}>
                                <img
                                    src="https://www.motilalbanarsidass.com/cdn/shop/files/Gunahon_Ka_Devta_Hindi_by_Dharmveer_Bharati.jpg?v=1747831656"
                                    alt="Book"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold"> गुनाहों का देवता </h3>
                                    <p className="text-sm text-gray-600"> by धर्मवीर भारती </p>
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