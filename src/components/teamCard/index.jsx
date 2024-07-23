import React from 'react';
import PropTypes from 'prop-types'; 
import icon from '../../assets/images/Social icon.svg'
export default function TeamCard({name , job , info , pic }){
    return(
    <>
    <div className='flex w-full pt-[40px] pr-[35px] pl-[35px] pb-[40px] flex-col items-start gap-[10px] rounded-[45px] border border-[#191A23] bg-white shadow-[0px_5px_0px_0px_#191A23]'>
        <div className='flex flex-col items-start gap-[28px]'>
        <div className='flex flex-3 items-end  gap-[20px]'>
            <div className='flex flex-3 items-end  gap-[20px]'>
                <img className='w-[97.823px] h-[97.823px]' src={pic} alt="" />
                <div>
                    <h4 className='font-spaceGrotesk font-medium text-[20px]'>{name}</h4>
                    <p>{job}r</p>
                </div>
            </div>
            <img className='self-start' src={icon} alt="" />
        </div>

        <div className='border-t border-black w-full'></div>
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