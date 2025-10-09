import React from 'react'

import Logo from './../assets/logo.png'
import GitHubIcon from './../assets/github.png'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <header className='py-5 bg-white'>
            <div className="max-w-[1425px] mx-auto px-5">
                <div className="flex justify-between items-center">
                    <Link to={'/'} className="flex gap-2 items-center">
                        <img src={Logo} alt="" className='h-8' />
                        <h3 className='uppercase font-bold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h3>
                    </Link>
                    <nav>
                        <ul className='flex gap-5'>
                            <li><NavLink to={'/'} className={({isActive}) => `${isActive && 'active'} font-semibold`} href="#">Home</NavLink></li>
                            <li><NavLink to={'/apps'} className={({isActive}) => `${isActive ? 'active' : ''} bg-gradient-to-r hover:from-[#632EE3]  hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover:border-[#9F62F2] font-semibold`} href="#">Apps</NavLink></li>
                            <li><NavLink to={'/installed'} className={({isActive}) => `${isActive ? 'active' : ''} bg-gradient-to-r hover:from-[#632EE3]  hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover:border-[#9F62F2] font-semibold`} href="#">Installation</NavLink></li>
                        </ul>
                    </nav>
                    <button className='bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] rounded py-2 px-4 text-white text-sm flex gap-2'><img src={GitHubIcon} alt="" />Contribute</button>
                </div>
            </div>
        </header>
    )
}

export default Header
