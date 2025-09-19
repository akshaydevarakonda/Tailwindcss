import React from "react";
const Signin =() =>{
    return (
        <div className="flex items-center flex-col mt-10 gap-5 ">
       <form className="flex flex-col border-1 border-gray-400 w-1/3 py-7 items-center gap-5 mb-5 rounded-2xl">
        <h1 className=" text-2xl font-bold ">Sign In</h1>
        <p className="flex items-center">Access your account</p>
       
        <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Email Address</p>
            <input 
            type="email" placeholder="email" 
            className="border-2 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-700"/>
        </div>
         <div className="w-[90%] flex flex-col gap-2">
            <p>Password</p>
            <input 
            type="password" placeholder="password" 
            className="border-2 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-700"/>
        </div>
         <div className="flex gap-3 ">
            <input 
            type="checkbox" name="" id="" />
            <p className="text-gray-700 font-semibold ">Remember me<span className="text-blue-700 ml-35">Forgot password?</span></p>
        </div>
        <button className="w-[90%] bg-blue-700 py-4 rounded-2xl text-white font-semibold">Sign In</button>
        <p className="text-gray-700 font-semibold">Don't have an account?<span className="text-blue-700">Create one here</span></p>
       </form>
       </div>
    )
}

export default Signin