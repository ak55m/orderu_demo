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
    const location = useLocation()
    return (
        <div className='bg-black text-white px-3 md:px-0 pt-10 md:pt-28 pb-10'>
            {/* Desktop Footer */}
            <div className='w-full hidden md:!flex items-center justify-center'>
                <div className={location.pathname === "/en/discovery" ? ' md:w-[95%] md:!grid md:grid-cols-4 gap-y-10 xl:grid-cols-6 gap-3' : ' md:w-4/5 md:!grid md:grid-cols-4 gap-y-10 xl:grid-cols-6 gap-3'}>
                    {/* Column 1 */}
                    <div>
                        <h1 className='text-2xl font-bold'>LOGO</h1>
                    </div>
                    {/* Column 2 */}
                    <div>
                        <h1 className='text-gray-500'>Partner with Company</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>For countries</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>For merchants</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>For affiliates</Link>
                        </div>
                    </div>
                    {/* Column 3 */}
                    <div>
                        <h1 className='text-gray-500'>Company</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>About us</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>What we stand for</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Jobs</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Sustainability</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Security</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Investors</Link>
                        </div>
                    </div>
                    {/* Column 4 */}
                    <div>
                        <h1 className='text-gray-500'>Products</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name Drive</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name Market</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name+</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name for Work</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name Ads</Link>
                        </div>
                    </div>
                    {/* Column 5 */}
                    <div>
                        <h1 className='text-gray-500'>Useful Links</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Support</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Media</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Contact</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Speak Up</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Promo Code</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Developers</Link>
                        </div>
                    </div>
                    {/* Column 6 */}
                    <div>
                        <h1 className='text-gray-500'>Follow Us</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Blog</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Engineering Blog</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Instagram</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Facebook</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>X</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Linkedin</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name Life</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:!flex items-center justify-center'>
                <div className={location.pathname === "/en/discovery" ? 'flex md:w-[95%] md:flex-col gap-2 xl:flex-row items-center xl:justify-between pt-10' : 'flex md:w-4/5 md:flex-col gap-2 xl:flex-row items-center xl:justify-between pt-10'}>
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center gap-2.5'>
                            <FaLocationDot size={12} className='text-gray-200 border-b border-b-transparent' />
                            <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Choose country</Link>
                        </div>
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
                            Name 2024
                        </h1>
                    </div>
                </div>
            </div>
            {/* Mobile Footer */}
            <div className='md:hidden'>
                <div className='pb-10 px-2'>
                    <h1 className='text-2xl font-bold font-sans'>LOGO</h1>
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
                        <div className={`collapsible-content ${productsLinksOpen ? 'open' : ''}`}>
                            <div className="w-full left-3 pr-7">
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Wolt Drive</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Wolt Market</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Wolt+</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Wolt for Work</Link>
                                <Link className="flex text-sm items-center px-3 gap-3 rounded-md py-2.5 capitalize w-full hover:bg-white/20" to={'/'}>Wolt Ads</Link>
                            </div>
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
                {/* Action Buttons */}
                <div className='flex items-center justify-between pt-5 pr-2'>
                    <div className='flex items-center gap-1'>
                        <FaLocationDot size={12} className='text-gray-200 border-b border-b-transparent' />
                        <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Choose country</Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaGlobeAmericas size={12} className='text-gray-200 border-b border-b-transparent' />
                        <Link className='text-sm border-b border-b-transparent hover:border-b-white'>English</Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <BiHide size={12} className='text-gray-200 border-b border-b-transparent' />
                        <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Accessibility</Link>
                    </div>
                </div>
                {/* Links */}
                <div className='grid grid-cols-3 sm:grid-cols-4 pt-5 gap-y-4 gap-x-5'>
                    <Link className='text-xs border-b border-b-transparent hover:border-b-white'>Accessibility Statement</Link>
                    <Link className='text-xs border-b border-b-transparent hover:border-b-white'>User Terms of Service</Link>
                    <Link className='text-xs border-b border-b-transparent hover:border-b-white'>Privacy Statement</Link>
                    <h1 className='flex items-center gap-2 text-gray-400 text-xs'>
                        <span>&copy;</span>
                        Name 2024
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Footer