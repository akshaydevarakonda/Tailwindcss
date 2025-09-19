import React from "react";

const Signup = () => {
    return (
        <div className="flex items-center flex-col mt-10 gap-5">
            <h1 className="text-2xl text-blue-600 font-bold">Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold">Create your account and start your blogging journey<br></br> today</p>
            <form className="flex flex-col border-1 border-gray-400 w-1/3 py-7 items-center gap-5 mb-5 rounded-2xl ">
                <div className="w-[90%] flex flex-col gap-2" >
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input
                        type="text" placeholder="Enter your Full Name"
                        className="border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input
                        type="email" placeholder="Enter your Emial"
                        className="border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input
                        type="passowrd" placeholder="Enter your Password"
                         className="border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <input
                        type="password" placeholder="confirm your password" 
                        className="border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex gap-5 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center ">
                    <input
                        type="checkbox" name="" id="" />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                <button className="bg-purple-500 w-[90%] py-4 rounded-2xl text-white font-semibold">Create Account</button>
                <div className="border-[0.5px] border-gray-400 e-[90%] mt-4"></div>
                <p className="text-gray-700 font-semibold">Already have an account?<span className="text-purple-500">Sign In here</span></p>
                <button className="text-gray-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer">Back to Home </button>

            </form>
        </div>
    )
}

export default Signup