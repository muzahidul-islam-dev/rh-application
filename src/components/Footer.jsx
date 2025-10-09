import React from 'react'

import Logo from './../assets/logo.png'
import { BsTwitterX } from 'react-icons/bs'
import { TiSocialLinkedin } from 'react-icons/ti'
import { IoMdMail } from 'react-icons/io'
import { FaFacebookF, FaStar } from "react-icons/fa";
function Footer() {
    return (
        <div className=" bg-[#001931] mt-20">
            <div className="max-w-[1440px] gap-5 mx-auto justify-between py-10 px-5 grid md:grid-cols-12 items-center">
                <div className="col-span-3">
                    <div className="flex gap-2 items-center my-5">
                        <img src={Logo} alt="" className='h-10' />
                        <h3 className='uppercase font-bold text-white text-xl'>HERO.IO</h3>
                    </div>
                    <p className="text-[#A1A1AA] font-light text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="col-span-9 grid gap-5 md:grid-cols-4">
                    <div>
                        <h3 className="text-white font-semibold text-lg">Company</h3>
                        <nav className="mt-3">
                            <ul>
                                <li><a href="#" className="font-light text-[#a1a1aa] my-2 inline-block">About Us</a></li>
                                <li><a href="#" className="font-light text-[#a1a1aa] my-2 inline-block">Our Mission</a></li>
                                <li><a href="#" className="font-light text-[#a1a1aa] my-2 inline-block">Contact Saled</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg">Services</h3>
                        <nav className="mt-3">
                            <ul>
                                <li><a href="#" className="font-light text-[#a1a1aa] my-2 inline-block">Products & Services</a></li>
                                <li><a href="#" className="font-light text-[#a1a1aa] my-2 inline-block">Customer Stories</a></li>
                                <li><a href="#" className="font-light text-[#a1a1aa] my-2 inline-block">Download Apps</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg">Information</h3>
                        <nav className="mt-3">
                            <ul>
                                <li><a href="#" className="font-light text-[#a1a1aa] my-2 inline-block">Privacy Policy</a></li>
                                <li><a href="#" className="font-light text-[#a1a1aa] my-2 inline-block">Terms & Conditions</a></li>
                                <li><a href="#" className="font-light text-[#a1a1aa] my-2 inline-block">Join Us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg">Social Links</h3>
                        <nav className="mt-3">
                            <ul className='flex gap-2'>
                                <li><a href="#" className="flex gap-2 font-light text-[#a1a1aa] my-2 items-center"><span className="p-1 bg-white rounded-full text-black"><BsTwitterX /></span></a></li>
                                <li><a href="#" className="flex gap-2 font-light text-[#a1a1aa] my-2 items-center"><span className="p-1 bg-white rounded-full text-black"><TiSocialLinkedin /></span></a></li>
                                <li><a href="#" className="flex gap-2 font-light text-[#a1a1aa] my-2 items-center"><span className="p-1 bg-white rounded-full text-black"><FaFacebookF /></span></a></li>
                                <li><a href="#" className="flex gap-2 font-light text-[#a1a1aa] my-2 items-center"><span className="p-1 bg-white rounded-full text-black"><IoMdMail /></span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="max-w-[1440px] py-5 mx-auto border-t border-gray-700">
                    <p className="text-center text-[#fafafa]">Copyright © 2025 - All right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
