import React from 'react';
import PropTypes from 'prop-types'; 
export default function Button({title , classN}){
    return(
    <>
    <button className={`flex py-[20px] px-[35px] items-start gap-[10px] border rounded-[14px] ${classN}`}>{title}</button>
    </>
    );
}
Button.propTypes = {
    title: PropTypes.string,
    classN: PropTypes.string,
};


// bg-[${bgColor}] border-[${borderColor}] text-${text} lg:w-[${width}] ${justify}  