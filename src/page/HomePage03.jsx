import React from "react";
import NavHome from "../components/navbar/NavHome";
import bg from "../assets/image/BG.png";
import Mobile from "../assets/image/Mobile.png";
import Mobile2 from "../assets/image/Mobile2.png";
import V1 from "../assets/video/V1.mp4";
import V2 from "../assets/video/V2.mp4";
import V3 from "../assets/video/V3.mp4";

function HomePage03() {
    return (
        <>
            <div>
                <div className=" bg-bg-main h-screen max-w-full m-2 rounded-2xl">
                    {/* <div className="pt-8 px-16 justify-center">
                        {" "}
                        <h1 className=" text-text-main text-center ">THAWIN</h1>
                    </div> */}
                    <div className="flex items-baseline justify-between pt-8 px-16 h-[28%]">
                        <div className="flex items-baseline gap-12">
                            <h1 className=" text-text-main">THAWIN</h1>
                            <p className=" text-text-main">About</p>
                            <p className=" text-text-main">Portfolio</p>
                            <p className=" text-text-main">Skills</p>
                            <p className=" text-text-main">Blog</p>
                            <p className=" text-text-main">Contact</p>
                        </div>
                        <div className="flex items-baseline gap-12">
                            <div className="  text-text-main">
                                thawin.kuwa@gmail.com
                            </div>
                            <div className="  text-text-main">QR</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <h1 className="mx-auto text-text-main text-[7rem]">
                            Full Stack DEVELOPER
                        </h1>
                        <div className="flex gap-8 mx-auto justify-center">
                            <div className=" w-3/12 h-[28rem] ">
                                {/* <video
                                    autoPlay
                                    loop
                                    muted
                                    className=" object-cover w-full h-full rounded-2xl"
                                    src={V1}
                                /> */}
                                <img
                                    src={Mobile}
                                    className="object-cover w-full h-full rounded-2xl"
                                    alt=""
                                />
                            </div>
                            <div className=" w-3/12 mt-28 h-96">
                                {/* <img
                                    src={Mobile2}
                                    className="object-cover w-full h-full rounded-2xl"
                                    alt=""
                                /> */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    className=" object-cover w-full h-full rounded-2xl"
                                    src={V3}
                                />
                            </div>
                            <div className=" w-3/12 mt-12  h-96">
                                {/* <video
                                    autoPlay
                                    loop
                                    muted
                                    className=" object-cover w-full h-full rounded-2xl"
                                    src={V3}
                                /> */}
                                <img
                                    src={Mobile2}
                                    className="object-cover w-full h-full rounded-2xl"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage03;
