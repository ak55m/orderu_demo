import React, { useState } from 'react'
import { BiHide } from 'react-icons/bi'
import { DiVim } from 'react-icons/di'
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const [partnerLinksOpen, setPartnerLinksOpen] = useState(false)
    const [companyLinksOpen, setCompanyLinksOpen] = useState(false)
    const [productsLinksOpen, setProductsLinksOpen] = useState(false)
    const [usefulLinksOpen, setUsefulLinksOpen] = useState(false)
    const [followUsLinksOpen, setFollowUsLinksOpen] = useState(false)
    return (
        <div className='bg-black text-white px-3 md:px-0 pt-10 md:pt-28 pb-10'>
            {/* Desktop Footer */}
            <div className='w-full hidden md:!flex items-center justify-center'>
                <div className={'md:w-[95%] md:!grid md:grid-cols-4 gap-y-10 xl:grid-cols-6 gap-3'}>
                    {/* Column 1 */}
                    <div>
                        <h1 className='text-2xl font-bold'>orderU</h1>
                    </div>
                </div>
            </div>
            <div className='hidden md:!flex items-center justify-center'>
                <div className={'flex md:w-[95%] md:flex-col gap-2 xl:flex-row items-center xl:justify-between pt-10' }>
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center gap-2.5'>
                            <FaGlobeAmericas size={12} className='text-gray-200 border-b border-b-transparent' />
                            <Link className='text-sm border-b border-b-transparent hover:border-b-white'>English</Link>
                        </div>
                        <div className='flex items-center gap-2.5'>
                            <BiHide size={12} className='text-gray-200 border-b border-b-transparent' />
                            <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Accessibility</Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-6'>
                        <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Accessibility Statement</Link>
                        <Link className='text-sm border-b border-b-transparent hover:border-b-white'>User Terms of Service</Link>
                        <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Privacy Statement</Link>
                        <h1 className='flex items-center gap-2 text-gray-400'>
                            <span>&copy;</span>
                            orderU 2024
                        </h1>
                    </div>
                </div>
            </div>
            {/* Mobile Footer */}
            <div className='md:hidden'>
                <div className='pb-10 px-2'>
                    <h1 className='text-2xl font-bold font-sans'>orderU</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    {/* Partner */}
                    <div
                        className={` w-full relative ${!partnerLinksOpen &&
                            "hover:border-b-0 h-max"
                            }`}
                    >
                        <div
                            onClick={() => setPartnerLinksOpen(!partnerLinksOpen)}
                            className="flex items-center w-full hover:bg-white/20 py-2 px-2 rounded-md cursor-pointer justify-between"
                        >
                            <h1>Partner with Name</h1>
                            <span
                                className={
                                    partnerLinksOpen
                                        ? "transition-all duration-300 rotate-180"
                                        : "rotate-0 transition-all duration-300"
                                }
                            >
                                <MdKeyboardArrowDown size={22} />
                            </span>
                        </div>
                        <div className={`collapsible-content ${partnerLinksOpen ? 'open' : ''}`}>
                            <div className="w-full left-3 pr-7">
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>For Couriers</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>For merchants</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>For affiliates</Link>
                            </div>
                        </div>
                    </div>
                    {/* Company */}
                    <div
                        className={`w-full relative ${!companyLinksOpen &&
                            "hover:border-b-0 h-max"
                            }`}
                    >
                        <div
                            onClick={() => setCompanyLinksOpen(!companyLinksOpen)}
                            className="flex items-center w-full hover:bg-white/20 py-2 px-2 rounded-md cursor-pointer justify-between"
                        >
                            <h1>Company</h1>
                            <span
                                className={
                                    companyLinksOpen
                                        ? "transition-all duration-300 rotate-180"
                                        : "rotate-0 transition-all duration-300"
                                }
                            >
                                <MdKeyboardArrowDown size={22} />
                            </span>
                        </div>
                        <div className={`collapsible-content ${companyLinksOpen ? 'open' : ''}`}>
                            <div className="w-full left-3 pr-7">
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>About Us</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>What we stand for</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Jobs</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Sustainabilitiy</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Security</Link>
                            </div>
                        </div>
                    </div>
                    {/* Products */}
                    <div
                        className={`w-full relative ${!productsLinksOpen &&
                            "hover:border-b-0 h-max"
                            }`}
                    >
                        <div
                            onClick={() => setProductsLinksOpen(!productsLinksOpen)}
                            className="flex items-center w-full hover:bg-white/20 py-2 px-2 rounded-md cursor-pointer justify-between"
                        >
                            <h1>Products</h1>
                            <span
                                className={
                                    productsLinksOpen
                                        ? "transition-all duration-300 rotate-180"
                                        : "rotate-0 transition-all duration-300"
                                }
                            >
                                <MdKeyboardArrowDown size={22} />
                            </span>
                        </div>
                    </div>
                    {/*  Useful Links */}
                    <div
                        className={`w-full relative ${!usefulLinksOpen &&
                            "hover:border-b-0 h-max"
                            }`}
                    >
                        <div
                            onClick={() => setUsefulLinksOpen(!usefulLinksOpen)}
                            className="flex items-center w-full hover:bg-white/20 py-2 px-2 rounded-md cursor-pointer justify-between"
                        >
                            <h1>Useful Links</h1>
                            <span
                                className={
                                    usefulLinksOpen
                                        ? "transition-all duration-300 rotate-180"
                                        : "rotate-0 transition-all duration-300"
                                }
                            >
                                <MdKeyboardArrowDown size={22} />
                            </span>
                        </div>
                        <div className={`collapsible-content ${usefulLinksOpen ? 'open' : ''}`}>

                            <div className="w-full left-3 pr-7">
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Support</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Media</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Contact</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Speak Up</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Promo Codes</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Developers</Link>
                            </div>
                        </div>
                    </div>
                    {/*  Follow Us */}
                    <div
                        className={`w-full relative ${!followUsLinksOpen &&
                            "hover:border-b-0 h-max"
                            }`}
                    >
                        <div
                            onClick={() => setFollowUsLinksOpen(!followUsLinksOpen)}
                            className="flex items-center w-full hover:bg-white/20 py-2 px-2 rounded-md cursor-pointer justify-between"
                        >
                            <h1>Follow Us</h1>
                            <span
                                className={
                                    followUsLinksOpen
                                        ? "transition-all duration-300 rotate-180"
                                        : "rotate-0 transition-all duration-300"
                                }
                            >
                                <MdKeyboardArrowDown size={22} />
                            </span>
                        </div>
                        <div className={`collapsible-content ${followUsLinksOpen ? 'open' : ''}`}>
                            <div className="w-full left-3 pr-7">
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Blog</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Engineering Blog</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Instagram</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>X</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Linkedin</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Name life</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Links */}
                <div className='grid grid-cols-3 sm:grid-cols-4 pt-5 gap-y-4 gap-x-5'>
                    <Link className='text-xs border-b border-b-transparent hover:border-b-white'>Accessibility Statement</Link>
                    <Link className='text-xs border-b border-b-transparent hover:border-b-white'>User Terms of Service</Link>
                    <Link className='text-xs border-b border-b-transparent hover:border-b-white'>Privacy Statement</Link>
                    <h1 className='flex items-center gap-2 text-gray-400 text-xs'>
                        <span>&copy;</span>
                        orderU 2025
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
