import React from "react";

import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <div name="about" className="w-full h-full text-[#D3D4D7] sm:my-3">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-3 text-center">
                    <Slide triggerOnce={true}>
                        <p className="text-4xl font-bold inline  mt-20 text-[#00FFFF] uppercase">
                            About
                        </p>
                    </Slide>
                </div>
                <Fade triggerOnce={true}>
                    <p className="text-xl mt-5 text-justify mx-3">
                    Welcome to PVGCOET's Entrepreneurship Cell (ED-Cell), a student-led organization with a 20-year legacy. Our mission is to foster entrepreneurship, empowering innovators to transform ideas into ventures. Through workshops, mentorship, and networking, we provide essential skills and resources. Join us to connect, access resources, and embark on an innovative entrepreneurial journey.
                    </p>
                </Fade>

                <br />
            </div>
        </div>
    );
};

export default About;
