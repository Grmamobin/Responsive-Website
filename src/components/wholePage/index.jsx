import React from 'react';
import MainPage from "../mainPage"
import Services from '../services';
import CaseStudies from '../caseStudies';
import InProcess from '../inProcess';
import Team from '../team';
// import Testimonials from '../testimonials';
import CotactUs from '../contactUs';
import Footer from '../footer/footer';
export default function WholePage(){
    return(
    <>
    <div className='whole-page'>
        <div className="mainPage"><MainPage/></div>
        <section className="services pt-[100px]"><Services/></section>
        <section className="caseStudies pr-[100px] pt-[100px]"><CaseStudies/></section>
        <section className="inProcess pt-[100px]"><InProcess/></section>
        <section className="team pt-[100px]"><Team/></section>
        {/* <section className="testimonials pt-[100px]"><Testimonials/></section>   STILL HAS BUG */}
        <section className="contactUs pt-[100px]"><CotactUs/></section>
        <section className="footer pt-[100px]"><Footer/></section>
    </div>
    </>
)
}