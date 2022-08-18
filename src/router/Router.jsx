import React from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import HomePage03 from "../page/HomePage03";
import HomePage02 from "../page/HomePage02";
import HomePage from "../page/HomePage";
import Trm from "../page/Trm";
import DevCats from "../page/DevCats";
import AboutMe from "../page/AboutMe";
import TestFull from "../page/TestFull";
import FirstPage from "../page/FirstPage";
import Pgun from "../page/Pgun";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gun" element={<Pgun />} />
            <Route path="/test" element={<TestFull />} />
            <Route path="/FirstPage" element={<FirstPage />} />
            <Route path="/TRM" element={<Trm />} />
            <Route path="/DevCats" element={<DevCats />} />
            <Route path="/AboutMe" element={<AboutMe />} />

            <Route path="/02" element={<HomePage02 />} />
            <Route path="/03" element={<HomePage03 />} />
        </Routes>
    );
}

export default Router;
