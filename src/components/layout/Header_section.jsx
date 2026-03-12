import { Link } from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

function Header_section() {
  return (
    <header className="bg-[#E7D48A] shadow-md">

      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide cursor-pointer">
          Paper Pulse
        </h1>

        {/* Navigation */}
        <ul className="flex gap-8 text-gray-800 font-medium">

          <li className="cursor-pointer hover:text-white transition">
            <Link to="/">Home</Link>
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Book Shelf
          </li>

          <li className="cursor-pointer hover:text-white transition">
            <Link to="/about">About</Link>
          </li>
          

          <li className="cursor-pointer hover:text-white transition">
            Contact
          </li>

        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-800">

          <span className="cursor-pointer hover:text-red-500 transition">
            <FaHeart />
          </span>

          <span className="cursor-pointer hover:text-blue-500 transition">
            <FaCartArrowDown />
          </span>

          <span className="cursor-pointer hover:text-black transition">
            <FaCircleUser />
          </span>

        </div>

      </nav>

    </header>
  )
}

export default Header_section

