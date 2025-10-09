import React from 'react'

import DemoApp from './../assets/demo-app (1).webp'
import { Download } from 'lucide-react'
import { FaStar } from "react-icons/fa";
function AppItem({ item }) {
    return (
        <div className='bg-white rounded-lg p-3 shadow-lg'>
            <div className='rounded-lg'>
                <img className='w-full rounded-lg h-60' src={item?.image || DemoApp} alt="" />
            </div>
            <div>
                <h3 className='font-semibold text-[#001931] mt-3 text-[20px]'>{item?.title}</h3>
                <div className="flex justify-between mt-3 mb-1">
                    <div className='bg-[#F1F5E8] p-1 px-2 flex gap-2 items-center text-[#00D390] rounded'>
                        <Download className='h-[16px] w-[16px]' /> <span>{item?.downloads}M</span>
                    </div>
                    <div className='bg-[#FFF0E1] p-1 px-2 flex gap-2 items-center text-[#FF8811] rounded'>
                        <FaStar className='h-[16px] w-[16px] text-[#FF8811]' /> <span>{item?.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppItem
