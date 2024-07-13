import React from 'react';
import PropTypes from 'prop-types'; 
export default function TeamCard({name , job , info , pic }){
    return(
    <>
    <div className='flex w-[387px] h-[331px] pt-[40px] pr-[35px] pl-[35px] pb-[40px] flex-col items-start gap-[10px] rounded-[45px] border border-[#191A23] bg-white shadow-[0px_5px_0px_0px_#191A23]'>
        <div className='flex flex-col items-start gap-[28px]'>
        <div className='flex flex-3 items-end  gap-[20px]'>
            <img className='w-[97.823px] h-[97.823px]' src={pic} alt="" />
            <div>
                <h4 className='font-spaceGrotesk font-medium text-[20px]'>{name}</h4>
                <p>{job}r</p>
            </div>
            <img className='self-start' src="src/assets/images/Social icon.svg" alt="" />
        </div>

        <div className='border border-black w-[317px]'></div>
        <p>{info}</p>
    </div>
    </div>
    </>
)
}
TeamCard.propTypes = {
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
};