import React from "react";
import BG from "../assets/image/BG.png";
import Mobile from "../assets/image/Mobile.png";
import Mobile2 from "../assets/image/Mobile2.png";
import cv from "../assets/image/cv.png";
import recent from "../assets/image/recent.png";
import Group1 from "../assets/image/Group1.png";
import Group2 from "../assets/image/Group2.png";
import V1 from "../assets/video/V1.mp4";
import V2 from "../assets/video/V2.mp4";
import V3 from "../assets/video/V3.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function HomePage1() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" flex flex-col  gap-0 md:gap-16   overflow-hidden"
            id="HomePage"
        >
            <div className="relative h-screen w-screen ">
                {/* <img
                    src={BG}
                    className="absolute object-cover w-screen h-screen  -z-10 "
                    alt=""
                /> */}
                <div className=" flex flex-col md:mt-8  gap-20 pt-16">
                    <div className="z-10 text-center flex flex-col gap-4 md:gap-0  ">
                        <div
                            data-aos="fade-up"
                            className="textWater  md:top-0 top-4  w-full h-full"
                        >
                            <div className=" text-white md:text-[64px] text-[40px] lg:text-[96px] font-semibold absolute">
                                Full stack Developer
                            </div>
                            <div className=" text-white md:text-[64px] text-[40px] lg:text-[96px] font-semibold absolute">
                                Full stack Developer
                            </div>
                        </div>
                        <div className=" text-white md:text-[64px] text-[40px] lg:text-[96px] invisible font-semibold">
                            Full stack Developer
                        </div>
                        <div
                            data-aos="fade-up"
                            className=" text-[#dcddff] font-semibold mx-12  "
                        >
                            Yo! I'm Thawin Kuwattananon This my Github!
                        </div>
                    </div>
                    <div>
                        {" "}
                        <div className=" px-4 flex gap-8 mx-auto relative justify-center items-center xl:items-end max-w-screen-2xl">
                            <div className="w-40 h-1/6  ">
                                <img
                                    src={Group1}
                                    className=" w-full h-full"
                                    alt=""
                                />
                            </div>
                            <div
                                data-aos="flip-left"
                                className="flex lg:gap-8 justify-between "
                            >
                                <div className=" lg:w-4/12 h-full w-full md:h-[28rem]  ">
                                    <Link to="/AboutMe">
                                        <img
                                            src={cv}
                                            className="object-cover card w-full h-full rounded-2xl"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className=" w-4/12 invisible lg:visible mt-28 h-96">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className=" object-cover  w-full h-full rounded-2xl"
                                        src={V3}
                                    />
                                </div>

                                <div className=" lg:w-4/12 w-full mt-8 h-full md:h-[28rem] ">
                                    <a href="#RecentProjects">
                                        <img
                                            src={recent}
                                            className="object-cover w-full h-full rounded-2xl "
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="w-40 h-1/6">
                                <img
                                    src={Group2}
                                    className=" w-full h-full"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto">
                <div id="RecentProjects"></div>
                <div className="  mx-auto  flex flex-col gap-28">
                    <div
                        data-aos="fade-up"
                        className=" text-[#fff] lg:text-6xl text-4xl lg:mt-40 md:text-5xl mt-0 text-center md:text-left md:mt-20  font-semibold opacity-50"
                    >
                        Recent Projects
                    </div>
                    <div className="flex flex-col lg:gap-60 gap-24 left-0 px-12 right-0 items-center max-w-screen-xl">
                        <div
                            className="lg:grid lg:grid-cols-3 flex-col flex  items-center gap-12"
                            data-aos="fade-up"
                        >
                            <div
                                data-aos="fade-up"
                                className=" flex flex-col gap-4"
                            >
                                <div className=" text-white text-5xl font-semibold">
                                    →
                                </div>
                                <Link to="/DevCats">
                                    {" "}
                                    <div className=" textDev md:text-5xl text-3xl font-semibold ">
                                        DevCats
                                    </div>
                                </Link>

                                <div className=" text-white">
                                    DevCats co acts as an online media platform
                                    between Developer professionals from a
                                    variety of fieldsloper and people who are
                                    looking for employment to meet a full range
                                    of customer needs anywhere,{" "}
                                    {
                                        <span className=" text-[#CC11FF]">
                                            {"      "}
                                            Read more
                                        </span>
                                    }
                                </div>
                            </div>

                            <video
                                autoPlay
                                loop
                                muted
                                // controls
                                className="h-full object-cover col-span-2 rounded-xl w-full"
                            >
                                <source
                                    src="https://res.cloudinary.com/dmu2skvrn/video/upload/v1659348287/Video/demofinal_kt6urd.mov"
                                    type="video/mp4"
                                />
                            </video>
                            {/* <iframe
                                    className="w-full h-full overflow-hidden rounded-xl"
                                    src="https://www.youtube.com/embed/_DF9M0-tyKA"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe> */}
                        </div>
                        <div
                            data-aos="fade-up"
                            className="lg:grid lg:grid-cols-3   flex flex-col-reverse  items-center gap-12 max-w-screen-xl"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                // controls
                                className="h-full object-cover col-span-2 rounded-xl w-full"
                            >
                                <source
                                    src="https://res.cloudinary.com/dmu2skvrn/video/upload/v1659358816/Video/trm/TRMfinal_kmhajn.mov"
                                    type="video/mp4"
                                />
                            </video>

                            <div className=" flex flex-col  gap-4">
                                <div className=" text-white invisible lg:visible text-5xl font-semibold">
                                    ←
                                </div>
                                <Link to="/TRM">
                                    {" "}
                                    <div className=" textTRM md:text-5xl text-3xl font-semibold">
                                        TRM
                                    </div>
                                </Link>
                                <div className=" text-white">
                                    TomorrowRich are Believer website and Mini
                                    Shop co acts as an online media platform for
                                    people who are looking for Travel with
                                    Belief,
                                    {
                                        <span className=" text-[#9922FF]">
                                            {"      "}
                                            Read more
                                        </span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="grid text-center   items-center gap-12">
                            <div className=" flex flex-col gap-4 ">
                                <div
                                    data-aos="fade-up"
                                    className=" textSocket mt-16 lg:mt-0 md:text-5xl text-3xl font-semibold"
                                >
                                    Socket io
                                </div>
                                <div data-aos="fade-up" className=" text-white">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Vero illo consequuntur,
                                    excepturi cumque,{" "}
                                    {
                                        <span className=" text-[#0099ff]">
                                            {"      "}
                                            Read more
                                        </span>
                                    }
                                </div>
                            </div>
                            <div data-aos="fade-up">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    // controls
                                    className=" object-cover col-span-2   w-full h-full rounded-xl"
                                >
                                    <source
                                        src="https://res.cloudinary.com/dmu2skvrn/video/upload/v1659348287/Video/demofinal_kt6urd.mov"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                        <div className="grid text-center items-center relative lg:mt-0 mt-16 gap-16">
                            <div
                                data-aos="fade-up"
                                className="md:text-5xl text-3xl font-semibold text-[#fff]"
                            >
                                KNOW ME BETTER
                            </div>
                            <div
                                data-aos="fade-up"
                                className="flex flex-col sm:flex-row w-full lg:gap-48 gap-12 mb-24 lg:mb-12 justify-between"
                            >
                                <div className="flex flex-col gap-0 sm:gap-8">
                                    <div className="text-white md:text-3xl text-2xl">
                                        CV resume
                                    </div>
                                    <img
                                        src={Mobile}
                                        alt=""
                                        className=" w-0 h-0 sm:w-full sm:h-full"
                                    />
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="text-white md:text-3xl text-2xl">
                                        {" "}
                                        About me
                                    </div>
                                    <Link to="/AboutMe">
                                        <img
                                            src={Mobile}
                                            alt=""
                                            className="w-0 h-0 sm:w-full sm:h-full"
                                        />
                                    </Link>
                                </div>
                            </div>

                            <a
                                href="#HomePage"
                                className="animate-pulse absolute  -bottom-10 -right-40 z-50 mr-4 mb-4 text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 11l7-7 7 7M5 19l7-7 7 7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="footer bg-black w-full h-[5%]">
                <div className="flex items-center flex-col gap-8 max-w-screen-lg mx-auto py-4 my-24">
                    <div className="flex gap-12 justify-center text-white">
                        <a href="https://github.com/ntermpmm" alt="">
                            <div>My Github</div>
                        </a>
                        <div>thawin.kuwa@gmail.com</div>
                        <div>(+66) 95 2946 993</div>
                    </div>
                    <div className="text-white justify-center opacity-70">
                        © 2022 designed and developed by me
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default HomePage1;
