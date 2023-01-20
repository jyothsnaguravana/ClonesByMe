import React from "react";
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonialHero.png';
import {TestimonialsData} from "../../data/testimonials";
import {Swiper , SwiperSlide} from "swiper/react";

const Testimonials =() =>{
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                <span>Top Rated </span>
                <span>Seedily say has suitable disiposal and boy.Exercise jothsna practise man with tyre and label and aggreived</span>
                </div>    
            
                <img src={Hero} alt="" />
                <div className={css.container}>
                     <span>100k</span>
                     <span>Happy Customers with us</span>
                 </div>
            </div>
            
            <div className={css.reviews}>Reviews</div>

            <div className={css.carousal}>
                 <Swiper
                     slidesPerView={3}
                     slidesPerGroup={1}
                     spaceBetween = {20}
                     className = {css.tCarousal}
                     breakpoints = { {856 :{ slidesPerView :3} , 640 :{ slidesPerView :2} }}
                 >
                    {
                        TestimonialsData.map((testimonial,i)=>(
                            <SwiperSlide>
                                <div className={css.testimonial}>
                                    <img src={testimonial.image} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                 </Swiper>
            </div>
        </div>
    )
}
export default Testimonials