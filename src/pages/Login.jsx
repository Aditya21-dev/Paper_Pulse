import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

function LoginPage() {

    let [logindata, setlogindata] = useState({
        email: "", password: ""
    })

    function inputdata(e) {
        let { name, value } = e.target
        setlogindata({ ...logindata, [name]: value })
    }

    let navigate = useNavigate()
    function loginsubmit(e) {
        e.preventDefault()
        let local_data = JSON.parse(localStorage.getItem("userdata"))
        if (logindata.email !== local_data.email || logindata.password !== local_data.password) {
            toast.error("Something Went Wrong")
        }
        else {
            toast.success("welcome to Paper Pulse 📚")
            localStorage.setItem("isLogin", "true")
            navigate("/")
        }
    }
    return (
        <section className="min-h-screen bg-[#F5E7A3] flex items-center justify-center">

            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Login to Paper Pulse
                </h1>

                <form className="flex flex-col gap-4" onSubmit={loginsubmit} >

                    <input type="email" name="email" placeholder="Email Address" className="border p-3 rounded" onChange={inputdata} />

                    <input type="password" name="password" placeholder="Password" className="border p-3 rounded" onChange={inputdata} />

                    <button type="submit" className="bg-black text-white py-3 rounded hover:bg-gray-800" > Login </button>

                </form>

                <div className="text-center text-sm mt-4">

                    <p className="mb-2 cursor-pointer hover:underline"> Forgot Password? </p>

                    <p>
                        Don't have an account?
                        <span className="ml-1 text-blue-600 cursor-pointer hover:underline">
                            Sign Up
                        </span>
                    </p>

                </div>

            </div>

        </section>
    )
}

export default LoginPage