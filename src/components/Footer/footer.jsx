import React from "react";
import css from './footer.module.css';
import Logo from '../../assets/logo.png';
import {InboxIcon ,PhoneIcon ,LocationMarkerIcon ,LoginIcon ,UsersIcon ,LinkIcon} from "@heroicons/react/outline";

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            
            <div className={css.cFooter}>
                {/* one of four  */}
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon}/>
                            <span>111 north avenue Orlando Razam</span>
                        </span>

                        <span className="css.pngLine">
                            {" "}
                            <PhoneIcon className={css.icon}/>
                            <a href="tel:352-386-999">352-386-4413</a>
                        </span>

                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon}/>
                            <a href="mailto:support@amazon.com">Support Amazon.com</a>
                        </span>
                    </div>
                </div>



                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon}/>Sign In
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon}/>
                            <a href="/about"><p>About Us</p></a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon}/>
                            <p>Safety Privacy & Terms </p>
                        </span>
                    </div>
                </div>

                
            </div>

            <div className={css.copyRight}>
                    <span>Copyrights by @2022 amazon ,Inc..,</span>
                    <span>All rights reserved</span>
                </div>

        </div>
    )
}

export default Footer ;