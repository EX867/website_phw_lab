import React from "react";

import "../style_base.css";
import "./style.css";

import {BrowserRouter, Routes, Route} from "react-router-dom"

import PageHome from "./PageHome";
import PagePublications from "./PagePublications";
import PageNews from "./PageNews";

const Module = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="root-container">
            <div className="yellow-box-container">
                <div className="yellow-box">
                    <strong>Ready to start planning your care?</strong> Call us at (+82)-2-2123-2698  to make an appointment.
                </div>
            </div>
            <div className="body-container">
                <div className="body">
                    <div className="header">
                        <a href="/" className="max-h-full">
                            <img src="./assets/images/header1.png" alt="Yonsei University" className="size-full"></img>
                        </a>
                        <a href="/" className="max-h-full">
                            <img src="./assets/images/header2.png" alt="research visualization" className="size-full"></img>
                        </a>
                    </div>

                    <Routes>
                        <Route exact path='/' element={<PageHome/>}/>
                        <Route path="/publications" element={<PagePublications/>}/>
                        <Route path="/news" element={<PageNews/>}/>
                    </Routes>
                    
                </div>
            </div>

            <div className="footer-wrapper">
                <footer className="footer">
                    <div className="footer-info-list">
                        <div><span className="material-icons">pin_drop</span> 서울특별시 서대문구 신촌동 연세로 50-1 (수정필요)</div>
                        <div><span className="material-icons">mail</span> hwp003@yonsei.ac.kr</div>
                        <div><span className="material-icons">call</span> (+82)-2-2123-2698</div>
                    </div>

                    <div>© 2025. TCR Lab All Rights Reserved.</div>
                </footer>
            </div>
        </div>
    </BrowserRouter>);
};

export default Module;