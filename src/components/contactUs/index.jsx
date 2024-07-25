import React, { useState } from 'react';
import Button from '../button';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import mainHead from '../../assets/images/Heading (3).svg'
import radioBtn from '../../assets/images/Radiobutton.svg'
import img from '../../assets/images/Screenshot 2024-07-13 at 16.54.19.png'

export default function CotactUs(){
    const [selectedOption, setSelectedOption] = useState(2);

    const handleChange = (event) => {
        setSelectedOption(Number(event.target.value));
    };
    return(
    <>
    <div className='flex justify-start items-center w-full pb-[85px] text-lg gap-[45px] flex-col lg:flex-row'>
        <img className='w-[241px] h-[51px]' src={mainHead} alt="" />
        <p className='text-[18px] text-center lg:text-left lg:w-[323px]'>Connect with Us: Lets Discuss Your Digital Marketing Needs</p>
    </div> 

    <div className='lg:flex py-[40px] px-[30px] lg:pt-[60px]  lg:pb-[80px] lg:pl-[100px] items-start lg:gap-[10px] gap-[36px] lg:flex-shrink-0 border rounded-[45px] bg-[var(--Grey,#F3F3F3)] lg:px-0'>
        <div className='flex flex-col gap-[40px]'>

        <div className='flex items-start gap-[35px] self-center lg:self-auto'>
            <div className='flex gap-[14px] items-center'>
                <input 
                    type="radio" 
                    id="sayHi" 
                    name="options" 
                    value={2} 
                    checked={selectedOption === 2} 
                    onChange={handleChange} 
                    className='hidden' 
                />
                <label htmlFor="sayHi" className='flex items-center cursor-pointer'>
                    {selectedOption === 2 && <img className='w-[28px] h-[28px]' src={radioBtn}/> }
                    {selectedOption === 1 && <div className='w-[28px] h-[28px] border rounded-[29px] bg-white border-black '></div>}
                    <span className='ml-[14px]'>Say Hi</span>
                </label>
            </div>
            <div className='flex gap-[14px] items-center'>
                <input 
                    type="radio" 
                    id="getAQuote" 
                    name="options" 
                    value={1} 
                    checked={selectedOption === 1} 
                    onChange={handleChange} 
                    className='hidden' 
                />
                <label htmlFor="getAQuote" className='flex items-center cursor-pointer'>
                {selectedOption === 1 && <img className='w-[28px] h-[28px]' src={radioBtn}/> }
                {selectedOption === 2 && <div className='w-[28px] h-[28px] border rounded-[29px] bg-white border-black '></div>}
                    <span className='ml-[14px]'>Get a Quote</span>
                </label>
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
                       <TextareaAutosize className='flex w-full h-[190px] py-[18px] px-[30px] items-start gap-[10px] flex-shrink-0 border rounded-[14px] bg-white border-[#000]'
                        aria-label="empty textarea"
                        minRows={6}
                        maxRows={6}
                        style={{resize: 'none'}}
                        placeholder="Message"
                        />
                </div>
            </div>
            <Button title='Send Message' classN='w-full border-[none] text-[white] justify-center bg-[var(--Dark,#191A23)] '></Button>
        </div>

            <img className='w-[400.859px] h-[648px] ml-auto gap-0 lg:block hidden ' src={img} alt="" />

    </div>

    </>
    )
}