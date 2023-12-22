import React from 'react'
import {Link} from 'react-router-dom'
import { arrow } from '../../assets/icons'
import useFadeIn from '../../hooks/useFadeIn'

// const { opacity } = useFadeIn(800);


const InfoBox = ({ text, link, btnText}) => (
    
    <div className='main-box w-[60%]'>
           <p className='sm:text-2xl text-center font-josefin font-light' style={{ transition: 'opacity 0.5s ease-in-out'}}>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderInfoText = {
    1: (
        <div className='lg:w-1/2 gap-7 text-center font-josefin opacity-100 transition-opacity duration-500' style={{ position: 'absolute', top: '55%', left: '25%' }}>
            <h2 className='text-3xl pb-5 text-center font-nanum  text-white' style={{fontStyle: 'italic'}}>Hi</h2>
        <h1 className='text-7xl sm:text-5xl text-white font-nanum' style={{letterSpacing: '0.2em'}}> I am Egor </h1>
            <hr className='pb-12 mt-12 lg:w-1/2 mx-auto'/>
            <h2 className='text-5xl font-light text-white'> Web-developer/system engineer </h2>
        
        </div>
    ),
    2: (
        <InfoBox 
        text=' Worked with many companies and picked up many skills along the way'
        link='/about'
        btnText='Learn more'/> 
    ),
    3: (
        <InfoBox 
        text=' Led multiple projects to success over the years. Curious about the impact?'
        link='/projects'
        btnText='Visit my portfolio'/> 
    ),
    4: (
        <InfoBox 
        text=' Need a project done or looking for a dev? Im just a few keystrokes away'
        link='/contacts'
        btnText='Lets talk'/> 
    )
}


const HomeInfo = ({currentStage}) => {
  return renderInfoText[currentStage] || null;
}

export default HomeInfo