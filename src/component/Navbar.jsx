import { useState } from 'react';
import Container from '../Layout/Container';
import { IoCartOutline } from "react-icons/io5";
import { asset } from '../assets/assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="">
            <Container>
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <div className='mr-2 md:hidden'>
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-orange-500 focus:outline-none focus:bg-orange-500"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    ) : (
                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <div className='flex items-center'>
                                <h1 className="text-black text-[30px] font-bold font-heebo">sneakers</h1>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a href="/" className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium  font-poppins ">Collection</a>
                                        <a href="/about" className="text-gray-400  px-3 py-2 rounded-md text-sm font-medium  font-poppins ">Men</a>
                                        <a href="/services" className="text-gray-400  px-3 py-2 rounded-md text-sm font-medium font-poppins  ">Women</a>
                                        <a href="/contact" className="text-gray-400  px-3 py-2 rounded-md text-sm font-medium font-poppins  ">About</a>
                                        <a href="/contact" className="text-gray-400  px-3 py-2 rounded-md text-sm font-medium font-poppins  ">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center'>
                            <IoCartOutline className='mr-5 text-[25px]' />
                            <img src={asset.person} alt="user-image" className='w-10 h-10 rounded-full' />
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white">Home</a>
                        <a href="/about" className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white">About</a>
                        <a href="/services" className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white">Services</a>
                        <a href="/contact" className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white">Contact</a>
                    </div>
                </div>
                <hr />
            </Container>

        </nav>
    );
};

export default Navbar;
