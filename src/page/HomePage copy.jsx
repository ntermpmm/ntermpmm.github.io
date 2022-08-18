import React from "react";
import BG from "../assets/image/BG.png";
import Mobile from "../assets/image/Mobile.png";
import Mobile2 from "../assets/image/Mobile2.png";
import cv from "../assets/image/cv.png";
import GradHat from "../assets/image/GradHat.png";
import laptop from "../assets/image/laptop.png";
import BgLaptop from "../assets/image/BgLaptop.png";
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
import Fullpage from "../components/fullpage/Fullpage";
AOS.init();
function HomePage() {
    const technical = [
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1646850887/Logo/html5_cykxyz.png",
            title: "HTML",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1646850887/Logo/css3_wbgmop.png",
            title: "CSS",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1646850888/Logo/javascript_1_olaeqo.png",
            title: "JavaScript",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1646850888/Logo/react_pwxdqd.png",
            title: "React",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1646850887/Logo/bootstrap_mnwufe.png",
            title: "Bootstrap",
        },
        {
            img: "https://mui.com/static/logo.png",
            title: "MUI",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1647956586/Logo/Tailwind_CSS_Logo.svg_ytlfw3.png",
            title: "Tailwind",
        },
        {
            img: "https://seeklogo.com/images/H/headless-ui-logo-034B045C5C-seeklogo.com.png",
            title: "Headless UI",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1647957211/Logo/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180_1_fj7xyq.png",
            title: "Framer Motion",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1646850887/Logo/figma_ylvvry.png",
            title: "Figma",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1646850888/Logo/node-js_rmri8p.png",
            title: "Node.JS",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1647956945/Logo/Expressjs_kxuzzy.png",
            title: "Express",
        },

        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1646851026/Logo/0d184ee3-fd8d-4b94-acf4-b4e686e57375_w18gei.png",
            title: "Passport",
        },
        {
            img: "https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png",
            title: "Axios",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1200px-Socket-io.svg.png",
            title: "Socket.io",
        },
        {
            img: "https://res.cloudinary.com/do58tgs2e/image/upload/v1646850887/Logo/mysql_cqq3f9.png",
            title: "Mysql",
        },
    ];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" flex flex-col  gap-0 md:gap-8   overflow-hidden"
            id="HomePage"
        >
            <div className="flex flex-col gap-8 max-w-screen-xl  mx-auto ">
                <nav className=" mt-12  flex  items-center justify-between">
                    <div className="font-bold text-lg">Thawin’K</div>
                    <div className="flex items-center gap-8 text-[#757575]">
                        <div className=" text-[#893DE8] font-semibold">
                            Home
                        </div>
                        <div>DevCats</div>
                        <div>Tomorrow Rich</div>
                        <div>About me</div>
                        <div className=" bg-[#6A5AE0] text-[#FFFFFF] text-[18px] font-semibold rounded-xl p-3">
                            My Github!
                        </div>
                    </div>
                </nav>
                <div className="h-screen">
                    <div className="  bg-[#F4F3FE] w-[1432px] h-[85%] rounded-xl py-8  max-w-screen-xl  mx-auto ">
                        <div className="  flex flex-col  justify-center items-center gap-8 top-0 bottom-0 px-20 ">
                            <div className="flex flex-col gap-4  text-center">
                                <div className=" text-[56px]  mt-8  text-[#322A3C] leading-[120%] font-bold">
                                    I’m Term{" "}
                                    <span className=" text-[#6A5BE1]">
                                        Fullstack
                                    </span>{" "}
                                    Developer Website
                                </div>

                                <div className=" text-[16px] font-semibold text-[#50555C] ">
                                    The quick, brown fox jumps over a lazy dog.
                                    DJs flock by when
                                </div>
                            </div>
                            <div className="flex justify-center  w-full gap-16">
                                <div className="w-[308px] group h-[440px]  hover:w-[337.61px] hover:h-[488px] hover:-mt-8   hover:bgHomeEl relative bg-white  flex flex-col gap-4 justify-end rounded-xl duration-200">
                                    <img
                                        src={BgLaptop}
                                        className="absolute w-full h-full rounded-xl invisible group-hover:visible"
                                        alt=""
                                    />
                                    <div className=" absolute -top-10 left-16 group-hover:absolute group-hover:-top-10 group-hover:left-16 group-hover:w-full">
                                        <img src={GradHat} alt="" />
                                    </div>

                                    <div className=" p-8 flex flex-col gap-4 z-10">
                                        <div className=" text-[#52555A] flex flex-col group-hover:text-[#FFFFFF] ">
                                            <div className="text-[26px] font-extrabold">
                                                CV Resume
                                            </div>
                                            <div className=" text-[12px] w-[280px]">
                                                The quick, brown fox jumps over
                                                a lazy dog. DJs flock by when
                                                MTV{" "}
                                            </div>
                                        </div>
                                        <button className=" group-hover:text-[#fff]  hover:text-[#6555DF] hover:bg-[#fff]  group-hover:bg-[#C5BFF3]  border border-[#6555DF] text-center rounded-full p-4 text-[#6555DF] ">
                                            View More
                                        </button>
                                    </div>
                                </div>
                                <div className="w-[308px] group h-[440px]   hover:w-[337.61px] hover:h-[488px] hover:-mt-8   hover:bgHomeEl relative bg-white  flex flex-col gap-4 justify-end rounded-xl duration-200">
                                    <img
                                        src={BgLaptop}
                                        className="absolute w-full h-full rounded-xl invisible group-hover:visible"
                                        alt=""
                                    />
                                    <img
                                        src={laptop}
                                        className="group-hover:absolute group-hover:top-0 group-hover:left-16 group-hover:w-full absolute top-0 w-4/5 left-16"
                                        alt=""
                                    />
                                    {/* <div className="w-full h-full bg-black">
                                        <div>asd</div>
                                    </div> */}
                                    <div className=" p-8 flex flex-col gap-4 z-10">
                                        <div className=" text-[#52555A] flex flex-col group-hover:text-[#FFFFFF] ">
                                            <div className="text-[26px] font-extrabold">
                                                Recent Project
                                            </div>
                                            <div className=" text-[12px] w-[280px]">
                                                The quick, brown fox jumps over
                                                a lazy dog. DJs flock by when
                                                MTV{" "}
                                            </div>
                                        </div>
                                        <a
                                            href="#RecentProjects"
                                            className=" group-hover:text-[#fff] group-hover:bg-[#C5BFF3]  border border-[#6555DF] text-center rounded-full p-4 text-[#6555DF] "
                                        >
                                            View More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-52">
                <div className="max-w-screen-lg mx-auto">
                    <div id="RecentProjects"></div>
                    <div className="  mx-auto  flex flex-col gap-28">
                        <div
                            data-aos="fade-up"
                            className=" text-[#322A3C] lg:text-6xl text-4xl lg:mt-8 md:text-5xl mt-0 text-center md:text-left md:mt-4  font-bold opacity-50"
                        >
                            Recent Projects
                        </div>

                        <div className="flex flex-col lg:gap-52 gap-24 left-0  right-0 items-center max-w-screen-lg">
                            <div
                                className="lg:grid lg:grid-cols-3 flex-col flex  items-center gap-12"
                                data-aos="fade-up"
                            >
                                <div
                                    data-aos="fade-up"
                                    className=" flex flex-col gap-4"
                                >
                                    <div className="  text-5xl font-semibold">
                                        →
                                    </div>
                                    <Link to="/DevCats">
                                        {" "}
                                        <div className="text-[#6A5BE1]  md:text-5xl text-3xl font-semibold ">
                                            DevCats
                                        </div>
                                    </Link>

                                    <div className=" ">
                                        DevCats co acts as an online media
                                        platform between Developer professionals
                                        from a variety of fieldsloper and people
                                        who are looking for employment to meet a
                                        full range of customer needs anywhere,{" "}
                                        {
                                            <span className=" text-[#6A5BE1]">
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
                                className="lg:grid lg:grid-cols-3   flex flex-col-reverse  items-center gap-12 max-w-screen-lg"
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
                                    <div className="  invisible lg:visible text-5xl font-semibold">
                                        ←
                                    </div>
                                    <Link to="/TRM">
                                        {" "}
                                        <div className=" text-[#6A5BE1] md:text-5xl text-3xl font-semibold">
                                            TRM
                                        </div>
                                    </Link>
                                    <div className=" ">
                                        TomorrowRich are Believer website and
                                        Mini Shop co acts as an online media
                                        platform for people who are looking for
                                        Travel with Belief,
                                        {
                                            <span className=" text-[#6A5BE1]">
                                                {"      "}
                                                Read more
                                            </span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-12">
                    <div>
                        <div
                            data-aos="fade-up"
                            className=" max-w-screen-lg mx-auto text-[#322A3C] lg:text-[56px] text-4xl lg:mt-8 md:text-5xl mt-0 text-center md:text-left md:mt-4  font-bold opacity-50"
                        >
                            Recent Features
                        </div>
                    </div>
                    <div className=" w-full bg-[#F4F3FE]">
                        <div className="grid text-center max-w-screen-lg mx-auto py-12  items-center gap-12">
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
                            <div className=" flex flex-col gap-4 ">
                                <div
                                    data-aos="fade-up"
                                    className=" text-[#6A5BE1] mt-16 lg:mt-0 md:text-5xl text-3xl font-semibold"
                                >
                                    Socket io
                                </div>
                                <div data-aos="fade-up" className=" ">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Vero illo consequuntur,
                                    excepturi cumque,{" "}
                                    {
                                        <span className=" text-[#6A5BE1] ">
                                            {"      "}
                                            Read more
                                        </span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-48">
                    <div className="flex flex-col gap-12">
                        <div className=" flex flex-col gap-8 items-center">
                            <div className=" text-[#322A3C] lg:text-[48px] text-4xl lg:mt-8 md:text-5xl mt-0 text-center md:text-left md:mt-4  font-bold ">
                                Technical Skills
                            </div>
                            <div>
                                I am a quick learner and specialize in multitude
                                of skills required for{" "}
                                <span className="text-[#6A5BE1]">
                                    Software Engineer
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-12  max-w-screen-lg mx-auto">
                            {technical.map((el) => {
                                return (
                                    <div className="flex flex-col gap-4 items-center">
                                        <img
                                            src={el.img}
                                            className="w-[96px] h-[96px] "
                                            alt=""
                                        />
                                        <div>{el.title}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="bg-[#F4F3FE] rounded-xl max-w-screen-lg mx-auto">
                        <div className=" grid grid-cols-2 items-center px-16 p-12 gap-16">
                            <div className=" flex flex-col gap-8">
                                <div className=" text-[24px] font-semibold">
                                    Hello! I’m{" "}
                                    <span className="text-[#6A5BE1]">
                                        Thawin Kuwattananon.
                                    </span>
                                </div>
                                <div className=" text-[16px] text-[#50555C]">
                                    I am a skilled full stack developer. I am a
                                    quick learner and a team worker that gets
                                    the job done. I can easily capitalize on low
                                    hanging fruits and quickly maximize timely
                                    deliverables for real-time schemas.
                                </div>
                                <div className="text-[20px] text-[#6A5BE1] flex gap-4">
                                    <Link to="/AboutMe" className="">
                                        Download CV
                                    </Link>{" "}
                                    <div> | </div>
                                    <Link to="/AboutMe" className="">
                                        About me
                                    </Link>
                                </div>
                            </div>
                            <div className=" h-[313px] ">
                                <img
                                    src={Mobile}
                                    className="w-full h-full object-cover rounded-xl"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto grid text-left items-center relative lg:mt-0 mt-16 gap-16">
                        <div>
                            <div
                                data-aos="fade-up"
                                className="md:text-5xl text-3xl font-semibold max-w-screen-lg mx-auto "
                            >
                                Contact Me
                            </div>
                        </div>
                        {/* <div className="flex flex-col sm:flex-row w-full lg:gap-48 gap-12 mb-24 lg:mb-12 justify-between "> */}
                        {/* <div className="flex flex-col gap-0 sm:gap-8 bg-[#F4F3FE] rounded-t-xl">
                                <div className="p-12 px-20 md:text-3xl text-2xl">
                                    CV resume
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 bg-[#F4F3FE] rounded-t-xl">
                                <div className="  p-12 px-20 md:text-3xl text-2xl">
                                    {" "}
                                    About me
                                </div>
                            </div> */}
                        <div className=" grid grid-cols-2 gap-8 px-12">
                            <div className=" flex flex-col gap-4 bg-[#F4F3FE] p-12 rounded-xl">
                                <div className="flex flex-col gap-2">
                                    <div>Name</div>
                                    <input
                                        className="w-full p-4 h-8 rounded-md"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div>Email</div>
                                    <input
                                        className="w-full p-4  h-8 rounded-md"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div>Message</div>
                                    <textarea
                                        className=" rounded-lg p-4 w-full h-32"
                                        name=""
                                        id=""
                                    ></textarea>
                                </div>
                                <div className=" bg-[#6A5AE0] mt-4 text-[#FFFFFF] w-24 text-center text-[18px] font-semibold rounded-lg p-3">
                                    Submit
                                </div>
                            </div>
                            <div className=" flex flex-col gap-8 px-12">
                                <div className="lg:text-[28px] font-semibold">
                                    Let’s talk how{" "}
                                    <span className="text-[#6A5AE0]">
                                        {" "}
                                        I can help you!{" "}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4 ">
                                    <div>
                                        If you like my work and want to avail my
                                        services then drop me a message using
                                        the contact form.
                                    </div>
                                    <div>
                                        Or get in touch using my email or my
                                        contact number.
                                    </div>
                                    <div>See you!</div>
                                </div>
                                <div>
                                    <div className="flex gap-12">
                                        <div>Email: </div>
                                        <div className=" font-semibold">
                                            Thawin.kuwa@gmail.com
                                        </div>
                                    </div>
                                    <div className="flex gap-12">
                                        <div>Phone: </div>
                                        <div className=" font-semibold">
                                            +669-5294-6993
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}

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

export default HomePage;
