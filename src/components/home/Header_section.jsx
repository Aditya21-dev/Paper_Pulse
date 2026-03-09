function Header_section() {
    return (
        <header className="bg-white shadow">

            <nav className="bg-amber-200 flex justify-between items-center px-8 py-4" >

                <h1 className="text-2xl font-bold text-gray-800">
                    Paper Pulse
                </h1>

                <ul className="flex gap-6 text-gray-700">

                    <li className="hover:text-blue-500 ">
                        Home
                    </li>

                    <li className="hover:text-blue-500 ">
                        Book Shelf
                    </li>

                    <li className="hover:text-blue-500 ">
                        About
                    </li>

                    <li className="hover:text-blue-500 ">
                        Contact
                    </li>

                </ul>

                <div className="flex gap-4 text-xl">

                    <span>🩷</span>

                    <span>🛒</span>

                    <span>👤</span>

                </div>

            </nav>

        </header>
    )
}

export default Header_section