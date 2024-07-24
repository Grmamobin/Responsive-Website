import React, { useState } from 'react';
import Slider from "react-slick";
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

import mainHead from '.././../assets/images/Label (1).svg'
import leftArrow from '.././../assets/images/Arrow left.svg'
import rightArrow from '.././../assets/images/Arrow right.svg'
import leftArrowBlock from '.././../assets/images/ArrowleftBlock.svg'
import rightArrowBlock from '.././../assets/images/ArrowrightBlock.svg'
import loadBlack from '.././../assets/images/loadBlack.svg'
import loadWhite from '.././../assets/images/loadwhite.svg';

export default function Testimonials(){
    const data = [
        {
            counter:1
        },
        {
            counter:2
        },
        {
            counter:3
        },
        {
            counter:4
        },
        {
            counter:5
        }
    ];
    let sliderRef = useRef(null);
    let sliderRef2 = useRef(null);
    const [count , setCount] = useState(2);

    const next = () => {
      sliderRef.slickNext();
      setCount(count => count + 1)
      if(count >= 5){
        setCount(5)
    }
    console.log(count)
    };
    const previous = () => {
      sliderRef.slickPrev();
      setCount(count => count - 1)
      if (count <= 1){
        setCount(1)
    }
    console.log(count)
    };
    const next2 = () => {
        sliderRef2.slickNext();
        setCount(count => count + 1)
        if(count >= 5){
            setCount(5)
        }
        console.log(count)
    };
      const previous2 = () => {
        sliderRef2.slickPrev();
        setCount(count => count - 1)
        if (count <= 1) {
            setCount(1);
          }
          console.log(count)
    };


    const settings = {
        dots: false,
        infinite: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        initialSlide: 1,
        arrows: false
    };
    
      const settings_2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false
      };


    return(
        <div>
        <div className='flex justify-start items-center w-full pb-[85px] text-md gap-[45px] flex-col md:flex-row'>
            <img className='w-[241px] h-[51px]' src={mainHead} alt="" />
            <p className='text-[18px] text-center lg:text-left lg:w-[473px]'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
        </div>
            <div className='pt-[84px] pb-[68px] border rounded-[45px] bg-[var(--Dark,#191A23)] md:block hidden'>
            <Slider
            ref={slider => {
            sliderRef = slider;
            }}
            {...settings}
            >
                {data.map((d)=>(
            <div className='flex flex-col flex-end gap-[20px]' key={d.counter}>
                <div className="tooltip pt-[48px] pb-[52px] px-[52px]">
                We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.
                </div>
                <div className='flex self-center flex-col pl-[90px] pt-[40px]'>
                    <h4 className='font-spaceGrotesk font-medium text-[var(--Green,#B9FF66)]'>John mdith</h4>
                    <p className='text-white'>Marketing Director at XYZ Corp</p>
                </div>
                
            </div>
                ))}
                </Slider>
                <div className='flex justify-between items-center pt-[125px] px-[20px] w-[564px] m-auto'>
                {count==1 ? <img src={leftArrowBlock} onClick={previous} alt="" /> : <img src={leftArrow} onClick={previous} alt="" />}
                    <div className='flex w-full items-center justify-center gap-[10px]'>
                        { count <= 1 ? <img src={loadBlack}/> : <img src={loadWhite}/> }
                        { count == 2? <img src={loadBlack}/> : <img src={loadWhite}/> }
                        { count == 3 ? <img src={loadBlack}/> : <img src={loadWhite}/> }
                        { count == 4 ? <img src={loadBlack}/> : <img src={loadWhite}/> }
                        {count >= 5 ? <img src={loadBlack}/> : <img src={loadWhite}/>} 
                    </div>
                {count==5 ? <img src={rightArrowBlock} onClick={next} alt="" /> : <img src={rightArrow} onClick={next} alt="" />}
                
                </div> 
            </div>


            <div className='pt-[30px] pb-[60px] px-[20px] border rounded-[45px] bg-[var(--Dark,#191A23)] block md:hidden'>
            <Slider
            ref={slider => {
            sliderRef2 = slider;
            }}
            {...settings_2}
            >
                {data.map((d)=>(
            <div className='flex flex-col flex-end justify-start items-center' key={d.counter}>
               
                <div className="tooltip pt-[30px] pb-[32.38px] px-[30px] text-base ">
                We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.
                </div>
                <div className='flex flex-col justify-start pl-[65px] pt-[40px]'>
                    <h4 className='font-spaceGrotesk font-medium text-[var(--Green,#B9FF66)]'>John mdith</h4>
                    <p className='text-white'>Marketing Director at XYZ Corp</p>
                </div>
                
            </div>
                ))}
                </Slider>
                <div className='flex justify-between items-center pt-[60px] px-[30px]'>
                {count==1 ? <img src={leftArrowBlock} onClick={previous2} alt="" /> : <img src={leftArrow} onClick={previous2} alt="" />}
                    <div className='flex w-full items-center justify-center gap-[10px]'>
                        { count <= 1 ? <img src={loadBlack}/> : <img src={loadWhite}/> }
                        { count == 2? <img src={loadBlack}/> : <img src={loadWhite}/> }
                        { count == 3 ? <img src={loadBlack}/> : <img src={loadWhite}/> }
                        { count == 4 ? <img src={loadBlack}/> : <img src={loadWhite}/> }
                        {count >= 5 ? <img src={loadBlack}/> : <img src={loadWhite}/>} 
                    </div>
                {count==5 ? <img src={rightArrowBlock} onClick={next2} alt="" /> : <img src={rightArrow} onClick={next2} alt="" />}
                
                </div> 
            </div>

        </div>
)
}