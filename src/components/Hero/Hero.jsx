import React from "react"
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {BsArrowRight} from 'react-icons/bs'
import {RiShoppingBagFill} from 'react-icons/ri'
import {motion} from 'framer-motion'

const Hero = () =>{

    const transition = {duration:3,type:"spring"}
    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>Skin Protection cream</span>

                <div className={css.text2}>
                    <span>Trendy Collections</span>
                    <span>Seedily say has suitable disiposal and boy.Exercise jothsna practise man with tyre and label and aggreived</span>
                </div>
            </div>

            {/* center part  */}
            <div className={css.wrapper}>
                <motion.div
                initial={{bottom:"4rem"}}
                whileInView ={{bottom:"0rem"}}
                 className={css.blueCircle} transition={transition}></motion.div>
                <motion.img src={HeroImg} 
                initial={{bottom:"-5rem"}} 
                whileInView ={{bottom:"0rem"}}
                transition={transition}
                alt="" width={600}/>


                <motion.div 
                transition={transition}
                initial={{right:"4%"}}
                whileInView = {{right:"-3%"}}
                className={css.cart2}>
                    <RiShoppingBagFill/>
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* right part  */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>

                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>

                </div>
            </div>
        </div>
    )
}
export default Hero