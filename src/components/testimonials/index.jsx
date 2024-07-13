import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials(){
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return(
    <>
    <div className='flex justify-center items-center w-[800px] pb-[85px] text-lg gap-[45px]'>
        <img className='w-[241px]' src="src/assets/images/Label (1).svg" alt="" />
        <p className='text-[18px]'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
    </div> 
    <div className='inline-flex pt-[84px] pb-[68px] items-center border rounded-[45px] bg-[var(--Dark,#191A23)]'>
        <div className='flex items-start justify-between w-[1918px]'>
        <Slider {...settings}>
        <div className='flex flex-col flex-end gap-[20px]'>
            <img className='w-[606px] h-[237.952px]' src="src/assets/images/Bubble.svg" alt="" />
            <div>
                <h4 className='font-spaceGrotesk font-medium text-[var(--Green,#B9FF66)]'>John Smith</h4>
                <p className='text-white'>Marketing Director at XYZ Corp</p>
            </div>
            
        </div>
        <div className='flex flex-col flex-end gap-[20px]'>
            <img className='w-[606px] h-[237.952px]' src="src/assets/images/Bubble.svg" alt="" />
            <div>
                <h4 className='font-spaceGrotesk font-medium text-[var(--Green,#B9FF66)]'>John Smith</h4>
                <p className='text-white'>Marketing Director at XYZ Corp</p>
            </div>
            
        </div>
        <div className='flex flex-col flex-end gap-[20px]'>
            <img className='w-[606px] h-[237.952px]' src="src/assets/images/Bubble.svg" alt="" />
            <div>
                <h4 className='font-spaceGrotesk font-medium text-[var(--Green,#B9FF66)]'>John Smith</h4>
                <p className='text-white'>Marketing Director at XYZ Corp</p>
            </div>
            
        </div>


        
        </Slider>
        </div>
       
    </div>
    
    </>
    )
}