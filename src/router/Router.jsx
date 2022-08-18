import React from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../page/HomePage";
import Trm from "../page/Trm";
import DevCats from "../page/DevCats";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TRM" element={<Trm />} />
            <Route path="/DevCats" element={<DevCats />} />
        </Routes>
    );
}

export default Router;
