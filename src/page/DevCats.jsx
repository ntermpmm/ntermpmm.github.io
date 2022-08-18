import React from "react";
import { Link } from "react-router-dom";
import BG from "../assets/image/BG.png";
import CatHome from "../assets/image/Cathome.png";
import Devcats from "../assets/image/BGdevcats.jpeg";
import TRMBG from "../assets/image/TRMBG.png";
import TRMBG1 from "../assets/image/TRMBG1.png";
import bgDevcats from "../assets/image/bgDevcats.png";

import Mobile from "../assets/image/Mobile.png";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselLanding from "../components/carousel/CarouselLanding";
import Typewriters from "../components/typewriter/Typewriters";
import Footer from "../components/footer/Footer";
AOS.init();

function DevCats() {
    const data = [
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739760/devcats/01_v2qfqa.png",
            // caption: 'Design and develop all types of Web Applications',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739753/devcats/02_kc3qoy.png",
            // caption: 'The website offers products or services.',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739751/devcats/03_ml2av9.png",
            // caption: 'Build Web with Php Laravel, VueJs',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739752/devcats/04_upyruz.png",
            // caption: 'Get RESPONSIVE WEBSITE (HTML&CSS)',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739754/devcats/05_lbr5at.png",
            // caption: 'Web Design & Development Programming',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739751/devcats/06_kyvbk3.png",
            // caption: 'Get an Android Application || Student Project',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739755/devcats/07_qtgzeu.png",
            // caption: 'Developing back-end systems',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739818/devcats/07.1_fywvc2.png",
            // caption: 'Design all types of ux/ui designers with Figma.',
        },

        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739753/devcats/08_bbaiuw.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739819/devcats/08.1_fw3eq5.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739755/devcats/09_t3wg0j.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739755/devcats/10_ehwiyj.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739758/devcats/11_h62gpt.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739756/devcats/12_bu5uos.png",
            // caption: 'Darjeeling',
        },

        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739756/devcats/15_sfgusb.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739758/devcats/16_mnrdow.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739758/devcats/17_jga1rf.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739759/devcats/18_kikfui.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739760/devcats/19_n6ovmb.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739759/devcats/20_nvxgvl.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660739764/devcats/21_oqhvbe.png",
            // caption: 'Darjeeling',
        },
    ];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-20 "
            id="DevCats"
        >
            <div className="relative w-screen ">
                <button className=" absolute flex justify-between w-screen px-12 py-4 text-[#E0DDF9] font-semibold items-baseline  opacity-70 z-[10000]">
                    {" "}
                    <Link to="/">
                        <div className=" ">← Back to Home</div>
                    </Link>
                    <Link to="/">
                        <div className="  ">Thawin Kuwattananon</div>
                    </Link>
                </button>
                <div className=" relative w-full h-full flex flex-col justify-center  ">
                    <img
                        src={Devcats}
                        className="absolute w-full h-full object-cover -z-10  "
                        alt=""
                    />

                    <div className=" grid md:grid-cols-2  items-center p-12 py-32 max-w-screen-2xl mx-auto">
                        <div className="col-span-1 flex flex-col  md:px-0 gap-4 xl:gap-12 lg:gap-8  ">
                            <div className=" flex flex-col xl:gap-12 lg:gap-8  gap-4 ">
                                <Typewriters
                                    className={
                                        "  xl:text-[100px] lg:text-[78px] md:text-[60px] sm:text-6xl text-5xl  text-white   "
                                    }
                                />
                                <div className="text-2xl sm:text-3xl lg:text-[44px] md:text-[32px] xl:text-[60px]   xl:space-y-8  lg:space-y-4 ">
                                    <div className="  text-orange-500">
                                        that can read
                                    </div>

                                    <div className="  text-orange-500">
                                        your mind
                                    </div>
                                </div>
                            </div>
                            <div className=" text-md xl:pr-32  md:text-[16px] pr-8 md:pr-0  lg:text-xl text-orange-200 opacity-60 hidden sm:block">
                                Enjoy the best web developer, advanced
                                reccomendation algorithms and concerts calendar
                                all in one package
                            </div>
                        </div>
                        <div className="col-span-1 sm:pl-28 md:pl-0">
                            <img
                                className=" w-96 md:w-full "
                                src={CatHome}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="absolute top-0 bottom-0 left-0 right-0 max-w-screen-2xl mx-auto grid ">
                        {/* ================================== Button Home ===================================== */}

                        <button className="absolute cursor-pointer bottom-12 left-0 right-0 flex justify-center max-w-screen-lg mx-auto">
                            <a
                                href="#Section1"
                                alt=""
                                className="animate-bounce cursor-pointer text-white col-start-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 cursor-pointer "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                                    />
                                </svg>
                            </a>

                            {/* <button className="btn glass h-24 z-1 hover:scale-110 duration-300 ">
              Mobile Application
            </button>
            <button className="btn glass h-24  hover:scale-110 duration-300 z-10">
              Website development
            </button>
            <button className="btn glass h-24 z-1  hover:scale-110 duration-300 ">
              All Types
            </button> */}
                        </button>
                    </div>
                </div>
            </div>
            <div
                id="Section1"
                className="max-w-screen-xl mx-auto  relative  flex px-12 lg:px-8 flex-col gap-52"
            >
                <div className=" text-center flex flex-col gap-20">
                    <div className="flex flex-col gap-4 items-center">
                        {/* ======================== Scope & Feature  ============================ */}

                        <div className="md:flex justify-around w-full">
                            {/* ======================== Scope  ============================ */}
                            <div className="flex flex-col items-center">
                                <div class="gap-6 flex items-center my-4 mt-12">
                                    {/* <div class="w-full h-[1px] bg-white/30"></div> */}
                                    <h1
                                        data-aos="fade-up"
                                        class=" textDev text-3xl sm:text-5xl  text-center"
                                    >
                                        Scope
                                    </h1>
                                    {/* <div class="w-full h-[1px] bg-white/30"></div> */}
                                </div>
                                <div
                                    data-aos="fade-up"
                                    className="flex flex-col items-center text-text"
                                >
                                    <div className=" font-bold flex gap-4   ">
                                        <div className=" opacity-80">
                                            Project Name
                                        </div>
                                        DevCats
                                    </div>
                                    <div className=" font-bold flex gap-4   ">
                                        <div className=" opacity-80">
                                            Position
                                        </div>
                                        Front-end(Lead), Back-end, UI Design
                                    </div>
                                    <div className=" font-bold flex gap-4">
                                        <div className=" opacity-80">
                                            Launched
                                        </div>
                                        <div>2022</div>
                                    </div>
                                    <div className=" font-bold flex gap-4">
                                        <div className=" opacity-80">
                                            Duration
                                        </div>
                                        <div>3 weeks</div>
                                    </div>
                                </div>
                            </div>
                            {/* ========================  Feature  ============================ */}
                            <div className="flex flex-col items-center">
                                <div class=" gap-6 flex items-center my-4 mt-12 ">
                                    <h1
                                        data-aos="fade-up"
                                        class=" textDev text-3xl sm:text-5xl   text-center"
                                    >
                                        Feature
                                    </h1>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    className="flex flex-col items-center text-text"
                                >
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Basic feature(CRUD)
                                    </div>
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - User and Developer Authentication
                                    </div>
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Create Content & Jodit Editor
                                    </div>
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Live Chat(Real time) Socket Io
                                    </div>
                                    <div className="font-bold flex gap-4  text-text">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Make Orders & Order Tagging
                                    </div>
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Payment and Review
                                    </div>

                                    <div className="font-bold flex gap-4  text-text">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Anonymous Review
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ======================== Programs | Tools | Packages  ============================ */}
                        <div className=" max-w-screen-xl flex flex-col gap-4">
                            <div
                                data-aos="fade-up"
                                class="w-full gap-6 flex items-center my-4 mt-12"
                            >
                                <div class="w-full h-[1px] bg-white/30"></div>
                                <h5 class="w-full text-text xl:text-[28px] lg:text-[20px] text-[18px]   text-center">
                                    Programs | Tools | Packages
                                </h5>
                                <div class="w-full h-[1px] bg-white/30"></div>
                            </div>
                            <div
                                data-aos="fade-up"
                                className="text-text px-4 lg:px-0"
                            >
                                figma, React, Node.js, MySQL, Jodit Editor,
                                Socket io ,axios, bcryptjs, cloudinary, cors,
                                dotenv, express, jsonwebtoken, morgan, multer,
                                sequelize, headlessui/react, heroicons,
                                javascript-time-ago, react-hook-form, yup,
                                tailwindcss
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <CarouselLanding data={data} width={"100%"} />

                        <p
                            data-aos="fade-up"
                            className="text-text sm:text-[18px] text-md"
                        >
                            DevCats co acts as an online media platform between
                            Developer professionals from a variety of fields
                            developer and people who are looking for employment
                            to meet a full range of customer needs anywhere.
                        </p>
                    </div>
                </div>
                {/* ====================== Overview ====================== */}
                <div className="max-w-screen-xl mx-auto flex  flex-col gap-12">
                    <h1
                        data-aos="fade-up"
                        className=" textSocket  text-center text-3xl sm:text-5xl  md:text-left"
                    >
                        Overview
                    </h1>

                    <div className="flex flex-col md:gap-60 gap-32 ">
                        {/* =========================  Register and sign in  ============================= */}
                        <div
                            data-aos="fade-up"
                            className=" md:gap-20 gap-12 lg:grid lg:grid-cols-3 flex-col flex  items-center "
                        >
                            <iframe
                                src="https://www.youtube.com/embed/TIc7xkN8Rgw?clip=UgkxowOBF5XnBzLFd-zCq-mQGRwl3gNEvpdW&amp;clipt=EM_xARjs9AQ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className=" rounded-xl col-span-2 w-full sm:h-96 h-60"
                            ></iframe>

                            <div className="text-text   bg-white p-6 rounded-xl w-full">
                                <p class="sm:text-[20px] text-xl font-semibold">
                                    Register and sign in
                                </p>
                                <p class="sm:text-[18px] text-md">
                                    <br />
                                    Quick and Easy step for register.
                                    <br />
                                    <br />
                                    - Change password by Email
                                    <br />
                                    - JWT token, Bcrypt
                                    <br />
                                    - Authentication
                                    <br />
                                    - Validation
                                    <br />- Update information
                                </p>
                            </div>
                        </div>
                        {/* =========================  Create Content and Jodit Editor  ============================= */}
                        <div
                            data-aos="fade-up"
                            className="lg:grid lg:grid-cols-3  flex-col-reverse flex gap-12 md:gap-20 items-center "
                        >
                            <div className="text-text w-full bg-white p-6 rounded-xl ">
                                <p class="sm:text-[20px] text-xl font-semibold">
                                    Create Content and Jodit Editor
                                </p>
                                <p class="sm:text-[18px] text-md">
                                    <br />
                                    Developer can add their products with easy
                                    step and more comfortable with Jodit Editor.
                                    <br />
                                    <br />
                                    - Jodit Editor
                                    <br />
                                    - Developer Authentication
                                    <br />
                                    - Input Validation
                                    <br />- Limit add Package Validation
                                </p>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/2cD32Gk6UN4"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="rounded-xl col-span-2 w-full sm:h-96 h-60"
                            ></iframe>
                        </div>
                        {/* =========================  Live Chat, Payment and Review  ============================= */}
                        <div
                            data-aos="fade-up"
                            className="lg:grid lg:grid-cols-3 flex-col flex gap-12 md:gap-20 items-center "
                        >
                            <iframe
                                // width="560"
                                // height="315"
                                src="https://www.youtube.com/embed/8Ml905fmQ4c"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className=" rounded-xl col-span-2 w-full sm:h-96 h-60"
                            ></iframe>
                            <div className="text-text w-full bg-white p-6 rounded-xl ">
                                <p class="sm:text-[20px] text-xl font-semibold">
                                    Live Chat(Real time), Payment and Review
                                </p>
                                <p class="sm:text-[18px] text-md">
                                    <br />
                                    User can make order and pay with realtime
                                    chat. by the end of the order, Let's review!
                                    <br />
                                    <br />
                                    - Socket io server(Real time Chat)
                                    <br />
                                    - Create and Submit order
                                    <br />
                                    - Make an Revision Order
                                    <br />
                                    - Tracking Order
                                    <br />
                                    - Make an Payment
                                    <br />
                                    - Make an Review
                                    <br />- Anonymous Review
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-12">
                            <div className="grid text-center  items-center gap-8">
                                <div data-aos="fade-up" className=" h-full ">
                                    <iframe
                                        src="https://www.youtube.com/embed/TIc7xkN8Rgw"
                                        title="YouTube video player"
                                        frameborder="0"
                                        className="rounded-xl w-full xl:h-[700px] lg:h-[600px] sm:h-96 h-60"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                                <p
                                    data-aos="fade-up"
                                    className="text-text sm:text-[18px] text-md"
                                >
                                    DevCats is a group project at Code Camp
                                    Thailand. For more information Please
                                    contact.
                                </p>
                            </div>
                            <div className="flex flex-col gap-12 items-center font-semibold">
                                <div
                                    data-aos="fade-up"
                                    class="w-full gap-6 flex items-center my-4 mt-12"
                                >
                                    <div class="w-full h-[1px] bg-white/30"></div>
                                    <h5 class="w-full textTRM text-[28px] pb-2 text-center">
                                        Navigate
                                    </h5>
                                    <div class="w-full h-[1px] bg-white/30"></div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    className="flex flex-col md:flex-row text-center gap-8 "
                                >
                                    <Link to="/">
                                        <div className=" text-text ">
                                            Back to Home{" "}
                                        </div>
                                    </Link>
                                    <Link to="/AboutMe">
                                        <div className=" text-text ">My CV</div>
                                    </Link>
                                    <Link to="/Trm">
                                        <div className=" text-text ">
                                            Tomorrow Rich Project{" "}
                                        </div>
                                    </Link>
                                    <Link to="/DevCats">
                                        <div className=" text-text ">
                                            Socket io
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    href="#DevCats"
                    // onClick={() => window.location.replace("#section1")}
                    className="animate-pulse absolute  -bottom-10 right-0 z-50 mr-4 mb-4 text-text"
                    // data-aos="fade-in"
                    // data-aos-offset="100"
                    // data-aos-duration="3000"
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

            <Footer padding={"py-12"} />
        </motion.div>
    );
}

export default DevCats;
