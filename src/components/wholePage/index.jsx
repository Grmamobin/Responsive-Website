import React from 'react';
import MainPage from "../mainPage"
import Services from '../services';
import CaseStudies from '../caseStudies';
import InProcess from '../inProcess';
import Team from '../team';
// import Testimonials from '../testimonials';
import CotactUs from '../contactUs';
import Footer from '../footer';
export default function WholePage(){
    return(
    <>
    <div className='whole-page'>
        <div className="mainPage"><MainPage/></div>
        <section className="services pt-[100px] px-[20px]"><Services/></section>
        <section className="caseStudies px-[20px] pt-[100px] overflow-hidden"><CaseStudies/></section>
        <section className="inProcess pt-[100px] px-[20px]"><InProcess/></section>
        <section className="team pt-[100px] px-[20px]"><Team/></section>
        {/* <section className="testimonials pt-[100px]"><Testimonials/></section>   STILL HAS BUG */}
        <section className="contactUs pt-[100px] px-[20px] "><CotactUs/></section>
        <section className="footer pt-[100px]"><Footer/></section>
    </div>
    </>
)
}