import React from 'react'

function Trust() {
    return (
        <section className='bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] py-20'>
            <div className="max-w-[1425px] mx-auto px-5">
                <h3 className='text-5xl text-white font-bold text-center'>Trusted by Millions, Built for You</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-18">
                    <div className='text-center'>
                        <span className='text-white font-extralight'>Total Downloads</span>
                        <h3 className='font-extrabold text-white text-7xl my-3'>29.6M</h3>
                        <span className='text-white font-extralight'>21% more than last month</span>
                    </div>
                    <div className='text-center'>
                        <span className='text-white font-extralight'>Total Reviews</span>
                        <h3 className='font-extrabold text-white text-7xl my-3'>906K</h3>
                        <span className='text-white font-extralight'>46% more than last month</span>
                    </div>
                    <div className='text-center'>
                        <span className='text-white font-extralight'>Active Apps</span>
                        <h3 className='font-extrabold text-white text-7xl my-3'>132+</h3>
                        <span className='text-white font-extralight'>31 more will Launch</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trust
