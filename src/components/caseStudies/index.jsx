import React from 'react';

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
    return(
    <>
    <div className='flex justify-center items-center w-[800px] pb-[85px] text-lg gap-[45px]'>
        <img className='w-[251px]' src="src/assets/images/Heading (6).svg" alt="" />
        <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
    </div>

    <div className='flex items-start gap-[64px] border rounded-[45px] bg-[var(--Dark,#191A23)] py-[70px] px-[60px] w-[1234px]'>

    {case_studies.map((part) =>{
              return(
                <div className='flex gap-[64px]' key={part.info}>
              <div className='flex flex-col items-start gap-[20px]'>
                <div className='text-white w-[286px]'>{part.info}</div>
                
                <div className='flex items-center justify-center gap-[15px]'>
                <ul>
                    <li>
                        <a className='text-[#B9FF66]' href="#">
                            Learn more
                        </a>
                    </li>
                </ul>
                <img src="src/assets/images/blackArrow.svg" alt="" />
                </div>
              </div>
              <div className={`${part.count < 3 ? 'border border-white' : 'hidden'}`}></div>

              </div>
              
              )
            }
    )}
    </div>
    </>
)
}