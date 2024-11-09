
import React from 'react'
import ApplyNowImg1 from '../../assets/couple-with-food.jpg';
import iPhone14home from '../../assets/iPhone-14-Plus-home.png';
import iPhone14location from '../../assets/iPhone-14-Plus-location.png';
import iPhone14orders from '../../assets/iPhone-14-Plus-orders.png';
import iPadPro11MerchantDash from '../../assets/iPad-PRO-11-merchant.png';

import { Link } from 'react-router-dom'


const Merchantview = () => {
    return (
        <div className='bg-white px-6 sm:px-14 md:px-0 flex items-center justify-center mt-10'>
            <div className='w-full md:w-4/5 h-full'>
                <h1 className='text-center text-5xl font-bold font-sans pb-2'>Automation has never been simpler.</h1>
                <h3 className='text-center text-2xl font-bold font-sans pb-1'>In house food ordering platfrom.</h3>
                <h3 className='text-center text-2xl font-bold font-sans pb-1'>See orders as soon as customers place them.</h3>
                <h3 className='text-center text-2xl font-bold font-sans pb-4'>Let customers know status of their food preparation process.</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {/* Section-1 */}
                    <div className='h-auto'>
                        <img src={iPadPro11MerchantDash} alt="Apply Now" className='w-full h-90 object-cover' />
                    </div>
                    {/* Section-2 */}
                    <div className='h-auto'>
                        <img src={iPadPro11MerchantDash} alt="Apply Now" className='w-full h-90 object-cover' />
                    </div>
                    {/* Section-3 */}
                    <div className='h-auto'>
                        <img src={iPadPro11MerchantDash} alt="Apply Now" className='w-full h-90 object-cover' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Merchantview