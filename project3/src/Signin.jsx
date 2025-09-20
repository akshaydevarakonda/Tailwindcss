import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { LockKeyhole } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';


const Signin =() =>{
    const [password,setpassword]=useState(false)
    const handlePassword=()=>{
        setpassword((password)=>!password)
    }
    return (
        <div className="flex items-center flex-col  gap-5 ">
            <NavBar/>
       <form className="flex flex-col border-2 border-gray-400 w-1/3 py-7 items-center gap-5 mb-5 rounded-2xl shadow-2xl mt-16">
        <h1 className=" text-2xl font-bold ">Sign In</h1>
        <p className="flex items-center">Access your account</p>
       
        <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Email Address</p>
        <div className="relative">
                <input 
            type="email" placeholder="email" 
            className="border-2 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-700 pl-10" />
            <Mail className="absolute top-4.5 left-3 text-gray-500"/>
        </div>
        </div>
         <div className="w-[90%] flex flex-col gap-2">
            <p>Password</p>
            <div className="relative">
                <input 
            type={password?"text":"password"} 
            placeholder="password" 
            className="border-2 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-700 pl-10"/>
            <LockKeyhole className="absolute top-4.5 left-3 text-gray-500"/>
               <p onClick={handlePassword}>{password ? <Eye className="absolute right-3 top-4.5 text-gray-500 "/>:  <EyeOff className="absolute right-3 top-4.5 text-gray-500 "/>}</p>  
            </div>
        </div>
         <div className="flex gap-3 ">
            <input 
            type="checkbox" name="" id="" />
            <p className="text-gray-700 font-semibold ">Remember me<span className="text-blue-700 ml-35">Forgot password?</span></p>
        </div>
        <button className="w-[90%] bg-blue-700 py-4 rounded-2xl text-white font-semibold">Sign In</button>
        <p  className="text-gray-700 font-semibold">Don't have an account?<Link to="/signup" className="text-blue-700">Create one here</Link></p>
       </form>
       </div>
    )
}

export default Signin