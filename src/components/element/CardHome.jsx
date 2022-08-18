import React from "react";
import GradHat from "../../assets/image/GradHat.png";
import laptop from "../../assets/image/laptop.png";
import BgLaptop from "../../assets/image/BgLaptop.png";

function CardHome() {
    return (
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
                    <div className=" text-[#52555A] text-left flex flex-col group-hover:text-[#FFFFFF] ">
                        <div className="text-[26px] font-extrabold">
                            Let's Know Me!
                        </div>
                        <div className=" text-[12px] pr-8 w-[280px]">
                            Check hand me my resume and know more about me.
                        </div>
                    </div>
                    <a
                        href="#LetKnowMe"
                        className=" group-hover:text-[#fff]  hover:text-[#6555DF] hover:bg-[#fff]  group-hover:bg-[#C5BFF3]  border border-[#6555DF] text-center rounded-full p-4 text-[#6555DF] "
                    >
                        Check hand!
                    </a>
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
                    <div className=" text-[#52555A]  text-left flex flex-col group-hover:text-[#FFFFFF] ">
                        <div className="text-[26px] font-extrabold">
                            Recent Project
                        </div>
                        <div className=" text-[12px] pr-4 w-[280px]">
                            You can discover the latest news and recent projects
                        </div>
                    </div>
                    <a
                        href="#RecentProjects"
                        className=" group-hover:text-[#fff] group-hover:bg-[#C5BFF3]  border border-[#6555DF] text-center rounded-full p-4 text-[#6555DF] "
                    >
                        Discover!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardHome;
