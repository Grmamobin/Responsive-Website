import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import close from '../../assets/images/icon-close.svg'
export default function Sidebar({isOpen , setIsOpen}){

    useEffect(() => {
        function handleClickOutside(event) {
            if(isOpen){
                if (event.target.closest('.whole-page')) {
                    console.log('whole')
                    if(event.target.closest('aside')){
                        setIsOpen(true);
                        console.log('hi')
                        return;
                    }
                    if(event.target.closest('.whole-page .menu')){
                        console.log('hi2')
                        setIsOpen(true);
                    }
                    else{
                        console.log('hi3')
                        setIsOpen(false);
                    }

                }
            }
          }
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [isOpen, setIsOpen]);

    return(
        <>
        <div className='lg:hidden bg-black/50 fixed flex justify-end bottom-0 top-0 left-0 right-0' style={{visibility: isOpen ? "visible" : "hidden"}}>
        <aside className='w-[200px] h-[100vh] bg-white flex flex-col'>
            <button className='flex justify-end mt-[40px] mb-[40px] px-[20px]' onClick={()=>{setIsOpen(false)}}>
                <img src={close} alt="closeBtn" />
            </button>
        <nav>
            <ul className='flex flex-col items-end justify-end px-[20px]'>
                <li className='mb-[30px]'>
                <a href="#">About us</a>
                </li>
                <li className='mb-[30px]'>
                    <a href="#">Services</a>
                </li>
                <li className='mb-[30px]'>
                    <a href="#">Use Cases</a>
                </li>
                <li className='mb-[30px]'>
                    <a href="#">Pricing</a>
                </li>
                <li className='mb-[30px]'>
                    <a href="#">Blog</a>
                </li>
                
            </ul>
        </nav>
        </aside>
        </div>
        </>
    )
}
Sidebar.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    setIsOpen : PropTypes.func.isRequired,
};
