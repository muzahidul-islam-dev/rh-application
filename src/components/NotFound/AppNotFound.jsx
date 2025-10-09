import React from 'react'

import NotFoundBanner from './../../assets/App-Error.png'
import { Link } from 'react-router-dom'
function AppNotFound() {
    return (
        <div className='py-20 max-w-[1440px] mx-auto'>
            <div className="grid justify-center items-center">
                <img src={NotFoundBanner} className='w-4/6 mx-auto' alt="" />
                <h3 className='text-5xl text-center font-semibold my-3 mt-10'>Oops, Apps not found!</h3>
                <p className='text-xl text-[#627382] text-center'>The App you are requesting is not found on our system. please try another apps.</p>
                <Link to={'/'} className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-fit mx-auto text-white py-3 px-10 rounded my-7'>Go Back</Link>
            </div>
        </div>
    )
}

export default AppNotFound
