import React from 'react'
import {Banner} from '../../components/Banner'
import { FeaturesSectionDemo } from '../../components/FeatureSectionDemo'

const Home = () => {
  return (
    <>
   
    <div  className=' lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto' >
    
       <Banner/>
       <FeaturesSectionDemo/>
    </div>
    </>
  )
}

export default Home;
