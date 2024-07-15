import React from 'react';
import Button from '../button';
export default function Footer(){
    return(
    <>

    <div className='lg:flex inline-flex lg:pt-[55px] lg:px-[60px] lg:pb-[50px] pt-[50px] px-[20px] pb-[30px] flex-col items-center lg:items-start lg:gap-[50px] gap-[37px] border lg:rounded-t-[45px] bg-[var(--Dark,#191A23)] text-white w-full lg:flex-col'>
        <div className='flex flex-col lg:gap-[66px] gap-[37px] flex-wrap'>
            <div className='flex w-ful items-center lg:gap-[155px] lg:flex-row flex-col gap-[37px]'>
                <div className='flex gap-[10.29px]'>
                    <img className='w-[29.517px] h-[29px] flex-shrink' src="src/assets/images/Icon (4).svg" alt=""/>
                    <img  className='w-[139.89px] h-[23.007px] flex-shrink' src="src/assets/images/Positivus (2).svg" alt="" />
                </div>
                <div className='flex lg:flex-row flex-col lg:items-start items-center lg:gap-[40px] gap-[15px] underline'>
                    <button>About us</button>
                    <button>Services</button>
                    <button>Use Cases</button>
                    <button>Pricing</button>
                    <button className='lg:block hidden'>Blog</button>
                </div>
                <div className='lg:flex items-start gap-[20px] hidden'>
                    <img src="src/assets/images/Social icon (1).svg" alt="" />
                    <img src="src/assets/images/Social icon (2).svg" alt="" />
                    <img src="src/assets/images/Social icon (3).svg" alt="" />
                </div>
            </div>
            <div className='flex lg:items-start items-center gap-[37px] lg:gap-[154px] lg:flex-row flex-col'>
                <div className='flex flex-col items-center lg:items-start gap-[27px]'>
                    <img src="src/assets/images/Heading (4).svg" alt="" />
                    <div className='flex flex-col items-center lg:items-start gap-[20px]'>
                        <p>Email: info@positivus.com</p>
                        <p>Phone: 555-567-8901</p>
                        <div className='flex flex-col items-center lg:items-start'>
                        <p>Address: 1234 Main St</p>
                        <p>Moonstone City, Stardust State 12345</p>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col lg:py-[58px] lg:px-[40px] p-[30px] items-start gap-[20px] border rounded-[14px] bg-[#292A32] border-none text-black w-full'>
                    <input className='flex w-full py-[22px] px-[35px] items-start gap-[10px] rounded-[14px] border border-white bg-[#292A32] text-white' type="emial" placeholder='Email' />
                    <Button title='Subscribe to news' bgColor='var(--Green,#B9FF66)' borderColor='var(--Green,#B9FF66)' self_width='w-full' justify='justify-center'></Button>
                </div>
            </div>
        </div>
        <div className='lg:hidden flex items-start gap-[20px]'>
            <img src="src/assets/images/Social icon (1).svg" alt="" />
            <img src="src/assets/images/Social icon (2).svg" alt="" />
            <img src="src/assets/images/Social icon (3).svg" alt="" />
        </div>
        <div className='w-full border border-white'></div>
        <div className='flex lg:flex-row lg:gap-[40px] gap-[15px] flex-col'>
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <button className='underline cursor-pointer '>Privacy Policy</button>
        </div>
    </div>
    </>
)
}