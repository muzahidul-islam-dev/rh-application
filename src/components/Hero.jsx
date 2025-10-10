import React from 'react'

import PlayStore from './../assets/playstore.png'
import AppStore from './../assets/appstore.png'
import HeroIcon from './../assets/hero.png'
function Hero() {
    return (
        <section className='pt-5'>
            <div className="max-w-[1440px] mx-auto px-5 mt-20">
                <h3 className='text-5xl lg:text-7xl text-center font-extrabold'>We Build</h3>
                <h3 className='text-5xl lg:text-7xl text-center font-extrabold'> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h3>
                <p className='text-[#627382] font-light text-center my-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex gap-4 justify-center">
                    <a target='_blank' href="https://play.google.com/store/apps?hl=en">
                        <img src={PlayStore} alt="" />
                    </a>
                    <a target='_blank' href="https://www.apple.com/app-store/">
                        <img src={AppStore} alt="" />
                    </a>
                </div>
                <div className="flex justify-center mt-10">
                    <img src={HeroIcon} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero
