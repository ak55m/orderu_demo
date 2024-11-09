
import React from 'react'
import ApplyNowImg1 from '../../assets/couple-with-food.jpg'
import ApplyNowImg2 from '../../assets/pic2.jpg'
import ApplyNowImg3 from '../../assets/pic3.jpg'

import { Link } from 'react-router-dom'


const ApplyNow = () => {
    return (
        <div className='w-full min-h-screen bg-white px-6 sm:px-14 md:px-0 py-20 flex items-center justify-center'>
            <div className='w-full md:w-4/5 h-full'>
                <h1 className='text-center text-5xl font-bold font-sans pb-14'>Hungry for more than food?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {/* Section-2 */}
                    <div className='h-auto'>
                        <img src={ApplyNowImg1} alt="Apply Now" className='w-full h-80 object-cover' />
                        <div className='bg-gray-100 flex items-center justify-center flex-col gap-4 py-10 h-48'>
                            <h1 className='text-lg font-bold text-gray-700 tracking-wide'>Get paid as a courier partner</h1>
                            <Link to={'/apply'} className='mb-8 pb-1 border-b-2 text-sky-500 text-sm border-sky-500'>
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    {/* Section-1 */}
                    <div className='h-auto'>
                        <img src={ApplyNowImg2} alt="Apply Now" className='w-full h-80 object-cover' />
                        <div className='bg-gray-100 flex items-center justify-center flex-col gap-4 h-48 py-10'>
                            <h1 className='text-lg font-bold text-gray-700 tracking-wide w-3/4 text-center'>Serve more people as a restaurant partner</h1>
                            <Link to={'/apply'} className='mb-8 pb-1 border-b-2 text-sky-500 text-sm border-sky-500'>
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    {/* Section-3 */}
                    <div className='h-auto'>
                        <img src={ApplyNowImg3} alt="Apply Now" className='w-full h-80 object-cover' />
                        <div className='bg-gray-100 flex items-center justify-center flex-col gap-4 h-48 py-10'>
                            <h1 className='text-lg font-bold text-gray-700 tracking-wide w-3/4 text-center'>Enter a new chapter and find a job at Wolt</h1>
                            <Link to={'/apply'} className='mb-8 pb-1 border-b-2 text-sky-500 text-sm border-sky-500'>
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyNow