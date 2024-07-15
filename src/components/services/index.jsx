import React from 'react';
import Card from '../card';
import Button from '../button';

import label_card1 from './../../assets/images/HeadingFirst.svg';
import label_card2 from './../../assets/images/HeadingSecond.svg';
import label_card3 from './../../assets/images/HeadingThird.png';
import label_card4 from './../../assets/images/HeadingFourth.png';
import label_card5 from './../../assets/images/HeadingFifth.png';
import label_card6 from './../../assets/images/HeadingSixth.png';

import nameplace1 from './../../assets/images/tokyo-magnifier-web-search-with-elements 2.png';
import nameplace2 from './../../assets/images/tokyo-selecting-a-value-in-the-browser-window 1.png';
import nameplace3 from './../../assets/images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png';
import nameplace4 from './../../assets/images/tokyo-sending-messages-from-one-place-to-another 1.svg';
import nameplace5 from './../../assets/images/tokyo-many-browser-windows-with-different-information 1.png';
import nameplace6 from './../../assets/images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png';

import arrow_black from './../../assets/images/blackArrow.svg';
import arrow_white from './../../assets/images/whiteArrow.svg';

export default function Services(){
    return(
    <>
    <div className='flex justify-center items-center w-full pb-[85px] text-lg gap-[45px] flex-wrap'>
        <img className='w-[164px]' src="src/assets/images/Heading (5).svg" alt="" />
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
    </div>
    <div className='flex flex-col gap-[40px]'>
        <div className='flex sm:flex-row flex-col items-first pr-[100px] gap-[40px]'>

            <Card label_Card={label_card1} arrow_label={arrow_black} img_Card={nameplace1}  bg_color='bg-[var(--Grey,#F3F3F3)]'></Card>
            <Card label_Card={label_card2} arrow_label={arrow_black} img_Card={nameplace2}  bg_color='bg-[var(--Green,#B9FF66)]'></Card>
        
        </div>

        <div className='flex items-first pr-[100px] gap-[40px] sm:flex-row flex-col'>

            <Card label_Card={label_card3} arrow_label={arrow_white} img_Card={nameplace3}  bg_color='bg-[var(--Dark,#191A23)]' color="text-white"></Card>
            <Card label_Card={label_card4} arrow_label={arrow_black} img_Card={nameplace4}  bg_color='bg-[var(--Grey,#F3F3F3)]'></Card>

        </div>

        <div className='flex items-first pr-[100px] gap-[40px] sm:flex-row flex-col'>

            <Card label_Card={label_card5} arrow_label={arrow_black} img_Card={nameplace5}  bg_color='bg-[var(--Green,#B9FF66)]'></Card>
            <Card label_Card={label_card6} arrow_label={arrow_white} img_Card={nameplace6}  bg_color='bg-[var(--Dark,#191A23)]' color="text-white"></Card>

        </div>
    </div>

    <div className='flex w-full h-[347px] pr-[60px] pl-[60px] items-center gap-[275px] border rounded-[45px] bg-[var(--Grey,#F3F3F3)] mt-[85px]'>
        <div className='left-part flex flex-col items-start gap-[26px]'>
            <h3 className='text-3xl'>Let’s make things happen</h3>
            <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <Button className='w-[218px]' title='Get your free proposal' bgColor='var(--Dark,#191A23)' text='white'></Button>
            
        </div>

        <div className='right-part hidden sm:flex'>
            <img className='h-[394px] w-[1000px]'  src="src/assets/images/Frame 19.png" alt="" />
        </div>

    </div>

    </>
)
}