import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import {HeaderNavButton} from "../../components/HeaderNavButton";
import {SearchInput} from "../../components/SearchInput";

import PageHome from "../PageHome/PageHome";
import PagePublications from "../PagePublications/PagePublications";
import PageNews from "../PageNews/PageNews";

import "../../style_text.css";
import "./style.css";

const Module = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="root-container">
          <div className="body-container">
              <div className="body">
                  <header className="header">
                      <img className="logo"
                          width={192}
                          alt="The TCR Lab logo"
                          src="assets/images/logo.png"/>

                      {/*<div className="header-nav-bar">
                          <HeaderNavButton label="Home" src="/"/>
                          <HeaderNavButton label="Contact Us" src="/"/>

                          <SearchInput color="var(--color-yonsei)"/>
                      </div>*/}
                  </header>

                  {/*<div className="top-nav-bar">
                      <HorizontalNavButton label="About Us" src="/"/>
                  </div>*/}
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
                      <img className="footer-info-button"
                          alt="Button list"
                          src="https://c.animaapp.com/uGXPNsNv/img/button-list.svg"/>

                      <p>서울특별시 서대문구 신촌동 연세로 50-1 (수정필요)</p>
                      <p>hwp003@yonsei.ac.kr</p>
                      <p>TEL. (+82)-2-2123-2698</p>
                  </div>

                  <p>© 2024. TCR Lab All Rights Reserved.</p>
              </footer>
          </div>
      </div>
    </BrowserRouter>);
};

export default Module;