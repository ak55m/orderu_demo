import React from 'react'
import Hero from '../../Components/Hero/Hero'
import VideoSection from '../../Components/VideoSection/VideoSection'
import Customerview from '../../Components/CustomerView/CustomerView'
import Merchantview from '../../Components/MerchantView/MerchantView'

const Home = () => {
    return (
        <div className=''>
            {/* <Link to={'/'} className='bg-sky-200 ml-2 mt-2 text-sky-600 px-5 py-2 rounded-md'>Go to Disovey Page</Link> */}
            <Hero />
            <div id="other-sections">

            <Merchantview />
            <Customerview />
            <VideoSection />
            </div>
        </div>
    )
}

export default Home