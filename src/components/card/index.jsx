import React from 'react';
import PropTypes from 'prop-types'; 
export default function Card({label_Card , img_Card , arrow_label , bg_color , color}){
    return(
    <>

    <div className={`lg:flex hidden rounded-[45px] border border-[var(--Dark,#191A23)]  shadow-[0px_5px_0px_0px_#191A23] p-[50px] items-center justify-between w-full ${bg_color}`}>
    <div className='left-part flex flex-col justify-center items-start gap-[93px]'>
        <img src={`${label_Card}`} alt="" />
        <div className='flex items-center justify-center gap-[15px]'>
            <img src={`${arrow_label}`} alt="" />
            <ul>
                <li>
                    <a className={color} href="#">
                        Learn more
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="right-part">
        <img src= {`${img_Card}`} alt="" />
    </div>
    </div>


    <div className={`lg:hidden rounded-[45px] border border-[var(--Dark,#191A23)]  shadow-[0px_5px_0px_0px_#191A23] p-[50px] items-center justify-between w-full ${bg_color}`}>
    <div className='left-part flex flex-col gap-[27px] items-start'>
        <img src={`${label_Card}`} alt="" />   
        <div className="right-part flex items-end justify-center gap-[84px]">
            <img src={`${arrow_label}`} alt="" />
            <img src= {`${img_Card}`} alt="" />
        </div>
    </div>
    </div>
    </>
)
}
Card.propTypes = {
    label_Card: PropTypes.string.isRequired,
    img_Card: PropTypes.string.isRequired,
    arrow_label: PropTypes.string.isRequired,
    bg_color: PropTypes.string.isRequired,
    color: PropTypes.string,
};