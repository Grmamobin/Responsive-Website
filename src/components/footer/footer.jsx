import React from 'react';
import Button from '../button';
export default function Footer(){
    return(
    <>

    <div className='flex pt-[55px] pr-[60px] pb-[50px] pl-[60px] flex-col items-start gap-[50px] border rounded-t-[45px]  bg-[var(--Dark,#191A23)] text-white'>
        <div className='flex flex-col gap-[66px]'>
            <div className='flex w-[1121px] items-center gap-[155px]'>
                <div className='flex gap-[10.29px]'>
                    <img className='w-[29.517px] h-[29px] flex-shrink' src="src/assets/images/Icon (4).svg" alt=""/>
                    <img  className='w-[139.89px] h-[23.007px] flex-shrink' src="src/assets/images/Positivus (2).svg" alt="" />
                </div>
                <div className='flex items-start gap-[40px] underline'>
                    <button>About us</button>
                    <button>Services</button>
                    <button>Use Cases</button>
                    <button>Pricing</button>
                    <button>Blog</button>
                </div>
                <div className='flex items-start gap-[20px]'>
                    <img src="src/assets/images/Social icon (1).svg" alt="" />
                    <img src="src/assets/images/Social icon (2).svg" alt="" />
                    <img src="src/assets/images/Social icon (3).svg" alt="" />
                </div>
            </div>
            <div className='flex items-start gap-[154px]'>
                <div>
                    <img src="src/assets/images/Heading (4).svg" alt="" />
                    <p className='pt-[27px]'>Email: info@positivus.com</p>
                    <p className='pt-[20px]'>Phone: 555-567-8901</p>
                    <p className='pt-[20px]'>Address: 1234 Main St</p>
                    <p>Moonstone City, Stardust State 12345</p>
                </div>
                <div className='flex py-[58px] px-[40px] items-start gap-[20px] border rounded-[14px] bg-[#292A32] border-none text-black w-[634px]'>
                    <input className='flex w-[285px] py-[22px] px-[35px] items-start gap-[10px] rounded-[14px] border border-white bg-[#292A32] text-white' type="emial" placeholder='Email' />
                    <Button title='Subscribe to news' bgColor='var(--Green,#B9FF66)' borderColor='var(--Green,#B9FF66)' self_width='w-full' justify='justify-center'></Button>
                </div>
            </div>
        </div>
        <div className='w-[1120px] border border-white'></div>
        <div className='flex gap-[40px]'>
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <button className='underline cursor-pointer '>Privacy Policy</button>
        </div>
    </div>
    </>
)
}