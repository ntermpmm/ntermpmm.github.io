import React from "react";
import { Link } from "react-router-dom";
import TRMBG from "../assets/image/TRMBG.png";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselLanding from "../components/carousel/CarouselLanding";
import Footer from "../components/footer/Footer";
AOS.init();

function Trm() {
    const data = [
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749138/trm/01_rttkhp.png",
            // caption: 'Design and develop all types of Web Applications',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749155/trm/02_fekvqo.png",
            // caption: 'The website offers products or services.',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749148/trm/03_bm9pry.png",
            // caption: 'Build Web with Php Laravel, VueJs',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749148/trm/04_zlxzcr.png",
            // caption: 'Get RESPONSIVE WEBSITE (HTML&CSS)',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749151/trm/05_txyfqf.png",
            // caption: 'Web Design & Development Programming',
        },

        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749152/trm/06_t3pkit.png",
            // caption: 'Developing back-end systems',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749131/trm/07_s5xkjt.png",
            // caption: 'Design all types of ux/ui designers with Figma.',
        },

        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749146/trm/10_nyctuv.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749132/trm/11_pnrsrw.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749134/trm/12_fbohx7.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749135/trm/13_ebbd8t.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749134/trm/14_l3mjko.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749137/trm/15_ftimjl.png",
            // caption: 'Darjeeling',
        },

        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749133/trm/17_pj4yci.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749135/trm/18_tzgdme.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749136/trm/19_cpihe2.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749138/trm/20_ss1ooe.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749138/trm/21_heplzc.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749137/trm/22_kj1wmo.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749139/trm/23_f8ssyy.png",
            // caption: 'Darjeeling',
        },
        {
            image: "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749139/trm/24_xxxyey.png",
            // caption: 'Darjeeling',
        },
    ];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-20 "
            id="trm"
        >
            <div className="relative w-screen h-screen">
                <div className=" absolute flex justify-between w-screen px-12 py-4 text-[#E0DDF9] font-semibold items-baseline  opacity-70 z-50">
                    {" "}
                    <Link to="/">
                        <div className=" ">← Back to Home</div>
                    </Link>
                    <Link to="/">
                        <div className=" text-white ">Thawin Kuwattananon</div>
                    </Link>
                </div>
                {/*=========================================== Section 3 =========================================== */}
                {/* <div className="relative box">
                    <img
                        src={
                            "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749146/trm/10_nyctuv.png"
                        }
                        alt=""
                        className="absolute w-1/5 left-56 rounded-2xl "
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    />
                    <img
                        src={
                            "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749138/trm/01_rttkhp.png"
                        }
                        alt=""
                        className="absolute w-1/5 top-96 rounded-2xl"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-delay="300"
                    />

                    <img
                        src={
                            "https://res.cloudinary.com/dmu2skvrn/image/upload/v1660749134/trm/12_fbohx7.png"
                        }
                        alt=""
                        className="absolute w-1/5 right-0 top-48 rounded-2xl"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="200"
                    />
                </div> */}

                <div className="relative flex flex-col items-center justify-center  w-full h-full">
                    <img
                        src={TRMBG}
                        className="absolute w-full h-full object-cover -z-10 "
                        alt=""
                    />
                    <div data-aos="fade-up" className="textWater w-full -mt-20">
                        <div className=" TRM absolute  font-semibold lg:text-[96px] md:text-[72px] sm:text-[60px] text-[40px] text-12">
                            Tomorrow Rich
                        </div>
                        <div className="text-white absolute TRM  font-semibold lg:text-[96px] md:text-[72px] sm:text-[60px] text-[40px] text-12">
                            Tomorrow Rich
                        </div>
                    </div>
                    <div className="text-white  invisible   font-semibold lg:text-[96px] md:text-[72px] sm:text-[60px] text-[40px] text-12">
                        Tomorrow Rich
                    </div>
                    <div
                        data-aos="fade-up"
                        className="tracking-widest text-[#94b9b2] lg:text-2xl md:text-2xl text-xl font-semibold"
                    >
                        Believer website and Mini Shop
                    </div>
                    {/* <div className="text-emerald-300 font-bold">
                        Believer website and Mini Shop
                    </div> */}
                    <div className="absolute bottom-16 text-white left-0 right-0 flex justify-center ">
                        {/* <div className=" text-white ">Thawin Kuwattananon</div> */}
                        <a
                            href="#Section1"
                            className="animate-pulse arrow-circle-down text-text_color"
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
                                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div
                id="Section1"
                className="max-w-screen-xl mx-auto  relative  flex px-12 lg:px-8 flex-col gap-52"
            >
                <div className=" text-center flex flex-col gap-20">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="md:flex justify-around w-full">
                            <div className="flex flex-col items-center">
                                <div class="gap-6 flex items-center my-4 mt-12">
                                    {/* <div class="w-full h-[1px] bg-white/30"></div> */}
                                    <h1
                                        data-aos="fade-up"
                                        class=" text-[#caad79] text-3xl sm:text-5xl  text-center"
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
                                        Tomorrow Rich
                                    </div>
                                    <div className=" font-bold flex gap-4   ">
                                        <div className=" opacity-80">
                                            Position
                                        </div>
                                        Front-end, Back-end, UI Design
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
                            <div className="flex flex-col items-center">
                                <div class=" gap-6 flex items-center my-4 mt-12">
                                    {/* <div class="w-full text-[#caad79] h-[1px] bg-white/30"></div> */}
                                    <h1
                                        data-aos="fade-up"
                                        class=" text-[#caad79]   text-3xl sm:text-5xl   text-center"
                                    >
                                        Feature
                                    </h1>
                                    {/* <div class="w-full h-[1px] bg-white/30"></div> */}
                                </div>
                                <div
                                    data-aos="fade-up"
                                    className="flex flex-col items-center"
                                >
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Basic feature(CRUD)
                                    </div>
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Admin feature(CRUD)
                                    </div>
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Create Content & item
                                    </div>
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Make Orders
                                    </div>
                                    <div className="font-bold flex gap-4  ">
                                        {/* <div className=" opacity-80">Position</div> */}
                                        - Manage Orders
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" max-w-screen-xl flex flex-col gap-4">
                            <div
                                data-aos="fade-up"
                                class="w-full gap-6 flex items-center my-4 mt-12"
                            >
                                <div class="w-full h-[1px] bg-white/30"></div>
                                <h5 class="w-full  xl:text-[28px] lg:text-[20px] text-[18px]   text-center">
                                    Programs | Tools | Packages
                                </h5>
                                <div class="w-full h-[1px] bg-white/30"></div>
                            </div>
                            <div data-aos="fade-up" className=" px-4 lg:px-0">
                                figma, React, Node.js, MySQL, axios, bcryptjs,
                                cloudinary, cors, dotenv, express, jsonwebtoken,
                                morgan, multer, sequelize, headlessui/react,
                                heroicons, javascript-time-ago, qrcode.react,
                                react-hook-form, yup, tailwindcss
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <CarouselLanding data={data} width={"100%"} />
                        <p
                            data-aos="fade-up"
                            className=" sm:text-[18px] text-md"
                        >
                            TomorrowRich are Believer website and Mini Shop co
                            acts as an online media platform for people who are
                            looking for Travel with Belief
                        </p>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto flex  flex-col gap-20">
                    <h1
                        data-aos="fade-up"
                        className=" text-[#caad79] text-center text-3xl sm:text-5xl  md:text-left"
                    >
                        Overview
                    </h1>
                    <div className="flex flex-col md:gap-60 gap-32">
                        {/* ========== Login, Register and Manage Profile ============ */}
                        <div
                            data-aos="fade-up"
                            className=" md:gap-20 gap-12 lg:grid lg:grid-cols-3 flex-col flex  items-center "
                        >
                            <iframe
                                src="https://www.youtube.com/embed/Yoo-U773djM"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="rounded-xl col-span-2 w-full sm:h-96 h-60"
                            ></iframe>
                            {/* <iframe
                                // width="560"
                                // height="315"
                                src="https://www.youtube.com/embed/2a_lGc8uLW0"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="col-span-2  rounded-xl w-full h-[500px]"
                            ></iframe> */}
                            <div className=" w-full">
                                <p class="sm:text-[20px] text-xl font-semibold">
                                    Login, Register and Manage Profile
                                </p>
                                <p class="sm:text-[18px] text-md">
                                    <br />
                                    Easy step for register. and Managing Profile
                                    <br />
                                    <br />
                                    - JWT token, Bcrypt
                                    <br />
                                    - YUP validation
                                    <br />
                                    - User & Admin authentication
                                    <br />
                                    - Update profile
                                    <br />- Change password
                                </p>
                            </div>
                        </div>
                        {/* ==========  Admin page (Management) ============ */}
                        <div
                            data-aos="fade-up"
                            className="lg:grid lg:grid-cols-3  flex-col-reverse flex gap-12 md:gap-20 items-center "
                        >
                            <div className=" w-full">
                                <p class="sm:text-[20px] text-xl font-semibold">
                                    Admin page (Management)
                                </p>
                                <p class="sm:text-[18px] text-md">
                                    <br />
                                    Quick and Easy step for register.
                                    <br />
                                    <br />
                                    - Admin authentication
                                    <br />
                                    - Management page
                                    <br />- Create Content & Item
                                </p>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/Z5d0xRUocjw"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="rounded-xl col-span-2 w-full sm:h-96 h-60"
                            ></iframe>
                        </div>
                        {/* ========== Create Item ============ */}
                        <div
                            data-aos="fade-up"
                            className="lg:grid lg:grid-cols-3 flex-col flex gap-12 md:gap-20 items-center "
                        >
                            <iframe
                                src="https://www.youtube.com/embed/JFOGSiRqCrU"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="rounded-xl col-span-2 w-full sm:h-96 h-60"
                            ></iframe>

                            <div className=" w-full">
                                <p class="sm:text-[20px] text-xl font-semibold">
                                    Create Item
                                </p>
                                <p class="sm:text-[18px] text-md">
                                    <br />
                                    Quick and Easy step for create Item.
                                    <br />
                                    <br />
                                    - Admin authentication
                                    <br />
                                    - YUP validation
                                    <br />
                                    - Upload image
                                    <br />
                                </p>
                            </div>
                        </div>
                        {/* ==========  Create Content ============ */}
                        <div
                            data-aos="fade-up"
                            className="lg:grid lg:grid-cols-3  flex-col-reverse flex gap-20 items-center "
                        >
                            <div className=" w-full">
                                <p class="sm:text-[20px] text-xl font-semibold">
                                    Create Content
                                </p>
                                <p class="sm:text-[18px] text-md">
                                    <br />
                                    Quick and Easy step for create Content.
                                    <br />
                                    <br />
                                    - Admin authentication
                                    <br />
                                    - YUP validation
                                    <br />
                                    - Multiple Cloudinary image upload
                                    <br />
                                </p>
                            </div>

                            <iframe
                                className="rounded-xl col-span-2 w-full sm:h-96 h-60"
                                src="https://www.youtube.com/embed/3ZWvJKDfx1E"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div
                            data-aos="fade-up"
                            className="flex flex-col gap-12"
                        >
                            <div className="grid text-center  items-center gap-8">
                                <div className=" h-full ">
                                    <iframe
                                        // width="560"
                                        // height="315"
                                        src="https://www.youtube.com/embed/2a_lGc8uLW0"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        className="rounded-xl w-full xl:h-[700px] lg:h-[600px] sm:h-96 h-60"
                                    ></iframe>
                                </div>
                                <p className=" sm:text-[18px] text-md">
                                    TomorrowRich a personal project at Code Camp
                                    Thailand. For more information Please
                                    contact.
                                </p>
                            </div>
                            <div className="flex flex-col gap-12 items-center font-semibold">
                                <div class="w-full gap-6 flex items-center my-4 mt-12">
                                    <div class="w-full h-[1px] bg-white/30"></div>
                                    <h5
                                        data-aos="fade-up"
                                        class="w-full textTRM text-[28px] pb-2  text-center"
                                    >
                                        Navigate
                                    </h5>
                                    <div class="w-full h-[1px] bg-white/30"></div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    className="flex flex-col md:flex-row text-center gap-8 "
                                >
                                    <Link to="/">
                                        <div className="  ">Back to Home </div>
                                    </Link>
                                    <Link to="/AboutMe">
                                        <div className="  ">My CV</div>
                                    </Link>
                                    <Link to="/DevCats">
                                        <div className="  ">
                                            DevCats Project{" "}
                                        </div>
                                    </Link>
                                    <Link to="/DevCats">
                                        <div className="  ">Socket io</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    href="#trm"
                    // onClick={() => window.location.replace("#section1")}
                    className="animate-pulse absolute  -bottom-10 right-0 z-50 mr-4 mb-4 "
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

export default Trm;
