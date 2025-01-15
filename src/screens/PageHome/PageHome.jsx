import React, {useEffect} from "react";

import FollowingNavButton from "../../components/FollowingNavButton/FollowingNavButton";
import {Carousel} from "../../components/Carousel";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import {PublicationPreview} from "../../components/PublicationPreview";
import {ContentButton} from "../../components/ContentButton/ContentButton";

import "./style.css";

import data_news from "../../content/news.json";
import data_people from "../../content/people.json";
import data_publications from "../../content/publications.json";

function debounce(func, wait) {
    let timeout;
    let stackTraceTimeout;
    return function (...args) {
        if (timeout == null) {
                timeout = window.setTimeout(() => {
                timeout = null;
            }, wait);
            stackTraceTimeout = setTimeout(() => {
                func.apply(this, args);
                stackTraceTimeout = null;
            });
        } else if (stackTraceTimeout == null) {
            clearTimeout(timeout);
                timeout = window.setTimeout(() => {
                func.apply(this, args);
                timeout = null;
            }, wait);
        }
    };
}

/* function useRefFocusEffect(onFocusCallback, deps) {
    const ref = useRef(null);
  
    useEffect(() => {
        if (ref.current) {
            const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && onFocusCallback()), {
                threshold: 1,
            });
            observer.observe(ref.current);
            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        }
    }, [deps]);
  
    return { elementRef: ref };

    // 본문에서 사용법
    // const { elementRef } = useRefFocusEffect(fetch, [data]);
    // <div ref={elementRef}>이 요소가 보이면 fetch</div>
}*/
  

const PageHome = () => {
    useEffect(() => {
        let sections = Array.from(document.getElementsByTagName("section"));
        let nav_buttons = Array.from(document.getElementsByClassName("following-nav-button")); // 동적생성으로 바꿀까?
        
        var elements_above = new Set();
        let getLastValue = (set) => Array.from(set)[set.size - 1];
        
        function highlight_nav_buttons() {
            nav_buttons.forEach(nav_button => {
                let section_id = nav_button.querySelector('.label').getAttribute('href').replace('#', '');
                let section = sections.find(e => e.id === section_id);
            
                if (section.offsetTop - 20  <= window.scrollY) { // give som padding 
                    elements_above.add(nav_button);
                } else {
                    elements_above.delete(nav_button);
                }
            });
            nav_buttons.forEach(nav_button => {
                nav_button.setAttribute("highlight", "false");
            });
            if (elements_above.size >= 1) {
                getLastValue(elements_above).setAttribute("highlight", "true");
            }else{
                nav_buttons[0].setAttribute("highlight", "true");
            }
        }

        let event_scroll = debounce(highlight_nav_buttons, 10);
        window.addEventListener("scroll", event_scroll);
        highlight_nav_buttons();

        let e = ()=>{ // TEST
            console.log(document.activeElement);
        };
        window.addEventListener("mousedown", e);
        window.addEventListener("mouseup", e);

        return () => {
          window.removeEventListener("scroll", event_scroll);
        };
    }, []);

    return (
        <div>
            <div className="main-image">
                <Carousel
                    className="carousel-instance"
                    context="mobile"
                    hasItem={false}
                    hasItemLast={false}
                    layout="hero"/>
                <div className="main-text-frame">
                    <p className="main-text-detail">YONSEI UNIVERSITY</p>
                    <p className="main-text">The TCR Lab</p>
                      <img className="logo"
                          width={192}
                          alt="The TCR Lab logo"
                          src="assets/images/logo.png"/>
                </div>
            </div>
            <div className="content-horizontal-flex">
                <div id="home-left-nav-tab-wrapper">
                    <div id="home-left-nav-tab">
                        <FollowingNavButton label="Research" src="#content-research"/>
                        <FollowingNavButton label="People" src="#content-people"/>
                        <FollowingNavButton label="Publication Highlights" src="#content-publication"/>
                        <FollowingNavButton label="Featured News" src="#content-news"/>
                        <FollowingNavButton label="Open Positions" src="#content-open-positions"/>
                    </div>
                </div>

                <div className="content">
                    <section id="content-research">
                        <h2>Research</h2>
                        <div className="content-horizontal-flex">
                            <div>
                                <p>
                                    The Hyun Woo (Henry) Park lab is interested in understanding 
                                    the plasticity of cancer cells during metastasis. 
                                    We approach these questions by studying cancer metastasis, 
                                    metabolism, signal transduction, and drug development. 
                                    We utilize mouse models, tracing trumor cell lineages, 
                                    multi-omics approaches, and advanced imaging techniques. 
                                    We pioneered a novel concept in cell biology referred to 
                                    as Adherent-to-Suspension Transition (AST). This innovative 
                                    paradigm describes how cancer cells reprogram their anchorage 
                                    dependency to enable transformation into circulating tumor cells 
                                    (CTCs). Our goal is to develop next generation anti-metastatic 
                                    therapies to significantly reduce cancer death rate.
                                </p>
                                {/*<ContentButton label="More About Our Research" href="/research"/>*/}
                            </div>

                            <div className="professor-small">
                                <img
                                    alt="professor Hyun Woo Park"
                                    src="assets/images/professor/Hyun Woo Park.jpg"/>

                                <p className="professor-name-small">
                                    Hyun Woo Park
                                </p>
                                <p className="professor-profile-small">
                                    Professor of Yonsei University
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="content-people">
                        <h2>People</h2>

                        <div className="professor">
                            <img
                                alt="professor Hyun Woo Park"
                                src="assets/images/professor/Hyun Woo Park.jpg"/>

                            <div>
                                <p className="professor-name">Hyun Woo (Henry) Park, Professor</p>
                                <ul>
                                    <li>Associate Professor</li>
                                    <li>Director, AST Metastasis Research Center</li>
                                    <li>SUHF Fellow, Suh Kyungbae Foundation</li>
                                </ul>
                            </div>
                        </div>

                        <h3>Members</h3>

                        <div className="list-people">
                            {data_people.members.map(person => <ProfileCard person={person}/>)}
                        </div>

                        <h3>Alumni</h3>

                        <div className="list-people">
                            {data_people.alumni.map(person => <ProfileCard person={person}/>)}
                        </div>
                    </section>
                    
                    <section id="content-publication">
                        <h2>Publication Highlights</h2>

                        <div className="list-publications">
                            {data_publications.filter(article => article.featured).map((article, index) => <PublicationPreview article={article} no_border={index === 0}/>)}
                        </div>

                        <ContentButton label="View All Publications" href="/publications"/>
                    </section>

                    <section id="content-news">
                        <h2>Featured News</h2>

                        <div className="list-articles">
                            {data_news.filter(article => article.featured).map(article => <ArticlePreview article={article}/>)}
                        </div>

                        <ContentButton label="View All News" href="/news"/>
                    </section>
                    
                    <section id="content-open-positions">
                        <h2>Open Positions</h2>
                        <p>
                            asdfasfsafsafsfas
                        </p>
                    </section>
                </div>
            </div>
        </div>);
};
export default PageHome;