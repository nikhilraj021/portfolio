import Image from 'next/image'
import React from 'react'
import {assets} from '../../../assets/assets.js'

const Navbar = () => {
    return (
        <>
            <div className='fixed top-0right-0 w-11/12 -z-10 translate-y-[-80%] '>
                <Image src={assets.header_bg_color} alt='bg-color-image' className='w-full' />
            </div>
            <nav className='w-full fixed flex justify-between items-center px-5 lg:px-8 xl:px-[8%] py-4 z-50 '>
                <a href="#top">
                    <h1>Nikhilraj</h1>
                </a>

                <ul className='hidden font-ovo md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 shadow-sm'>
                    <li className=''>
                        <a href="#top">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#work">My Work</a>
                    </li>

                </ul>

                <div>
                    <a href="#contact" className='hidden md:block px-10 py-2.5 border border-gray-500 rounded-full '>Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar