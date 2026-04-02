import { Link, useNavigate } from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa6";

function Header_section() {

  const navigate = useNavigate()

  const isLogin = localStorage.getItem("isLogin")
  const user = JSON.parse(localStorage.getItem("userdata"))

  const logout = () => {
    localStorage.removeItem("isLogin")
    navigate("/")
  }

  return (
    <header className="bg-[#E7D48A] shadow-md">

      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">


        <h1 className="text-2xl font-bold text-gray-800 tracking-wide cursor-pointer">
          Paper Pulse
        </h1>

        <ul className="flex gap-8 text-gray-800 font-medium">

          <li className="cursor-pointer hover:text-white transition">
            <Link to="/">Home</Link>
          </li>

          <li className="cursor-pointer hover:text-white transition">
            <Link to="/Book_Shelf">Book Shelf</Link>
          </li>

          <li className="cursor-pointer hover:text-white transition">
            <Link to="/about">About</Link>
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Contact
          </li>

        </ul>

        <div className="flex items-center gap-6 text-xl text-gray-800">

          <span className="cursor-pointer hover:text-blue-500 transition">
            <Link to="/Cart"><FaCartArrowDown /></Link>
          </span>

          {
            isLogin ? (
              <div className="flex items-center gap-3 text-sm">

                <span>{user.name}</span>

                <button
                  onClick={logout}
                  className="bg-black text-white px-3 py-1 rounded text-xs">
                  Logout
                </button>

              </div>
            ) : (
              <Link to="/Signup">
                <button className="bg-black text-white px-3 py-1 rounded text-sm">
                  Signup
                </button>
              </Link>
            )
          }

        </div>

      </nav>

    </header>
  )
}

export default Header_section