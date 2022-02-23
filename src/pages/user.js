import React from 'react';
import HeaderMenu from "../components/headerMenu/headerMenu";
import {Route, Routes} from "react-router-dom";
import Test from "./test";
import Arxiv from "./arxiv";
import Yangiliklar from "./yangiliklar";
import Reyting from "./reyting";

function User(props) {
    return (
        <>
            <HeaderMenu>
                <Routes>
                    <Route path="/" element={<Yangiliklar />} />
                    <Route path="/test/*" element={<Test />} />
                    <Route path="/reyting/*" element={<Reyting />} />
                    <Route path="/arxiv/*" element={<Arxiv />} />
                </Routes>
            </HeaderMenu>
        </>
    );
}

export default User;