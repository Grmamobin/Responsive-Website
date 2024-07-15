import React from 'react';
import TeamCard from '../teamCard';
import Button from '../button';
export default function Team(){
    return(
    <>
    <div className='lg:flex inline-flex flex-wrap lg:justify-start items-center w-full pb-[85px] text-lg lg:gap-[45px] lg:flex-row gap-[30px] justify-center'>
        <img className='w-[101px]' src="src/assets/images/Heading (2).svg" alt="" />
        <p className='text-[18px] text-center'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
    </div> 
    <div className='flex flex-col lg:flex-row gap-[40px]'>
        <TeamCard name='John lgith' job='CEO and Founder' info='10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy' pic='src/assets/images/file.png'></TeamCard>
        <TeamCard name='Jane Doe' job='Director of Operations' info='7+ years of experience in project management and team leadership. Strong organizational and communication skills' pic='src/assets/images/file (7).png'></TeamCard>
        <TeamCard name='Michael Brown' job='Senior SEO Specialist' info='5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization' pic='src/assets/images/file (6).png'></TeamCard>
    </div>
    
    <div className='flex flex-col lg:flex-row pt-[40px] gap-[40px]'>
        <TeamCard name='Emily Johnson' job='PPC Manager' info='3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis' pic='src/assets/images/file (3).png'></TeamCard>
        <TeamCard name='Brian Williams' job='Social Media Specialist' info='4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement' pic='src/assets/images/file (2).png'></TeamCard>
        <TeamCard name='Sarah Kim' job='Content Creator' info='2+ years of experience in writing and editing
        Skilled in creating compelling, SEO-optimized content for various industries' pic='src/assets/images/file (1).png'></TeamCard>
    </div>
    <div className='flex pt-[40px] justify-end items-end'>
    <Button title='See all team' bgColor='var(--Dark,#191A23)' text='white' justify='justify-center' self_width='lg:w-[269px] w-full'></Button>
    </div>
    </>
)
}