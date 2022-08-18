import React from "react";
import NavHome from "../components/navbar/NavHome";
import bg from "../assets/image/BG.png";

function HomePage02() {
    return (
        <>
            <div>
                <NavHome />
                <img
                    className=" absolute h-screen object-cover -z-10 opacity-70  w-screen h-screen top-0"
                    src={bg}
                ></img>
                <div className="  h-screen">
                    <div className=" max-w-screen-lg mx-auto grid gap-4">
                        <div>I can create awesome stuff</div>
                        <div className=" text-5xl font-bold">
                            Hi, I am Thawin Kuwattananon
                        </div>
                        <div className=" w-2/3">
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero illo consequuntur, excepturi cumque amet
                            alias atque aperiam hic, ratione aliquid quis quae
                            consectetur repudiandae quos perferendis deserunt
                            vel molestias itaque.
                        </div>
                        <button className=" w-2/12 p-2 rounded-xl bg-white  border">
                            Hire me
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage02;
