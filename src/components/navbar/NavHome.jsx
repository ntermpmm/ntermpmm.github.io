import React from "react";
import { Link } from "react-router-dom";

function NavHome() {
    return (
        <nav className="w-full  px-4  bg-transparent flex  items-center justify-between max-w-screen-xl mx-auto mt-12">
            <div className="font-bold text-lg">Thawin’K</div>
            <div className="md:flex items-center gap-8 text-[#757575] hidden ">
                <Link to="/" className=" text-[#6A5AE0] font-semibold">
                    Home
                </Link>
                <Link
                    className=" hover:text-[#6A5AE0] hover:font-semibold transition duration-300 hover:opacity-100 opacity-60"
                    to="DevCats"
                >
                    DevCats
                </Link>
                <Link
                    className=" hover:text-[#6A5AE0] hover:font-semibold transition duration-300 hover:opacity-100 opacity-60"
                    to="TRM"
                >
                    Tomorrow Rich
                </Link>
                <a
                    className=" hover:text-[#6A5AE0] hover:font-semibold transition duration-300 hover:opacity-100 opacity-60"
                    href="#LetKnowMe"
                >
                    About me
                </a>
                <div className=" bg-[#6A5AE0] text-[#FFFFFF] text-[18px] font-semibold rounded-xl p-3">
                    My Github!
                </div>
            </div>
            <div className=" md:hidden bg-[#6A5AE0] text-[#FFFFFF] text-[18px] font-semibold rounded-xl p-3">
                My Github!
            </div>
        </nav>
    );
}

export default NavHome;
