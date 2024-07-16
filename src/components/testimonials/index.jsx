import React from 'react';
import Slider from "react-slick";
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

import bubble from '.././../assets/images/Bubble.svg'
import mainHead from '.././../assets/images/Label (1).svg'
import leftArrow from '.././../assets/images/Arrow left.svg'
import rightArrow from '.././../assets/images/Arrow right.svg'
import stars from '.././../assets/images/Navigation stars.svg'

export default function Testimonials(){
    const data = [
        {
            image:bubble,
            name:"John Smith",
            info:"Marketing Director at XYZ Corp"
        },
        {
            image:bubble,
            name:"John Smith",
            info:"Marketing Director at XYZ Corp"
        },
        {
            image:bubble,
            name:"John Smith",
            info:"Marketing Director at XYZ Corp"
        },
    ];
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      };
      const settings_2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    return(
        <div>
        <div className='flex justify-start items-center w-full pb-[85px] text-lg gap-[45px] flex-col lg:flex-row'>
            <img className='w-[241px]' src={mainHead} alt="" />
            <p className='text-[18px] text-center'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
        </div>
            <div className='pt-[84px] pb-[68px] border rounded-[45px] bg-[var(--Dark,#191A23)] lg:block hidden'>
            <Slider
            ref={slider => {
            sliderRef = slider;
            }}
            {...settings}
            >
                {data.map((d)=>(
            <div className='flex flex-col flex-end gap-[20px]' key={d.image}>
                <img src={d.image} alt="" />
                <div className='flex self-center flex-col pl-[100px]'>
                    <h4 className='font-spaceGrotesk font-medium text-[var(--Green,#B9FF66)]'>{d.name}</h4>
                    <p className='text-white'>{d.info}</p>
                </div>
                
            </div>
                ))}
                </Slider>
                <div className='flex w-[564px] justify-between items-center pt-[125px] m-auto'>
                    <img src={leftArrow} onClick={previous} alt="" />
                    <img src={stars} alt="" />
                    <img src={rightArrow} onClick={next} alt="" />
                </div>  
            </div>


            <div className='pt-[84px] pb-[68px] border rounded-[45px] bg-[var(--Dark,#191A23)] block lg:hidden'>
            <Slider
            ref={slider => {
            sliderRef = slider;
            }}
            {...settings_2}
            >
                {data.map((d)=>(
            <div className='flex flex-col flex-end justify-center items-center' key={d.image}>
                <img className='w-full' src={d.image} alt="" />
                <div className='flex self-center flex-col pl-[100px] pt-[20px]'>
                    <h4 className='font-spaceGrotesk font-medium text-[var(--Green,#B9FF66)]'>{d.name}</h4>
                    <p className='text-white'>{d.info}</p>
                </div>
                
            </div>
                ))}
                </Slider>
                <div className='flex justify-between items-center pt-[125px] px-[20px]'>
                    <img src={leftArrow} onClick={previous} alt="" />
                    <img src={stars} alt="" />
                    <img src={rightArrow} onClick={next} alt="" />
                </div> 
            </div>

        </div>
)
}