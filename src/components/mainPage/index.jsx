import React from 'react';
import { useState} from 'react';
import Sidebar from '../sidebar';
import './index.css';
import Button from '../button';
export default function MainPage(){
    const [isOpen , setIsopen] = useState(false)
    return(
    <>
    <header className='justify-between items-center lg:flex lg:flex-row pb-[70px] flex lg:px-[20px]'>
        <div className='header-left flex justify-center items-center lg:gap-[12.92px] gap-[8.475px] w-[144px] h-[23.613px]'>
            <img className='lg:w-[36px] lg:h-[36px] w-[23.613px] h-[23.613px]' src="src/assets/images/Icon.svg" alt="icon" />
            <img className='lg:w-[170.617px] lg:h-[28.56px] w-[111.912px] h-[18.733px]' src="src/assets/images/Positivus.svg" alt="positive" />
        </div>
        <nav className='header-right'>
            <ul className='hidden lg:flex flex-row justify-center items-center gap-[40px]'>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Use Cases</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <Button title='Request a quote' borderColor='var(--Dark,#191A23)'></Button>
            </ul>
        </nav>
        <button className='lg:hidden h-[16px] w-[24px]' onClick={()=> setIsopen(true)}>
            <img src="src/assets/images/Burger menu icon.svg" alt="" />
        </button>
    </header>
    <Sidebar isOpen = {isOpen} setIsOpen = {setIsopen}/>

    <section className="middle flex lg:flex-row
    flex-col">
        <div className="middle-left">
            <h1 className='lg:text-6xl text-5xl lg:w-[531px] w-full'>Navigating the digital landscape for success</h1>
            <div className="middle-right flex lg:hidden">
                <img className='mainImg lg:w-85 lg:h-85 gap-[10px] w-full'  src="src/assets/images/Screenshot 2024-07-09 at 12.01.47.png" alt="" />
            </div>
            <p className='w-full text-lg pt-[35px]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <div className='pt-[35px] flex justify-center items-center lg:items-start lg:justify-start lg:pb-[70px]'>
                <Button title='Book a consultation' bgColor='var(--Dark,#191A23)' text='white' self_width='w-full lg:w-[264px]' justify='justify-center'></Button>
            </div>
        </div>
        <div className="middle-right lg:flex hidden w-full">
            <img className='mainImg w-full'  src="src/assets/images/Screenshot 2024-07-09 at 12.01.47.png" alt="" />
        </div>
    </section>
    <div className='whole-swap hidden lg:flex justify-between overflow-hidden pt-6'>
         <div className='slide-swap flex items-start justify-between'>
            <img src="src/assets/images/amazon.svg" alt="" />
            <img src="src/assets/images/dri.svg" alt="" />
            <img src="src/assets/images/hubspot.svg" alt="" />
            <img src="src/assets/images/notion.svg" alt="" />
            <img src="src/assets/images/netflix.svg" alt="" />
            <img src="src/assets/images/zoom.svg" alt="" />
            <img src="src/assets/images/amazon.svg" alt="" />
            <img src="src/assets/images/dri.svg" alt="" />
            <img src="src/assets/images/hubspot.svg" alt="" />
            <img src="src/assets/images/notion.svg" alt="" />
            <img src="src/assets/images/netflix.svg" alt="" />
            <img src="src/assets/images/zoom.svg" alt="" />
        </div>
    </div>

    <div className='whole-swap lg:hidden inline-block justify-between overflow-hidden pt-[90px] lg:w-full w-full items-center'>
         <div className='slide-swap-reverse flex items-start justify-between'>
            <img src="src/assets/images/amazon.svg" alt="" />
            <img src="src/assets/images/dri.svg" alt="" />
            <img src="src/assets/images/hubspot.svg" alt="" />
            <img src="src/assets/images/amazon.svg" alt="" />
            <img src="src/assets/images/dri.svg" alt="" />
            <img src="src/assets/images/hubspot.svg" alt="" />
            <img src="src/assets/images/amazon.svg" alt="" />
            <img src="src/assets/images/dri.svg" alt="" />
            <img src="src/assets/images/hubspot.svg" alt="" />
        </div>

        <div className='slide-swap flex items-start justify-between'>
            <img src="src/assets/images/notion.svg" alt="" />
            <img src="src/assets/images/netflix.svg" alt="" />
            <img src="src/assets/images/zoom.svg" alt="" />
            <img src="src/assets/images/notion.svg" alt="" />
            <img src="src/assets/images/netflix.svg" alt="" />
            <img src="src/assets/images/zoom.svg" alt="" />
            <img src="src/assets/images/notion.svg" alt="" />
            <img src="src/assets/images/netflix.svg" alt="" />
            <img src="src/assets/images/zoom.svg" alt="" />
        </div>
    </div>
    </>
);
}