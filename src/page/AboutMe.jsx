import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/image/profile.jpg";
import { motion } from "framer-motion";

function AboutMe2() {
    const skills = {
        development: [
            "React",
            "JavaScript",
            "NodeJS",
            "HTML",
            "CSS",
            "MySQL",
            "Git",
            "Express.js",
            "Sequelize",
            "Tailwind",
            "Daysi",
            "Mui",
            "Bootstrap",
        ],
    };
    const program = [
        "VsCode",
        "MySQL",
        "Postman",
        "Git",
        "Figma",
        "Premiere Pro",
        "Photoshop",
        "Illustrator",
    ];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" w-screen relative "
            id="AboutMe"
        >
            {" "}
            <div className=" h-[40%] flex w-full justify-between px-12 py-4  text-text items-baseline  opacity-40">
                {" "}
                <Link to="/">
                    <div className=" ">← Back to Home</div>
                </Link>
                <Link to="/">
                    <div className=" text-text ">Thawin Kuwattananon</div>
                </Link>
            </div>
            <div className="flex h-full max-w-screen-xl mx-auto w-full px-12 flex-col gap-28 mb-32">
                {/* ===================== Profile ========================== */}
                <div className="md:grid md:grid-cols-4 flex flex-col-reverse items-center text-center  p-12 rounded-xl  mt-20 justify-between gap-12">
                    <div className=" col-span-3 flex flex-col gap-2">
                        <div className="textWater w-full items-start flex flex-col">
                            <div className="  text-text md:text-[50px] text-[40px] lg:text-[70px] font-semibold absolute">
                                Let’s know me!
                            </div>
                            <div className=" text-text md:text-[50px] text-[40px] lg:text-[70px] font-semibold absolute">
                                Let’s know me!
                            </div>
                        </div>
                        <div className=" text-text md:text-[50px] text-[40px] lg:text-[70px] font-semibold  invisible">
                            Let’s know me!
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className=" text-text ">
                                My name is Thawin Kuwattananon or TERM, and i am
                                fullstack web developer, I love design I love
                                coding, but you already know all that. so here
                                are some more facts about me:
                            </div>
                            <a href="https://drive.google.com/file/d/1IkflZwN13VzZBTGu7gnXQpS8rBhIwVQP/view?usp=sharing">
                                <div className="textSocket">
                                    Download my CV!!!
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-40 lg:h-40 w-32 h-32  ">
                        <img
                            src={profile}
                            className="w-full h-full rounded-[50%]  object-cover"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-20 text-center sm:text-left">
                    {/* ===================== Work Experience ========================== */}
                    <div>
                        <div className="flex-col flex gap-8">
                            <div className=" textTRM md:text-3xl text-xl font-semibold">
                                Work Experience
                            </div>

                            <div className="sm:grid sm:grid-cols-3 text-center sm:text-left  text-text p-12 rounded-xl   gap-4 ">
                                <div className="  flex flex-col gap-4">
                                    <div className="  font-semibold">
                                        G-able (Application Developer)
                                    </div>
                                    <div>July 2022 - Present</div>
                                </div>
                                <div className="  col-span-2 flex flex-col gap-4 ">
                                    <div className=" font-semibold">
                                        Main Back-end
                                    </div>
                                    <div>
                                        Auto Generate Ip-network Ip-lan
                                        Ip-address 5G-network for
                                        Telecommunication Towers AIS.
                                    </div>
                                    <div>
                                        Creates components and features on the
                                        server-side, indirectly accessed by a
                                        user through a front end application or
                                        system. includes the core application
                                        logic, databases, data and application
                                        integration, API.
                                    </div>
                                    <div>
                                        And other processes taking place behind
                                        the scenes.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===================== Education ========================== */}
                    <div className="flex-col flex gap-8">
                        <div className=" textTRM md:text-3xl text-xl font-semibold">
                            Education
                        </div>
                        <div className="  flex flex-col gap-12  p-12 rounded-xl  ">
                            <div className="sm:grid sm:grid-cols-3">
                                <div className="  flex flex-col gap-4 ">
                                    <div className="  font-semibold ">
                                        Codecamp By Software park
                                    </div>
                                    <div>Certificate</div>
                                </div>
                                <div className="  col-span-2 flex flex-col gap-4 ">
                                    <div className=" font-semibold">
                                        Fullstack Web Developer
                                    </div>
                                    <div>
                                        Fullstack Javascript fundamentals of web
                                        developer
                                    </div>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-3">
                                <div className="  flex flex-col gap-4">
                                    <div className="  font-semibold">
                                        Kasetsart University
                                    </div>
                                    <div>2013 - 2017</div>
                                </div>
                                <div className="  col-span-2 flex flex-col gap-4">
                                    <div className=" font-semibold">
                                        Integrated Tourism Management
                                    </div>
                                    <div>
                                        Bachelor of Integrated Tourism
                                        Management International Program
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===================== Programs / Tools ========================== */}
                    <div className=" flex flex-col gap-8  w-full ">
                        <div className="textDev md:text-3xl text-xl font-semibold w-full">
                            Programs / Tools
                        </div>
                        <div className=" p-12 rounded-xl  flex flex-col gap-4">
                            <div className="gap-4 w-full ">
                                {/* <span className="">
                                    {" "}
                                    React &nbsp; JavaScript &nbsp; NodeJS &nbsp;
                                    HTML &nbsp; CSS &nbsp; MySQL Git &nbsp;
                                    Express.js &nbsp; Sequelize &nbsp; Tailwind
                                    &nbsp; Daisy &nbsp; Mui &nbsp; Bootstrap
                                </span> */}
                                <div className="flex flex-wrap gap-4">
                                    {skills.development.map((el, idx) => {
                                        return (
                                            <div key={idx} className=" ">
                                                {el}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <span className="">
                                    {" "}
                                    VsCode &nbsp; MySQL &nbsp; Postman &nbsp;
                                    Git &nbsp; Figma &nbsp; Premiere Pro &nbsp;
                                    Photoshop &nbsp; Illustrator
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* =====================  contact ========================== */}
                    <div className=" flex flex-col gap-8 relative">
                        <div className="textDev  md:text-3xl text-xl font-semibold">
                            contact
                        </div>

                        <div className=" flex flex-col gap-4 textSocket">
                            <a href="https://github.com/ntermpmm" alt="">
                                <div>My Github</div>
                            </a>
                            <div>thawin.kuwa@gmail.com</div>
                            <div>(+66) 95 2946 993</div>
                        </div>
                        <a
                            href="#AboutMe"
                            className="animate-pulse absolute  -bottom-10 -right-40 z-50 mr-4 mb-4 "
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
        </motion.div>
    );
}

export default AboutMe2;
