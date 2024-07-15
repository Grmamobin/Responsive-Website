import React from 'react';
import PropTypes from 'prop-types'; 
export default function Button({title , bgColor , borderColor , text , width , justify , self_width}){
    return(
    <>
    <button className={`flex py-[20px] px-[35px] items-start gap-[10px] border rounded-[14px] bg-[${bgColor}] border-[${borderColor}] text-${text} lg:w-[${width}] ${justify}  ${self_width}`}>{title}</button>
    </>
    );
}
Button.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    bgColor: PropTypes.string,
    borderColor: PropTypes.string,
    width: PropTypes.string,
    justify: PropTypes.string,
    self_width : PropTypes.string
};