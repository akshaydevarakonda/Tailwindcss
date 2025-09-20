import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { CircleUser, FlaskRound, Fullscreen } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Mail } from 'lucide-react';
import { User } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';

import { ChevronLeft } from 'lucide-react';
import { useState } from "react";

const Signup = () => {
    const [formData, setformData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [showpassword, setshowpassword] = useState(false);
    const [showconfirmpassword, setshowconfirmpassword] = useState(false);
    const [error, seterror] = useState('')
    const [success, setsuccess] = useState('')
    const [errors,seterrors]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""

    })
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors={}
        if(!formData.fullName){
            newErrors.fullName="please enter your full name"
        }
           if(!formData.email){
            newErrors.email="please enter your email"
        }
           if(!formData.password){
            newErrors.password="please enter your password"
        }
           if(!formData.confirmPassword){
            newErrors.confirmPassword="please enter your confirmpassword"
        }
        else if(formData.password !== formData.confirmPassword ){
             newErrors.confirmPassword="your password did not match"
        }

        if(Object.keys(newErrors).length>0)
        {
            seterrors(newErrors)
        }else{
             setsuccess("your account created successfully")
            seterror("")
            seterror("")
            setformData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""})
        }
        // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        //     seterror("please fill all the fields")
        // } else if (formData.password !== formData.confirmPassword) {
        //     seterror("your password not matched")
        // }
        // else {
        //     setsuccess("your account created successfully")
        //     seterror("")
        //     seterror("")
        //     setformData({
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""

        //     })
        // }
    }
    const handlePassword = () => {
        setshowpassword((password) => !password)
    }
    const handleconfirmPassword = () => {
        setshowconfirmpassword((password) => !password)
    }
    const handleChange = (event) => {

        setformData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
          seterrors((errors) => ({
            ...errors,
            [event.target.name]: ""
        }))
    }

    return (

        <div className="flex items-center flex-col  gap-5 ">
            <NavBar />
            <h1 className="text-2xl text-blue-600 font-bold">Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold">Create your account and start your blogging journey<br></br> today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-2 border-gray-400 w-1/3 py-7 items-center gap-5 mb-5 rounded-2xl shadow-2xl">
                <div className="w-[90%] flex flex-col gap-2" >
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <div className="relative">
                        <input
                            value={formData.fullName}
                            onChange={handleChange}
                            name="fullName"
                            type="text" placeholder="Enter your Full Name"
                            className="border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-600 pl-10" />
                        <User className="absolute top-4 left-3 text-gray-500" />
                    </div>
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <div className="relative">
                        <p className="text-md text-gray-700 font-semibold">Email</p>
                        <input

                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                            type="email" placeholder="Enter your Emial"
                            className="border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500 pl-10" />
                        <Mail className="absolute top-10 left-3 text-gray-500" />
                    </div>
                      {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">

                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <div className="relative">

                        <input

                            value={formData.password}
                            onChange={handleChange}
                            name="password"
                            type={showpassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500 pl-10" />
                        <LockKeyhole className="absolute top-4 left-3 text-gray-500" />
                        <p onClick={handlePassword}>{showpassword ? <Eye className="absolute right-3 top-4.5 text-gray-500 " /> : <EyeOff className="absolute right-3 top-4.5 text-gray-500 " />}</p>
                    </div>
                      {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <div className="relative">
                        <input

                            value={formData.confirmPassword}
                            name="confirmPassword"
                            onChange={handleChange}
                            type={showconfirmpassword ? "text" : "password"}
                            placeholder="confirm your password"
                            className="border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500 pl-10" />
                        <LockKeyhole className="absolute top-4 left-3 text-gray-500" />
                        <p onClick={handleconfirmPassword}>{showconfirmpassword ? <Eye className="absolute right-3 top-4.5 text-gray-500 " /> : <EyeOff className="absolute right-3 top-4.5 text-gray-500 " />}</p>
                    </div>
                      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                </div>
                <div className="flex gap-5 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center ">
                    <input
                        type="checkbox" name="" id="" />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}

                <button type="submit" className="bg-purple-500 w-[90%] py-4 rounded-2xl text-white font-semibold gap-3 flex items-center justify-center cursor-pointer "> <CircleUser /><p>Create Account</p></button>
                <div className="border-1 border-gray-400 w-[90%] mt-4"></div>
                <p className="text-gray-700 font-semibold">Already have an account?<Link to="/signin" className="text-purple-500">Sign In here</Link></p>
                <button className="text-gray-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer flex items-center justify-center">  <ChevronLeft /><p>Back to Home </p></button>

            </form>
        </div>
    )
}

export default Signup