import React from "react";

import "../../style_base.css";
import "./style.css";

import {BrowserRouter, Routes, Route} from "react-router-dom"

import PageHome from "../PageHome/PageHome";
import PagePublications from "../PagePublications/PagePublications";
import PageNews from "../PageNews/PageNews";

const Module = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="root-container">
            <div className="body-container">
                <div className="body">
                    <div className="flex gap-6 h-[7rem] p-4 border-solid border-b-[3px] border-yonsei">
                        <a href="/">
                            <img className="h-full" 
                                alt="Yonsei University"
                                src="./assets/images/header1.png"/>
                        </a>
                        <a href="/">
                            <img className="h-full"
                                alt="research visualization"
                                src="./assets/images/header2.png"/>
                        </a>
                    </div>

                    <Routes>
                        <Route exact path='/' element={<PageHome/>}/>
                        <Route path="/publications" element={<PagePublications/>}/>
                        <Route path="/news" element={<PageNews/>}/>
                    </Routes>
                    
                </div>
            </div>

            <div className="footer-container">
                <footer className="footer">
                    <div className="footer-info-list">

                        <div>⌂ 서울특별시 서대문구 신촌동 연세로 50-1 (수정필요)</div>
                        <div>✉ hwp003@yonsei.ac.kr</div>
                        <div>☏ (+82)-2-2123-2698</div>
                    </div>

                    <div>© 2025. TCR Lab All Rights Reserved.</div>
                </footer>
            </div>
        </div>
    </BrowserRouter>);
};

export default Module;