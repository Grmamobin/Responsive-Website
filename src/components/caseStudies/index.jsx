import React from 'react';
import mainHead from  './../../assets/images/Heading (6).svg';
import blackArrow from './../../assets/images/blackArrow.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.css'
export default function CaseStudies(){
  const case_studies =  [
    {
      info : "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      count:1
    },
    {
      info : "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      count:2
    },
    {
      info : "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      count:3
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};
    return(
    <>
    <div className='flex justify-start items-center w-full pb-[85px] text-lg gap-[45px] flex-col lg:flex-row'>
        <img className='w-[251px] h-[51px]' src={mainHead} alt="" />
        <p className='text-[18px] text-center lg:text-left lg:w-[580px]'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
    </div>

    <div className='hidden lg:flex items-start gap-[64px] border rounded-[45px] bg-[var(--Dark,#191A23)] py-[70px] px-[60px] w-full'>

    {case_studies.map((part , index) =>{
              return(
                <div className={`flex ${index==2? 'gap-0': 'gap-[64px]'} `} key={part.info}>
              <div className='flex flex-col items-start gap-[20px]'>
                <div className='text-white w-full'>{part.info}</div>
                
                <div className='flex items-center justify-center gap-[15px]'>
                <ul>
                    <li>
                        <a className='text-[#B9FF66]' href="#">
                            Learn more
                        </a>
                    </li>
                </ul>
                <img src={blackArrow} alt="" />
                </div>
              </div>
              <hr className={`${part.count < 3 ? 'bg-white w-[1px] h-[186px] ' : 'hidden'} lg:block hidden`}/>
              </div>
              
              )
            }
    )}
    </div>

  
    <Slider
    {...settings}
     className=' lg:hidden'>
    {case_studies.map((parts) =>(
      <div className='swap flex flex-row lg:hidden gap-[20px]' key={parts.info}>
    <div className={`flex flex-col py-[42px] px-[50px] items-start  border rounded-[45px] bg-[var(--Dark,#191A23)] text-white  gap-[40px] h-[287px]`} >
      <div>{parts.info}</div>
      <div className='flex items-start justify-start gap-[15px] w-[250px]'>
          <ul>
              <li>
                  <a className='text-[#B9FF66]' href="#">
                      Learn more
                  </a>
              </li>
          </ul>
          <img src={blackArrow} alt="" />
        </div>
    </div>
    </div>
    ))}
    </Slider>
    
    </>
)
}