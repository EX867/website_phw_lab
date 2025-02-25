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
                    <strong>Ready to start planning your care?</strong>
                    <span className="line-break-mobile">Call us at (+82)-2-2123-2698 to make an appointment.</span>
                </div>
            </div>
            <div className="body-container">
                <div className="header">
                    <a href="https://www.yonsei.ac.kr/">
                        <img id="header-img1" src="./assets/images/header1.png" alt="Yonsei University"></img>
                    </a>
                    <a href="/">
                        <img id="header-img2" src="./assets/images/header2.png" alt="research visualization"></img>
                    </a>
                </div>
                <div className="body">

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
                        <div><span className="material-icons">pin_drop</span>&nbsp;서울특별시 서대문구 신촌동 연세로 50-1 연세대학교 과학원 323동 </div>
                        <div><span className="material-icons">mail</span>&nbsp;hwp003@yonsei.ac.kr</div>
                        <div><span className="material-icons">call</span>&nbsp;(+82)-2-2123-2698</div>
                    </div>

                    <div>© 2025. TCR Lab All Rights Reserved.</div>
                </footer>
                <div className="footer-bar">
                    <a href="https://www.yonsei.ac.kr/">
                        <img src="./assets/images/footer1.png" alt="Yonsei University"></img>
                    </a>
                    <a href="/">
                        <img src="./assets/images/footer2.png" alt="research visualization"></img>
                    </a>
                </div>
            </div>
            <div className="yellow-box-container bottom" >
            <div className="yellow-box">
                <strong>Ready to start planning your care?</strong>
                <span className="line-break-mobile">Call us at (+82)-2-2123-2698 to make an appointment.</span>
            </div>
        </div>
            
        </div>
    </BrowserRouter>);
};

export default Module;