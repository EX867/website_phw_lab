import React, {useEffect} from "react";
import Slider from "react-slick";

import MobileNavBar from "components/MobileNavBar/MobileNavBar";
import FollowingNavButton from "../components/FollowingNavButton/FollowingNavButton";
import VerticalNavButton from "../components/VerticalNavButton/VerticalNavButton";

import ProfileCard from "../components/ProfileCard/ProfileCard";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import PublicationPreview from "../components/PublicationPreview/PublicationPreview";
import ContentButton from "../components/ContentButton/ContentButton";
import CopyLink from "../components/CopyLink/CopyLink";

import data_news from "../content/news.json";
import data_people from "../content/people.json";
import data_publications from "../content/publications.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

        return () => {
          window.removeEventListener("scroll", event_scroll);
        };
    }, []);

    const slider = React.useRef(null);
    const slider_settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div>
                <button className="carousel-button" onClick={() => slider?.current?.slickPrev()}><span className="material-icons">chevron_left</span></button>
                    <ul className="inline" style={{ margin: "0", padding: "0 1rem" }}> {dots} </ul>
                <button className="carousel-button" onClick={() => slider?.current?.slickNext()}><span className="material-icons">chevron_right</span></button>
            </div>
        ),
      };

    return (      
        <div className="flex flex-col items-center">
            <MobileNavBar>
                <VerticalNavButton label="Research" src="#content-research"/>
                <VerticalNavButton label="Featured News" src="#content-news"/>
                <VerticalNavButton label="Publication Highlights" src="#content-publication"/>
                <VerticalNavButton label="People" src="#content-people"/>
                <VerticalNavButton label="Open Positions" src="#content-open-positions"/>
            </MobileNavBar>

            <div className="main-image">
                <img alt="research content"
                    src="./assets/images/main.jpg"/>
                {/*<div className="main-text-frame">
                    <p className="main-text-detail">YONSEI UNIVERSITY</p>
                    <p className="main-text">The TCR Lab</p>
                        <img height={120}
                            alt="The TCR Lab logo"
                            src="./assets/images/logo.png"/>
                </div>*/}
            </div>
            <div className="content-horizontal-flex gap-11">
                <div id="desktop-nav-wrapper">
                    <div id="home-nav">
                        <FollowingNavButton label="Research" src="#content-research"/>
                        <FollowingNavButton label="Featured News" src="#content-news"/>
                        <FollowingNavButton label="Publication Highlights" src="#content-publication"/>
                        <FollowingNavButton label="People" src="#content-people"/>
                        <FollowingNavButton label="Achievements" src="#content-achievements"/>
                        <FollowingNavButton label="Open Positions" src="#content-open-positions"/>
                    </div>
                </div>

                <div id="content">
                    <section id="content-research">
                        <h2>Research</h2>
                        <div className="content-horizontal-flex gap-8">
                            <div className="w-full">
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
                                <br/>
                                <h2>Research Projects</h2>
                                <ul>
                                    <li>Cancer cell plasticity and metastasis</li>
                                    <li>Cancer metabolism and therapeutic responses</li>
                                    <li>Immuno-oncology and inflammatory diseases</li>
                                    <li>Next generation anti-cancer drug development </li>
                                </ul>
                                <br/><br/><br/>
                                <div className="carousel-container">
                                    <Slider ref={slider} {...slider_settings}>
                                        <div className="carousel-item">
                                            <iframe src="https://www.youtube-nocookie.com/embed/3ihLLwSEJlI?si=d-aQuNS1EjGAY40o&rel=0"
                                                    title="YouTube video player"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
                                            <div className="pl-4 pt-4 pr-4">
                                                2024 경암바이오유스캠프 강연 : 혹부리 영감이 들려주는 암전이의 비밀
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <iframe src="https://www.youtube.com/embed/dUgsEOfYi7E?si=sm83uXGiEWg0uwAQ&rel=0"
                                                    title="YouTube video player"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
                                            <div className="pl-4 pt-4 pr-4">
                                                서경배과학재단 펠로우로 선정된 연세대학교 생화학과 박현우 교수님 인터뷰
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <iframe src="https://www.youtube.com/embed/7t_orl4pXgM?si=2aQUn3SW3-tIgw9b&rel=0"
                                                    title="YouTube video player"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
                                            <div className="pl-4 pt-4 pr-4">
                                                AST암전이연구단 박현우 단장 인터뷰
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img alt="people"
                                                src="./assets/images/home_lab.jpg"/>
                                            <div className="pl-4 pt-4 pr-4">
                                                TCR Lab의 훌륭한 연구원들과 함께하는 암 정복의 여정
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img alt="people"
                                                src="./assets/images/home_cgv.jpg"/>
                                            <div className="pl-4 pt-4 pr-4">
                                                TCR Lab과 함께 신나는 Lab activity!
                                            </div>
                                        </div>
                                    </Slider>
                                    <br/><br/>
                                </div>
                            </div>

                            <div className="professor-small">
                                <img className="w-48 pb-2"
                                    alt="professor Hyun Woo Park"
                                    src="./assets/images/professor/Hyun Woo Park.jpg"/>

                                <div className="text-yonsei font-bold leading-normal">
                                    Hyun Woo Park, PhD
                                </div>
                                <div>
                                    Associate Professor<br/>
                                    Dept. Biochemistry,<br/>
                                    Yonsei University
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="content-news">
                        <h2>Featured News</h2>

                        <div className="list-articles">
                            {data_news.filter(article => article.featured).map(article => <ArticlePreview article={article}/>)}
                        </div>

                        <ContentButton label="View All Featured News" href="/news"/>
                    </section>

                    <section id="content-publication">
                        <h2>Publication Highlights</h2>

                        <div className="list-publications">
                            {data_publications.filter(article => article.featured).map((article, index) => <PublicationPreview article={article} no_border={index === 0}/>)}
                        </div>

                        <ContentButton label="View All Publications" href="/publications"/>
                    </section>

                    <section id="content-people">
                        <h2>People</h2>

                        <div className="content-horizontal-flex gap-6">
                            <img className="size-48 max-w-[95%]"
                                alt="professor Hyun Woo Park"
                                src="./assets/images/professor/Hyun Woo Park.jpg"/>

                            <div>
                                <h2 className="text-text_black">Hyun Woo (Henry) Park, PhD</h2>
                                <div className="text-small italic -mt-4">Associate Professor, Department of Biochemistry, Yonsei University</div>
                                <ul className="leading-[140%]">
                                    <li>Cancer biologist Hyun Woo (Henry) Park investigates cancer cell plasticity in metastatic cascade and anti-metastatic drug development</li>
                                    <li>Director, AST Metastasis Research Center</li>
                                    <li>SUHF Fellow</li>
                                    <li>University of California, San Diego: Postdoctoral Fellowship</li>
                                    <li>Yonsei University: PhD</li>
                                </ul>
                            </div>
                        </div>

                        <br/><br/>
                        <h3>Members</h3>

                        <div className="list-people">
                            {data_people.members.map(person => <ProfileCard person={person}/>)}
                        </div>

                        <br/><br/>
                        <h3>Alumni</h3>

                        <div className="list-people">
                            {data_people.alumni.map(person => <ProfileCard person={person}/>)}
                        </div>
                    </section>

                    <section id="content-achievements">
                        <h2>Achievements</h2>
                        <ul>
                            <li>Achievement 1</li>
                        </ul>
                    </section>
                    
                    <section id="content-open-positions">
                        <h2>Open Positions</h2>
                        <p>
                            Our lab warmly welcomes PhD Candidates and Postdoctoral Fellows with an interest to tackle grand challenges in cancer biology and drug development.
                        </p>
                        <CopyLink content="hwp003@yonsei.ac.kr" description="email">
                            <span className="material-icons">mail</span>&nbsp;hwp003@yonsei.ac.kr
                        </CopyLink>
                    </section>
                </div>
            </div>
        </div>);
};
export default PageHome;