
import React from 'react'
import iPhone14home from '../../assets/iPhone-14-Plus-home.png';
import iPhone14orders from '../../assets/iPhone-14-Plus-orders.png';
import iPhone14menu from '../../assets/iPhone-14-Plus-menu.png';


import { Link } from 'react-router-dom'


const Customerview = () => {
    return (
        <div className='w-full min-h-screen bg-white px-6 sm:px-14 md:px-0 py-10 flex items-center justify-center mt-10'>
            <div className='w-full md:w-4/5 h-full'>
                {/* <h1 className='text-center text-5xl font-bold font-sans pb-2'>Customers</h1> */}
                <h3 className='text-center text-2xl font-bold font-sans pb-1'>Customers order conveniently without the assistance of a server.</h3>
                <h3 className='text-center text-2xl font-bold font-sans pb-1'>Customers get instant updates while their meal is prepared.</h3>
                <h3 className='text-center text-2xl font-bold font-sans pb-4'>Customers place orders directly from your phone – No kiosks, No cashiers or servers.</h3>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {/* Section-1 */}
                    <div className='h-auto'>
                        <img src={iPhone14home} alt="Apply Now" className='w-full h-90 object-cover' />
                    </div>
                    {/* Section-2 */}
                    <div className='h-auto'>
                        <img src={iPhone14menu} alt="Apply Now" className='w-full h-90 object-cover' />
                    </div>
                    {/* Section-3 */}
                    <div className='h-auto'>
                        <img src={iPhone14orders} alt="Apply Now" className='w-full h-90 object-cover' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customerview