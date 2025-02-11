import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div name="contact">
            <section className="">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg ">
                    <Slide triggerOnce={true}>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#00FFFF] text-center uppercase">
                            Contact Us
                        </h2>

                        <p className="mb-8 lg:mb-16 font-light text-[#D1D7E0] dark:text-gray-400 sm:text-xl text-center">
                            Lets get in touch
                        </p>
                    </Slide>
                    <Fade triggerOnce={true}>
                        <div className="flex justify-center">
                            <div>
                                <a href="https://www.instagram.com/edc_pvg?igsh=MW9ydzI4emFkODE0bg==" aria-label="Instagram">
                                    <FaInstagram className="text-white text-4xl hover:text-gray-300 transition-colors mr-5 ml-5" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/company/pvgedc/" aria-label="LinkedIn">
                                    <FaLinkedin className="text-white text-4xl hover:text-gray-300 transition-colors mr-5 ml-5" />
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/918624870960" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <FaWhatsapp className="text-white text-4xl hover:text-green-300 transition-colors mr-5 ml-5" />
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    );
};

export default Contact;
