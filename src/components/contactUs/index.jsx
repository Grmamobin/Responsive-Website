import React, { useState } from 'react';
import Button from '../button';
export default function CotactUs(){
    const [radioButton , setRadioButton] = useState({
        1: false,
        2: true
    });
    return(
    <>
    <div className='flex justify-center items-center w-[800px] pb-[85px] text-lg gap-[45px]'>
        <img className='w-[241px]' src="src/assets/images/Heading (3).svg" alt="" />
        <p className='text-[18px]'>Connect with Us: Lets Discuss Your Digital Marketing Needs</p>
    </div> 

    <div className='flex w-[1240px] pt-[60px]  pb-[80px] pl-[100px] items-start gap-[10px] flex-shrink-0 border rounded-[45px] bg-[var(--Grey,#F3F3F3)]'>
        <div className='flex flex-col items-start gap-[40px]'>
            <div className='flex items-start gap-[35px]'>
                <div className='flex gap-[14px]'>
                    <div >
                        <div className='w-[28px] h-[28px] border rounded-[29px] bg-white border-black' style={{display: radioButton[2]? "none" : "flex"}} onClick={()=>{setRadioButton({1: false, 2: true})}}></div>
                        <img style={{display: radioButton[2]? "flex" : "none"}} onClick={()=>{setRadioButton({1: false, 2: true})}} className='w-[28px] h-[28px]' src="src/assets/images/Radiobutton.svg" alt="" />
                    </div>
                    <p>Say Hi</p>
                </div>
                <div className='flex gap-[14px]'>
                <div>
                        <div className='w-[28px] h-[28px] border rounded-[29px] bg-white border-black' style={{display: radioButton[1]? "none" : "flex"}} onClick={()=>{setRadioButton({1: true, 2: false})}}></div>
                        <img style={{display: radioButton[1]? "flex" : "none"}} onClick={()=>{setRadioButton({1: true, 2: false})}} className='w-[28px] h-[28px]' src="src/assets/images/Radiobutton.svg" alt="" />
                    </div>
                    <p>Get a Quote</p>
                </div>
            </div>
            <div className='flex flex-col items-start gap-[25px]'>
                <div className='flex flex-col items-start gap-[5px]'>
                    <p>Name</p>
                    <input className='flex w-[556px] py-[18px] px-[30px] items-start gap-[10px] border rounded-[14px] bg-white border-[#000]' type="Name" placeholder='Name'/>
                </div>
                <div className='flex flex-col items-start gap-[5px] '>
                    <p>Email*</p>
                    <input className='flex w-[556px] py-[18px] px-[30px] items-start gap-[10px] border rounded-[14px] bg-white border-[#000]' type="Email"  placeholder='Email' />
                </div>
                <div className='flex flex-col items-start gap-[5px] h-[223px]'>
                    <p>Message*</p>
                    <input className='flex w-[556px] h-[190px] py-[18px] px-[30px] items-start gap-[10px] flex-shrink-0 border rounded-[14px] bg-white border-[#000]' type="Message"  placeholder='Message' />
                </div>
            </div>
            <Button title='Send Message' bgColor='var(--Dark,#191A23)' text='white' width='556px' justify='justify-center' borderColor='none'></Button>
        </div>

            <img className='w-[400.859px] h-[648px] ml-auto ' src="src/assets/images/Screenshot 2024-07-13 at 16.54.19.png" alt="" />

    </div>
    


    

    </>
    )
}