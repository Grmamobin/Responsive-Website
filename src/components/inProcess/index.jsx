import React, { useState } from 'react';

export default function InProcess() {
  const [clicked, setClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const working_process = [
    {
      info: "Consultation",
      count: 1
    },
    {
      info: "Research and Strategy Development",
      count: 2
    },
    {
      info: "Implementation",
      count: 3
    },
    {
      info: "Monitoring and Optimization",
      count: 4
    },
    {
      info: "Reporting and Communication",
      count: 5
    },
    {
      info: "Continual Improvement",
      count: 6
    },
  ];
  return (
    <>
    <div className='flex justify-start items-center w-full pb-[85px] text-lg gap-[45px] flex-col lg:flex-row'>
        <img className='w-[398px]' src="src/assets/images/Heading (7).svg" alt="" />
        <p className='text-[18px] text-center'>Step-by-Step Guide to Achieving Your Business Goals</p>
    </div> 
  <div className='w-full flex flex-col gap-[20px]'>
      {working_process.map((part) => {
        const imageSource = clicked[part.count] ? "src/assets/images/Plus icon.svg" : "src/assets/images/Plus.svg";
        return (
          <div className='gap-[30px]' key={part.info}>
            <div className='flex flex-col gap-[30px] w-full sm:py-[41px] sm:px-[60px] p-[30px] border rounded-[45px] border-[#191A23] bg-[var(--Green,#B9FF66)] shadow-[0px_5px_0px_0px_#191A23]' style={{backgroundColor : clicked[part.count]? "#B9FF66" : "#F3F3F3"}}>
              <div className='flex justify-between '>
                <div className='flex items-center gap-[25px]'>
                  <h1 className='font-spaceGrotesk font-medium sm:text-[60px] text-[30px]'>0{part.count}</h1>
                  <p className='font-spaceGrotesk font-bold sm:text-[30px] text-[18px]'>{part.info}</p>
                </div>
                <img src={imageSource} alt="" onClick={() => setClicked({ ...clicked, [part.count]: !clicked[part.count]})} />
              </div>
              <div className='border border-black w-full' style={{display:clicked[part.count]? "block" : "none"}}></div>
              <p className='text-[18px]' style={{display:clicked[part.count]? "block" : "none"}}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
            </div>
          </div>
        )
      })}

  </div>
    </>
  )
}
