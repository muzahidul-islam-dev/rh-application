import React from 'react'
import NotFoundBanner from './../../assets/error-404.png'
import { Link } from 'react-router-dom'
function PageNotFound() {
    return (
        <div className='py-20 max-w-[1440px] mx-auto'>
            <div className="grid justify-center items-center">
                <img src={NotFoundBanner} className='w-full' alt="" />
                <h3 className='text-5xl text-center font-semibold my-3 mt-10'>Oops, page not found!</h3>
                <p className='text-xl text-[#627382] text-center'>The page you are looking for is not available.</p>
                <Link to={'/'} className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-fit mx-auto text-white py-3 px-10 rounded my-7'>Go Back</Link>
            </div>
        </div>
    )
}

export default PageNotFound
