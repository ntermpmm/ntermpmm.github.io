import React, { useRef } from "react";
import { Link } from "react-router-dom";
import CardHome from "../components/element/CardHome";
import Term from "../assets/image/Term.jpg";
import NavHome from "../components/navbar/NavHome";
import Footer from "../components/footer/Footer";
import FeatureS from "../assets/image/FSocket.png";
import FeatureJ from "../assets/image/FJodit.png";
import devCatRecent from "../assets/image/devCatRecent.png";
import trmRecent from "../assets/image/trmRecent.png";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import * as yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import InputForm from "../components/formYup/InputForm";
import { Form } from "../components/formYup/Form";

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    duration: 1000,

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    // duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function FirstPage() {
    const schema = yup.object().shape({
        Name: yup.string().required("Username is required"),
        Email: yup.string().required("Password is required"),
        Message: yup.string().required("Password is required"),
    });
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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [checkSubmit, setCheckSubmit] = useState(false);
    const [alert, setAlert] = useState(false);

    const checkEmail = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    const sendEmail = (e) => {
        try {
            setCheckSubmit(true);
            e.preventDefault();
            if (name !== "" && checkEmail !== null && message !== "") {
                emailjs
                    .sendForm(
                        "service_gnw6vul",
                        "template_pdtdwsu",
                        e.target,
                        "JhbDhru5-Cy9S7OTy"
                    )
                    .then(
                        (result) => {
                            console.log(result.text);
                        },
                        (error) => {
                            console.log(error.text);
                        }
                    );
            }
            // console.log("error");
            // setAlert(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="relative ">
                <div className=" ">
                    {/* =================Section1==================== */}
                    <div
                        id="HomePage"
                        className="  snap-start h-screen flex-col flex gap-8  "
                    >
                        <NavHome />
                        <div className="bg-[#F4F3FE] sm:h-auto h-full mb-12 relative p-20 pt-12 rounded-3xl md:max-w-screen-2xl md:mx-auto flex flex-col gap-16   text-center">
                            <div className="flex flex-col gap-4">
                                <div className=" hidden sm:block md:text-[56px] sm:text-[48px] mt-8  text-[#322A3C] leading-[120%] font-bold">
                                    I’m Term{" "}
                                    <span className=" text-[#6A5BE1]">
                                        Fullstack
                                    </span>{" "}
                                    Developer Website
                                </div>
                                <div className=" text-center block sm:hidden text-[56px] mt-8  text-[#322A3C] leading-[120%] font-bold">
                                    <span className=" text-[#6A5BE1]">
                                        Fullstack
                                    </span>{" "}
                                    Developer Website
                                </div>
                                <div className="hidden sm:block text-[16px] font-semibold text-[#50555C] ">
                                    Welcome to my portfolio, you can know me
                                    better with this website!
                                </div>
                                <div className=" sm:hidden text-[16px] mt-4 font-semibold text-[#50555C] ">
                                    Hi! I'm Thawin Kuwattananon or you can call
                                    me "Term", you can know me better with this
                                    website!
                                    <div className="text-sm mt-4">
                                        (use desktop version for better
                                        experience!!!)
                                    </div>
                                </div>
                            </div>
                            <div className=" hidden sm:block">
                                <CardHome />
                            </div>
                            <div className="absolute sm:hidden bottom-0 text-black left-0 right-0 flex justify-center ">
                                <a
                                    href="#RecentProjects"
                                    className="animate-bounce arrow-circle-down text-text_color"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16"
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
                        </div>{" "}
                    </div>
                    {/* ================= Recent Projects ==================== */}
                    <div className="child data-aos">
                        <div
                            id="RecentProjects"
                            className=" text-[#322A3C] child data-aos  lg:text-7xl text-5xl lg:mt-8 md:text-6xl mt-0 text-center md:text-left md:mt-4  font-bold opacity-50"
                        >
                            Recent Projects
                        </div>
                    </div>

                    {/* ================= DevCats ==================== */}
                    <div className="child">
                        <div className="  max-w-screen-lg mx-auto">
                            <div className=" lg:flex lg:flex-col flex-col flex  items-center gap-12">
                                <div className=" flex flex-col gap-8 px-2 sm:px-0 sm:text-left text-center">
                                    {/* <div className="  text-5xl font-semibold">
                                        →
                                    </div> */}
                                    <Link to="/DevCats">
                                        {" "}
                                        <div className="text-[#6A5BE1]  md:text-5xl sm:text-3xl text-5xl font-semibold ">
                                            DevCats
                                        </div>
                                    </Link>

                                    <div className="sm:text-lg text-xl">
                                        DevCats co acts as an online media
                                        platform between Developer professionals
                                        from a variety of fields developer and
                                        people who are looking for employment to
                                        meet a full range of customer needs
                                        anywhere,{" "}
                                        {
                                            <Link
                                                to="/DevCats"
                                                className=" font-semibold text-[#6A5BE1]"
                                            >
                                                {"      "}
                                                Read more
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className=" ">
                                    <img
                                        src={devCatRecent}
                                        alt="DevCats"
                                        className="rounded-xl"
                                    />
                                </div>

                                {/* <iframe
                                    className="w-full h-full overflow-hidden rounded-xl"
                                    src="https://www.youtube.com/embed/_DF9M0-tyKA"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe> */}
                            </div>
                        </div>
                    </div>
                    {/* =================  TRM==================== */}
                    <div className="child">
                        <div className=" max-w-screen-lg">
                            {" "}
                            <div className="lg:flex lg:flex-col-reverse   flex flex-col-reverse  items-center sm:gap-12 gap-20">
                                <div className=" ">
                                    <img
                                        src={trmRecent}
                                        alt="DevCats"
                                        className="rounded-xl"
                                    />
                                </div>

                                <div className=" flex flex-col sm:text-right text-center gap-8 sm:px-0 px-4  sm:gap-4">
                                    <Link to="/TRM">
                                        {" "}
                                        <div className=" text-[#6A5BE1] md:text-5xl sm:text-3xl text-5xl  font-semibold">
                                            TRM
                                        </div>
                                    </Link>
                                    <div className=" sm:text-lg text-xl">
                                        TomorrowRich are Believer website and
                                        Mini Shop co acts as an online media
                                        platform for people who are looking for
                                        Travel with Belief,
                                        {
                                            <Link
                                                to="/TRM"
                                                className=" font-semibold text-[#6A5BE1]"
                                            >
                                                {"      "}
                                                Read more
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =================Recent Features==================== */}
                    <div className="child">
                        <div className=" max-w-screen-lg mx-auto text-[#322A3C] lg:text-7xl text-5xl lg:mt-8 md:text-6xl mt-0 text-center md:text-left md:mt-4  font-bold opacity-50">
                            Recent Features
                        </div>
                    </div>
                    {/* =================Recent Features==================== */}

                    <div className="child bg-[#F4F3FE] overflow-x-hidden">
                        {/* <div className=" flex flex-col gap-12"> */}

                        <div className=" w-full bg-[#F4F3FE] sm:px-24 rounded-3xl ">
                            <div className="flex flex-col-reverse text-center overflow-y-hidden  max-w-screen-xl mx-auto lg:pt-20 items-center gap-12">
                                <div className=" sm:w-[70%] sm:h-[70%] w-[400px]  h-full xl:mr-16 md:mr-8 mr-4">
                                    <img
                                        src={FeatureS}
                                        alt=""
                                        className=" w-full h-full"
                                    />
                                </div>
                                <div className=" flex flex-col gap-4 ">
                                    <div className=" text-[#6A5BE1] mt-16 lg:mt-0 md:text-5xl text-3xl font-semibold">
                                        <span className="text-[#0F0A34]">
                                            {" "}
                                            Feature
                                        </span>{" "}
                                        Socket io
                                    </div>
                                    <div className=" px-16 sm:px-0">
                                        Socket.IO brings to mind WebSockets.
                                        WebSockets are also a browser
                                        implementation allowing bi-directional
                                        communication, it upgrades to the best
                                        connection method available. In most
                                        cases, this will result in a WebSocket
                                        connection.
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
                    {/* =================Recent Features 2==================== */}
                    <div className="child bg-[#F4F3FE]">
                        {" "}
                        <div className="childx w-full bg-[#F4F3FE] sm:px-24 rounded-3xl">
                            <div className="flex-col-reverse  flex text-center max-w-screen-lg mx-auto pt-20  items-center gap-12">
                                <div className=" xl:mr-16 md:mr-8 mr-4">
                                    <img
                                        src={FeatureJ}
                                        alt=""
                                        className=" w-full h-full"
                                    />
                                </div>

                                <div className=" flex flex-col gap-4 ">
                                    <div className=" text-[#6A5BE1] mt-16 lg:mt-0 md:text-5xl text-3xl font-semibold">
                                        <span className="text-[#0F0A34]">
                                            {" "}
                                            Feature
                                        </span>{" "}
                                        Jodit
                                    </div>
                                    <div className="px-16 sm:px-0 ">
                                        An excellent WYSIWYG editor written in
                                        pure TypeScript without the use of
                                        additional libraries. Its file editor
                                        and image editor.
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

                    {/* =================Technical Skills==================== */}
                    <div className="child">
                        <div className="flex flex-col gap-12 items-center text-center p-12">
                            <div className=" flex flex-col gap-8 items-center">
                                <div className=" text-[#322A3C] lg:text-[48px] text-4xl lg:mt-8 md:text-5xl mt-0 text-center md:text-left md:mt-4  font-bold ">
                                    Technical Skills
                                </div>
                                <div>
                                    I am a quick learner and specialize in
                                    multitude of skills required for{" "}
                                    <span className="text-[#6A5BE1]">
                                        Software Engineer
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-12  max-w-screen-lg mx-auto">
                                {technical.map((el, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="flex flex-col gap-4 items-center"
                                        >
                                            <img
                                                src={el.img}
                                                className="sm:w-[96px] sm:h-[96px] w-full h-full "
                                                alt=""
                                            />
                                            <div>{el.title}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* ================= Hello! I’m==================== */}
                    <div
                        id="LetKnowMe"
                        className="child flex flex-col md:gap-20 gap-12 px-12"
                    >
                        <div className=" max-w-screen-lg mx-auto text-[#322A3C] lg:text-[56px] text-4xl lg:mt-0 md:text-5xl mt-0 text-center md:text-left md:mt-4  font-bold opacity-50">
                            Let's Know Me!
                        </div>
                        <div className="bg-[#F4F3FE] rounded-xl max-w-screen-lg mx-auto">
                            <div className=" grid md:grid-cols-2 items-start sm:px-16 p-12 md:gap-16 gap-8">
                                <div className=" flex flex-col md:mt-4 md:gap-8 gap-4">
                                    <div className=" md:text-[24px] text-[16px] font-semibold">
                                        Hello! I’m{" "}
                                        <span className="text-[#6A5BE1]">
                                            Thawin Kuwattananon.
                                        </span>
                                    </div>
                                    <div className=" md:text-[16px] text-[12px] text-[#50555C]">
                                        I am a skilled full stack developer. I
                                        am a quick learner and a team worker
                                        that gets the job done. I can easily
                                        capitalize on low hanging fruits and
                                        quickly maximize timely deliverables for
                                        real-time schemas.
                                    </div>
                                    <div className="md:text-[20px] text-[14px] font-semibold text-[#6A5BE1] flex gap-4">
                                        <a
                                            href="https://drive.google.com/file/d/1IkflZwN13VzZBTGu7gnXQpS8rBhIwVQP/view?usp=sharing"
                                            className=""
                                        >
                                            Download CV
                                        </a>{" "}
                                        <div className=" font-normal"> | </div>
                                        <a href="#Contact" className="">
                                            Contact Me!
                                        </a>{" "}
                                    </div>
                                </div>
                                <div className=" md:h-[313px] sm:h-80 h-48 ">
                                    <img
                                        src={Term}
                                        className="w-full h-full  object-cover rounded-xl"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =================Contact==================== */}
                    <div className=" snap-start flex flex-col gap-12">
                        {" "}
                        <div
                            id="Contact"
                            className="max-w-screen-xl mx-auto grid text-left items-center relative lg:mt-0   gap-12"
                        >
                            <div>
                                <div className="pt-12 lg:block hidden md:text-5xl text-3xl font-semibold xl:pl-0 md:pl-12 max-w-screen-lg mx-auto ">
                                    Contact Me
                                </div>
                            </div>

                            <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 px-12">
                                <form
                                    onSubmit={sendEmail}
                                    className=" flex flex-col gap-4 bg-[#F4F3FE] lg:w-full  md:w-[720px] p-12 rounded-xl"
                                >
                                    <div className="flex flex-col gap-2">
                                        <div>Name</div>
                                        <input
                                            required
                                            className="w-full p-4 h-8 rounded-md"
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        {checkSubmit ? (
                                            !name ? (
                                                <div className=" text-xs text-[#F5006C]">
                                                    *Name is Required
                                                </div>
                                            ) : null
                                        ) : null}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div>Email</div>

                                        <input
                                            required
                                            className="w-full p-4  h-8 rounded-md"
                                            placeholder="Your Email"
                                            type="text"
                                            name="email"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        {checkSubmit ? (
                                            !checkEmail ? (
                                                <div className=" text-[#F5006C] text-xs">
                                                    *Email is required
                                                </div>
                                            ) : null
                                        ) : null}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div>Message</div>
                                        <textarea
                                            required
                                            className=" rounded-lg p-4 w-full h-32"
                                            placeholder="Message"
                                            name="message"
                                            id=""
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                        ></textarea>
                                        {checkSubmit ? (
                                            !message ? (
                                                <div className=" text-[#F5006C] text-xs">
                                                    *Message is required
                                                </div>
                                            ) : null
                                        ) : null}
                                    </div>
                                    <button
                                        type="submit"
                                        className=" bg-[#6A5AE0] mt-4 text-[#FFFFFF] w-24 text-center sm:text-[18px] text-md font-semibold rounded-lg p-3"
                                    >
                                        Submit
                                    </button>
                                </form>
                                <div className=" flex flex-col gap-8 px-12">
                                    <div className="lg:text-[28px] text-3xl font-semibold lg:text-left text-center">
                                        Let’s talk how{" "}
                                        <span className="text-[#6A5AE0]">
                                            {" "}
                                            I can help you!{" "}
                                        </span>
                                    </div>
                                    <div className="lg:flex  flex-col gap-4 hidden ">
                                        <div>
                                            If you like my work and want to
                                            avail my services then drop me a
                                            message using the contact form.
                                        </div>
                                        <div>
                                            Or get in touch using my email or my
                                            contact number.
                                        </div>
                                        <div>See you!</div>
                                    </div>
                                    <div className="lg:block hidden">
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
                                className="animate-pulse absolute  bottom-0 right-0  z-50 mr-4 mb-4 text-black"
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
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstPage;
