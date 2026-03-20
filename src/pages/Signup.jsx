import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
    let [signfrm, setsignfrm] = useState({
        name: "", age: "", email: "", password: "", conform_password: ""
    })

    let navigator = useNavigate()

    function inputdata(e) {
        const { name, value } = e.target
        setsignfrm({ ...signfrm, [name]: value })

    }

    function handledata(e) {
        e.preventDefault()

        let password = signfrm.password

        // 2. Length check
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        }

        // 3. Number check
        let hasNumber = false
        for (let i = 0; i < password.length; i++) {
            if (password[i] >= '0' && password[i] <= '9') {
                hasNumber = true
            }
        }

        if (!hasNumber) {
            toast.error("Password must contain at least one number")
            return
        }

        // 4. Special character check
        let hasSpecial = false
        let specialChars = "!@#$%^&*"

        for (let i = 0; i < password.length; i++) {
            for (let j = 0; j < specialChars.length; j++) {

                if (password[i] === specialChars[j]) {
                    hasSpecial = true
                }

            }
        }
        if (!hasSpecial) {
            toast.error("Password must contain at least one special character")
            return
        }

        // 1. Password match check
        if (password !== signfrm.conform_password) {
            toast.error("Passwords do not match")
            return
        }

        // ✅ Save data
        localStorage.setItem("userdata", JSON.stringify(signfrm))
        navigator('/Login')

        console.log(localStorage.getItem("userdata"))
    }


    return (
        <section className="min-h-screen bg-[#F5E7A3] flex items-center justify-center">

            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Create Account
                </h1>

                <form className="flex flex-col gap-4" onSubmit={handledata} >

                    <input type="text" name="name" placeholder="Full Name" required className="border p-3 rounded" onChange={inputdata} />
                    <input type="email" name="email" placeholder="Email Address" required className="border p-3 rounded" onChange={inputdata} />
                    <input type="tel" name="Phone_number" placeholder="Phone number" required className="border p-3 rounded" onChange={inputdata} />
                    <input type="Password" name="password" placeholder="Password" required className="border p-3 rounded" onChange={inputdata} />
                    <input type="Password" name="conform_password" placeholder="Conform Password" required className="border p-3 rounded" onChange={inputdata} />
                    <button type="submit" className="bg-black text-white py-3 rounded hover:bg-gray-800"> Sign Up </button>

                </form>

                <p className="text-center text-sm mt-4"> Already have an account? Login </p>

            </div>

        </section>
    )
}

export default Signup




