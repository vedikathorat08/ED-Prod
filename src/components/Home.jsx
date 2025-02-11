import React from "react";
import { Slide } from "react-awesome-reveal";
import bgimg from "../assests/bgimg4.jpg";


const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${bgimg})`,
            }}
        >
            <div
                className="max-w-screen mx-auto flex flex-col h-full px-4 md:flex-row"
                style={{
                    backdropFilter: "blur(1px)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            >
                <div className=" text-[#66F6F1] items-center flex flex-col mt-20 justify-center h-[600px] w-full">
                    <div>
                        <Slide triggerOnce={true}>
                            <h2 className=" text-3xl sm:text-7xl font-bold text-white mb-6 uppercase font-mono border-b ">
                                Aspire.deliver
                            </h2>
                        </Slide>
                    </div>
                    <div>
                        <Slide triggerOnce={true}>
                            <h2 className=" mx-auto text-3xl sm:text-7xl font-bold text-white mb-6 uppercase font-mono border-b">
                                inspire.repeat.
                            </h2>
                        </Slide>
                    </div>
                    <Slide triggerOnce={true}>
                        <h1 className=" text-[#00FFFF] mx-auto text-4xl sm:text-7xl font-bold  mb-6 uppercase font-serifborder-b">
                            ED-CELL PVG
                        </h1>
                    </Slide>
                    <a
                        href="#"
                        className="text-white border-2 border-[#00FFFF] py-2 px-4 rounded-md font-semibold transition hover:bg-[#4ECEE6] duration-300"
                    >
                        Venturers 2025<br></br>Coming Soon</a>
                    <div className=" bg-black fixed bottom-1 right-1 hover:opacity-100 transition duration-300">
                        <h1 className="text-white ">Scroll down</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
