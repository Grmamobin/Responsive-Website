import React, { useState } from 'react';
import Button from '../button';

import mainHead from '../../assets/images/Heading (3).svg'
import radioBtn from '../../assets/images/Radiobutton.svg'
import img from '../../assets/images/Screenshot 2024-07-13 at 16.54.19.png'
export default function CotactUs(){
    const [radioButton , setRadioButton] = useState({
        1: false,
        2: true
    });
    return(
    <>
    <div className='flex justify-start items-center w-full pb-[85px] text-lg gap-[45px] flex-col lg:flex-row'>
        <img className='w-[241px]' src={mainHead} alt="" />
        <p className='text-[18px] text-center'>Connect with Us: Lets Discuss Your Digital Marketing Needs</p>
    </div> 

    <div className='lg:flex py-[40px] px-[30px] lg:pt-[60px]  lg:pb-[80px] lg:pl-[100px] items-start lg:gap-[10px] gap-[36px] lg:flex-shrink-0 border rounded-[45px] bg-[var(--Grey,#F3F3F3)]'>
        <div className='flex flex-col gap-[40px]'>
            <div className='flex items-start gap-[35px] self-center lg:self-auto'>
                <div className='flex gap-[14px]'>
                    <div >
                        <div className='w-[28px] h-[28px] border rounded-[29px] bg-white border-black' style={{display: radioButton[2]? "none" : "flex"}} onClick={()=>{setRadioButton({1: false, 2: true})}}></div>
                        <img style={{display: radioButton[2]? "flex" : "none"}} onClick={()=>{setRadioButton({1: false, 2: true})}} className='w-[28px] h-[28px]' src={radioBtn} alt="" />
                    </div>
                    <p>Say Hi</p>
                </div>
                <div className='flex gap-[14px]'>
                <div>
                        <div className='w-[28px] h-[28px] border rounded-[29px] bg-white border-black' style={{display: radioButton[1]? "none" : "flex"}} onClick={()=>{setRadioButton({1: true, 2: false})}}></div>
                        <img style={{display: radioButton[1]? "flex" : "none"}} onClick={()=>{setRadioButton({1: true, 2: false})}} className='w-[28px] h-[28px]' src={radioBtn} alt="" />
                    </div>
                    <p>Get a Quote</p>
                </div>
            </div>
            <div className='flex flex-col  gap-[25px]'>
                <div className='flex flex-col items-start gap-[5px]'>
                    <p>Name</p>
                    <input className='flex w-full lg:w-[500px] py-[18px] px-[30px] items-start gap-[10px] border rounded-[14px] bg-white border-[#000]' type="Name" placeholder='Name'/>
                </div>
                <div className='flex flex-col items-start gap-[5px] '>
                    <p>Email*</p>
                    <input className='flex w-full py-[18px] px-[30px] items-start gap-[10px] border rounded-[14px] bg-white border-[#000]' type="Email"  placeholder='Email' />
                </div>
                <div className='flex flex-col items-start gap-[5px] h-[223px]'>
                    <p>Message*</p>
                    <input className='flex w-full h-[190px] py-[18px] px-[30px] items-start gap-[10px] flex-shrink-0 border rounded-[14px] bg-white border-[#000]' type="Message"  placeholder='Message' />
                </div>
            </div>
            <Button title='Send Message' bgColor='var(--Dark,#191A23)' text='white' justify='justify-center' borderColor='none' self_width='w-full'></Button>
        </div>

            <img className='w-[400.859px] h-[648px] ml-auto lg:block hidden object-contain' src={img} alt="" />

    </div>

    </>
    )
}