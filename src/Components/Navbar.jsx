import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Navbar = () =>
{
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () =>
    {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home', href: '/' },
        { id: 2, text: 'About', href: '/about' },
        { id: 3, text: 'Services', href: '/services' },
        { id: 4, text: 'Book a section', href: '/Booking' },
    ];

    return (
        <div className='fixed text-lime-100 -tracking-normal top-0 w-full bg-grey flex justify-between items-center h-24 max-w-[1240px] mx-auto px-1 '>
            {/* Logo */}
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Coach.M</h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <Link to={item.href} key={item.id} className='px-7 hover:bg-[#00df9a]  shadow-inner rounded-lg m-2 cursor-pointer duration-300 hover:text-black *:'>{item.text}</Link>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Coach.M</h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-1 border-b rounded-sm hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                    >
                        {/* // TODO: add links in the navbar */}
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;

