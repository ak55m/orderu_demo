
import React from 'react'
import iPadPro11MerchantDash1 from '../../assets/iPad-PRO-11-merchant1.png';
import iPadPro11MerchantDash2 from '../../assets/iPad-PRO-11-merchant2.png';
import iPadPro11MerchantDash3 from '../../assets/iPad-PRO-11-merchant3.png';


import { Link } from 'react-router-dom'


const Merchantview = () => {
    return (
        <div className='bg-white px-6 sm:px-14 md:px-0 flex items-center justify-center mt-10'>
            <div className='w-full md:w-4/5 h-full'>

                <h1 className='text-center text-5xl font-bold font-sans pb-10'>As A Restaurant</h1>
                <h3 className='text-center text-1xl font-sans pb-1'>Serve more customers with fewer staff members.</h3>
                <h3 className='text-center text-1xl font-sf-pro pb-1'>Kitchen staff receive in-house orders instantly as customers place them.</h3>
                <h3 className='text-center text-1xl font-sans pb-4'>Keep customers and servers updated in real-time as food is being prepared.</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {/* Section-1 */}
                    <div className='h-auto'>
                        <img src={iPadPro11MerchantDash1} alt="Apply Now" className='w-full h-90 object-cover' />
                    </div>
                    {/* Section-2 */}
                    <div className='h-auto'>
                        <img src={iPadPro11MerchantDash2} alt="Apply Now" className='w-full h-90 object-cover' />
                    </div>
                    {/* Section-3 */}
                    <div className='h-auto'>
                        <img src={iPadPro11MerchantDash3} alt="Apply Now" className='w-full h-90 object-cover' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Merchantview
