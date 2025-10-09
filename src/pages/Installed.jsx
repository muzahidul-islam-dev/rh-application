import { Download } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { TiArrowSortedDown } from "react-icons/ti";
import { toast } from 'react-toastify';

function Installed() {
    const [installed, setInstalled] = useState([]);
    useEffect(() => {
        const localData = localStorage.getItem('installed')
        const result = JSON.parse(localData)
        setInstalled(result);
    }, [])
    const handleUnistall = (itemId) => {
        const localData = JSON.parse(localStorage.getItem('installed'))
        const updateData = localData?.filter((item) => item?.id != itemId)
        localStorage.setItem('installed', JSON.stringify(updateData))
        setInstalled(updateData)
        toast.success('Unistall Successfully')
    }
    return (
        <div>
            <div className="max-w-[1440px] mx-auto my-32">
                <h3 className='text-center font-bold text-5xl'>Your Installed Apps</h3>
                <p className='text-xl text-[#627382] text-center my-5'>Explore All Trending Apps on the Market developed by us</p>
                <div className="flex justify-between">
                    <h3 className='text-2xl text-[#001931] font-semibold'>1 Apps Found</h3>
                    <div className="relative">
                        <TiArrowSortedDown className='absolute top-0 bottom-0 right-2 m-auto text-gray-700 text-2xl' />
                        <select name="" className='appearance-none border border-gray-300 py-2 px-4 pr-8 rounded focus:outline-0' id="">
                            <option value="heigh">Sort By Size</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>
                <div className="grid my-5">
                    {
                        installed?.map((singleItem, index) => (
                            <div key={index} className='bg-white rounded py-3 px-3 grid grid-cols-12 gap-5 my-3 items-center'>
                                <div className='col-span-1'>
                                    <img src={singleItem?.image} className='rounded w-full' alt="" />
                                </div>
                                <div className="col-span-11 flex justify-between items-center">
                                    <div>
                                        <h3 className='text-[#001931] text-xl font-medium'>Forest: Focus for Productivity</h3>
                                        <div className="flex gap-3">
                                            <div className="flex justify-between gap-5 mt-3 mb-1">
                                                <div className='p-1 px-2 flex gap-1 items-center text-[#00D390] rounded font-medium'>
                                                    <Download className='h-[16px] w-[16px]' /> <span>{singleItem?.downloads}M</span>
                                                </div>
                                                <div className='p-1 px-2 flex gap-1 items-center text-[#FF8811] rounded font-medium'>
                                                    <FaStar className='h-[16px] w-[16px] text-[#FF8811]' /> <span>{singleItem?.ratingAvg}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='text-white bg-[#00D390] py-3 px-7 rounded cursor-pointer' onClick={() => handleUnistall(singleItem?.id)}>Unistall</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Installed
