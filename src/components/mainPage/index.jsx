import React from 'react';
import './index.css';
import Button from '../button';
export default function MainPage(){

    return(
        
    <>
    <header className='sm:justify-between items-center sm:flex sm:flex-row pb-[70px] gap-[222px] inline-flex pr-[20px]'>
        <div className='header-left flex justify-center items-center sm:gap-[12.92px] gap-[8.475px] w-[144px] h-[23.613px]'>
            <img className='sm:w-[36px] sm:h-[36px] w-[23.613px] h-[23.613px]' src="src/assets/images/Icon.svg" alt="icon" />
            <img className='sm:w-[170.617px] sm:h-[28.56px] w-[111.912px] h-[18.733px]' src="src/assets/images/Positivus.svg" alt="positive" />
        </div>
        <nav className='header-right'>
            <ul className='hidden sm:flex flex-row justify-center items-center gap-[40px] '>
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
        <button className='sm:hidden h-[16px] w-[24px]'>
            <img src="src/assets/images/Burger menu icon.svg" alt="" />
        </button>
    </header>

    <section className="middle flex sm:flex-row
    flex-col">
        <div className="middle-left">
            <h1 className='sm:text-6xl text-5xl sm:w-[531px] w-[395px] h-[165px]'>Navigating the digital landscape for success</h1>
            <div className="middle-right flex sm:hidden">
                <img className='mainImg sm:w-85 sm:h-85 gap-[10px] w-[50%] h-[50%]'  src="src/assets/images/Screenshot 2024-07-09 at 12.01.47.png" alt="" />
            </div>
            <p className='w-[498px] text-lg pt-[35px]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <div className='pt-[35px] flex justify-center items-center w-[390px] sm:items-start sm:justify-start'>
                <Button className="w-[264px]" title='Book a consultation' bgColor='var(--Dark,#191A23)' text='white'></Button>
            </div>
        </div>
        <div className="middle-right sm:flex hidden">
            <img className='mainImg w-85 h-85'  src="src/assets/images/Screenshot 2024-07-09 at 12.01.47.png" alt="" />
        </div>
    </section>
    <div className='whole-swap hidden sm:flex justify-between overflow-hidden pt-6'>
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

    <div className='whole-swap sm:hidden inline-block justify-between overflow-hidden pt-6 sm:w-full w-[430px]'>
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