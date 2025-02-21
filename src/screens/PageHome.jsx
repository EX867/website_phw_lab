import React, { useEffect } from 'react';
import Slider from "react-slick";

import MobileNavBar from "components/MobileNavBar/MobileNavBar";
import FollowingNavButton from "../components/FollowingNavButton/FollowingNavButton";
import VerticalNavButton from "../components/VerticalNavButton/VerticalNavButton";

import ProfileCard from "../components/ProfileCard/ProfileCard";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import PublicationPreview from "../components/PublicationPreview/PublicationPreview";
import ContentButton from "../components/ContentButton/ContentButton";
// import Collaborators from '../components/Collaborators/Collaborators';

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

                if (section.offsetTop - 20 <= window.scrollY) { // give som padding 
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
            } else {
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

    // touchStart와 touchEnd 이벤트 핸들러 추가
    const handleTouchStart = (e) => {
        e.stopPropagation();
    };

    const handleTouchEnd = (e) => {
        e.stopPropagation();
    };

    const slider_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,

        swipe: true,           // 터치/스와이프 활성화 (기본값: true)
        swipeToSlide: true,    // 슬라이드당 스와이프 활성화
        touchMove: true,       // 터치 이동 활성화 (기본값: true)
        touchThreshold: 5,     // 스와이프 감도 (기본값: 5)
        draggable: true,
        accessibility: true,
        // 모바일 반응형 설정 추가
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    draggable: true
                }
            }
        ],
        appendDots: dots => (
            <div>
                <button className="carousel-button" onClick={() => slider?.current?.slickPrev()}><span className="material-icons">chevron_left</span></button>
                <ul className="inline carousel-dots-container" > {dots} </ul>
                <button className="carousel-button" onClick={() => slider?.current?.slickNext()}><span className="material-icons">chevron_right</span></button>
            </div>
        ),
        beforeChange: (current, next) => {
            // 현재 활성 슬라이드에 "slick-current" 클래스가 적용되어 있음.
            const currentSlideIframe = document.querySelector('.slick-current iframe');
            if (currentSlideIframe) {
                // YouTube IFrame API를 통해 stopVideo 명령 전송
                currentSlideIframe.contentWindow.postMessage(
                    JSON.stringify({ event: 'command', func: 'stopVideo', args: [] }),
                    '*'
                );
            }
        },
    };


    const collaborators = [
        {
            href: "https://biochem.yonsei.ac.kr/biochem/index.do",
            src: "./assets/images//collaborators/yonsei-biochemistry.jpeg",
            alt: "Yonsei University, Department of Biochemistry logo",
            id: "link-yonsei-biochemistry"
        },
        {
            href: "https://www.uke.de/english/departments-institutes/institutes/tumor-biology/european-liquid-biopsy-society-elbs/index.html",
            src: "./assets/images//collaborators/uke-tumor-biology.jpeg",
            alt: "University Medical Center Hamburg-Eppendorf, Tumor Biology Center logo",
            id: "link-uke-tumor-biology"
        },
        {
            href: "https://metastasis-research.org",
            src: "./assets/images//collaborators/metastasis-research.jpeg",
            alt: "Metastasis Research Society logo",
            id: "link-metastasis-research"
        },
        {
            href: "https://www.ozmrs.com",
            src: "./assets/images//collaborators/ozmrs.jpeg",
            alt: "The Australian Society for Medical Research logo",
            id: "link-ozmrs"
        },
        {
            href: "https://www.ncc.go.jp/en/ncce/about/index.html",
            src: "./assets/images//collaborators/ncc-japan.jpeg",
            alt: "National Cancer Center, Japan logo",
            id: "link-ncc-japan"
        },
        {
            href: "https://www.cancergrandchallenges.org",
            src: "./assets/images/collaborators/cancer-grand-challenges.jpeg",
            alt: "Cancer Grand Challenges logo",
            id: "link-cancer-grand-challenges"
        }
    ];

    return (
        <div className="flex flex-col items-center">
            <MobileNavBar>
                <VerticalNavButton label="Research" src="#content-research" />
                <VerticalNavButton label="Featured News" src="#content-news" />
                <VerticalNavButton label="Publication Highlights" src="#content-publication" />
                <VerticalNavButton label="People" src="#content-people" />
                <VerticalNavButton label="Open Positions" src="#content-open-positions" />
                <VerticalNavButton label="Related Links" src="#content-collaborators" />

            </MobileNavBar>

            <div className="main-image">
                {/* <img alt="research content"
                    src="./assets/images/main.png"/> */}
                <picture>
                    {/* 뷰포트 너비가 767px 이하인 경우 모바일 이미지를 사용 */}
                    <source media="(max-width: 767px)" srcSet="./assets/images/main_mobile.jpeg" />
                    {/* 768px 이상인 경우 PC용 이미지를 사용 */}
                    <source media="(min-width: 768px)" srcSet="./assets/images/main_desktop.jpeg" />
                    {/* 브라우저가 <picture> 태그를 지원하지 않을 경우 기본으로 PC용 이미지를 사용 */}
                    <img src="./assets/images/main-desktop.png" alt="research content" />
                </picture>
            </div>
            <div className="content-horizontal-flex gap-11">
                <div id="desktop-nav-wrapper">
                    <div id="home-nav">
                        <FollowingNavButton label="Research" src="#content-research" />
                        <FollowingNavButton label="Featured News" src="#content-news" />
                        <FollowingNavButton label="Publication Highlights" src="#content-publication" />
                        <FollowingNavButton label="People" src="#content-people" />
                        <FollowingNavButton label="Achievements" src="#content-achievements" />
                        <FollowingNavButton label="Open Positions" src="#content-open-positions" />
                        <FollowingNavButton label="Related Links" src="#content-collaborators" />
                    </div>
                </div>

                <div id="content">
                    <div className="grouped-sections">
                        <section id="content-research">
                            <h2>Research</h2>
                            <div className="content-horizontal-flex gap-8">
                                <div className="w-full">
                                    <p >
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
                                    <br />
                                    <h2>Research Projects</h2>
                                    <ul>
                                        <li>Cancer cell plasticity and metastasis</li>
                                        <li>Cancer metabolism and therapeutic responses</li>
                                        <li>Immuno-oncology and inflammatory diseases</li>
                                        <li>Next generation anti-cancer drug development </li>
                                    </ul>
                                    <br /><br /><br />
                                </div>

                                <div className="professor-small">
                                    <img className="w-48 pb-2"
                                        alt="professor Hyun Woo Park"
                                        src="./assets/images/professor/Hyun Woo Park.jpg" />

                                    <div className="text-yonsei font-bold leading-normal">
                                        Hyun Woo (Henry) Park, PhD
                                    </div>
                                    <div>
                                        Associate Professor<br />
                                        Dept. Biochemistry,<br />
                                        Yonsei University
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="content-media">
                            <div className="carousel-container"
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                <Slider ref={slider} {...slider_settings}>

                                    <div className="carousel-item" data-index="0">
                                        <iframe src="https://www.youtube-nocookie.com/embed/3ihLLwSEJlI?si=d-aQuNS1EjGAY40o&enablejsapi=1&rel=0"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                                        <div className="pl-4 pt-4 pr-4">
                                            2024 경암바이오유스캠프 강연 : 혹부리 영감이 들려주는 암전이의 비밀
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-index="1">
                                        <iframe src="https://www.youtube.com/embed/dUgsEOfYi7E?si=sm83uXGiEWg0uwAQ&enablejsapi=1&rel=0"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                                        <div className="pl-4 pt-4 pr-4">
                                            서경배과학재단 펠로우로 선정된 연세대학교 생화학과 박현우 교수님 인터뷰
                                        </div>
                                    </div>

                                    <div className="carousel-item" data-index="2">
                                        <iframe src="https://www.youtube.com/embed/1OF3CpMPFlI?enablejsapi=1&rel=0"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                                        <div className="pl-4 pt-4 pr-4">
                                            AST 패러다임의 발견
                                        </div>
                                    </div>

                                    <div className="carousel-item" data-index="3">
                                        <img alt="people"
                                            src="./assets/images/home_lab.jpg" />
                                        <div className="pl-4 pt-4 pr-4">
                                            TCR Lab의 훌륭한 연구원들과 함께하는 암 정복의 여정
                                        </div>
                                    </div>

                                    <div className="carousel-item" data-index="4">
                                        <img alt="people"
                                            src="./assets/images/home_lab_4.jpeg" />
                                        <div className="pl-4 pt-4 pr-4">
                                            2024 MRS conference, Francis Crick Institute, London
                                        </div>
                                    </div>

                                    <div className="carousel-item" data-index="5">
                                        <img alt="people"
                                            src="./assets/images/home_lab_5.jpeg" />
                                        <div className="pl-4 pt-4 pr-4">
                                            2024 MRS conference, Francis Crick Institute, London
                                        </div>
                                    </div>

                                    <div className="carousel-item" data-index="6">
                                        <img alt="people"
                                            src="./assets/images/home_lab_6.jpeg" />
                                        <div className="pl-4 pt-4 pr-4">
                                            2023 Keystone Symposia on Metastasis, Vancouver, Canada
                                        </div>
                                    </div>

                                    <div className="carousel-item" data-index="7">
                                        <img alt="people"
                                            src="./assets/images/home_cgv.jpg" />
                                        <div className="pl-4 pt-4 pr-4">
                                            TCR Lab과 함께 신나는 Lab activity!
                                        </div>
                                    </div>

                                    <div className="carousel-item" data-index="8"
                                        onClick={() => window.open('./assets/pdfs/comic.pdf#page=1', '_blank')}>
                                        <img alt="people"
                                            src="./assets/images/illustration.png" />
                                        <div className="pl-4 pt-4 pr-4">
                                            김명호 작가님이 그려주신 암전이 연구의 역사와 AST 패러다임의 발견

                                        </div>
                                    </div>
                                    {/* 
                                    <div className="carousel-item" data-index="6"
                                        onClick={() => window.open('./assets/pdfs/comic.pdf#page=8', '_blank')}>
                                        <img alt="people"
                                            // style={{ width: "100%", height: "100%", objectFit: "cover", border: "1px solid red" }}

                                            src="./assets/images/illustration_2.png" />
                                        <div className="pl-4 pt-4 pr-4">
                                            만화2 8페이졸
                                        </div>
                                    </div> */}


                                    <div className="carousel-item" data-index="9">
                                        <iframe src="https://www.youtube.com/embed/7t_orl4pXgM?si=2aQUn3SW3-tIgw9b&enablejsapi=1&rel=0"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                                        <div className="pl-4 pt-4 pr-4">
                                            AST암전이연구단 박현우 단장 인터뷰
                                        </div>
                                    </div>

                                </Slider>
                                <br /><br />
                            </div>
                        </section>
                        <section id="content-news">
                            <h2>Featured News</h2>

                            <div className="list-articles">
                                {data_news.filter(article => article.featured).map(article => <ArticlePreview article={article} />)}
                            </div>

                            <ContentButton label="View All Featured News" href="/news" />
                        </section>
                    </div>

                    <section id="content-publication">
                        <h2>Publication Highlights</h2>

                        <div className="list-publications">
                            {data_publications.filter(article => article.featured).map((article, index) => <PublicationPreview article={article} no_border={index === 0} />)}
                        </div>

                        <ContentButton label="View All Publications" href="/publications" />
                    </section>

                    <section id="content-people">
                        <h2>People</h2>

                        <div className="content-horizontal-flex gap-6 items-center">
                            <img className="size-48 max-w-[95%]"
                                alt="professor Hyun Woo Park"
                                src="./assets/images/professor/Hyun Woo Park.jpg" />

                            <div>
                                <h2 className="text-text_black  -mt-1">Hyun Woo (Henry) Park, PhD</h2>
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

                        <br /><br />
                        <h3>Members</h3>

                        <div className="list-people">
                            {data_people.members.map(person => <ProfileCard person={person} />)}
                        </div>

                        <br /><br />
                        <h3>Alumni</h3>

                        <div className="list-people">
                            {data_people.alumni.map(person => <ProfileCard person={person} />)}
                        </div>
                    </section>

                    <section id="content-achievements">
                        <h2>Achievements</h2>
                        <ul>
                            <li>
                                2025년 첨단바이오 한-일-호주 글로벌 공동연구센터 지정
                                <span className="achievement-link-banner">
                                    <a href="https://biochem.yonsei.ac.kr/biochem/board/board03.do?mode=view&articleNo=218660"
                                        target="_blank"
                                        rel="noreferrer">
                                        [바로가기]
                                    </a>
                                </span>
                            </li>
                            <li>

                                2024년 국가연구개발 우수성과 100선 선정
                                <span className="achievement-link-banner">
                                    <a href="https://www.kistep.re.kr/board.es?mid=a10202060400&bid=0072&act=view&list_no=93966"
                                        target="_blank"
                                        rel="noreferrer">
                                        [바로가기]
                                    </a>
                                </span>
                            </li>
                            <li>
                                2024년 한국생화학분자생물학회 사석상 수상
                            </li>
                            <li>
                                2023년 미래융합전략센터 FSCS 융합연구 우수사례 선정
                            </li>
                            <li>
                                2023년 과학기술정보통신부 융합연구개발 활성화 유공자 장관 표창
                                <span className="achievement-link-banner">
                                    <a href="https://www.yonsei.ac.kr/_custom/yonsei/_app/ocx/news/app.jsp?mode=view&ar_seq=20240122132146253062&sr_volume=0&list_mode=list&sr_site=S&pager.offset=0&sr_cates=20160305000124325067"
                                        target="_blank"
                                        rel="noreferrer">
                                        [바로가기]
                                    </a>
                                </span>
                            </li>
                            <li>
                                2020년 국가과학난제 AST암전이연구단 선정
                                <span className="achievement-link-banner">
                                    <a href="https://www.nscn.or.kr/?p=hrw"
                                        target="_blank"
                                        rel="noreferrer">
                                        [바로가기]
                                    </a>
                                </span>
                            </li>
                            <li>
                                2019년 한국분자세포생물학회 신진과학자상 수상
                            </li>
                            <li>
                                2018년 서경배과학재단팰로우 선정
                                <span className="achievement-link-banner">
                                    <a href="https://www.suhf.org/investigator/people.do"
                                        target="_blank"
                                        rel="noreferrer">
                                        [바로가기]
                                    </a>
                                </span>
                            </li>
                            <li>
                                2018년 포스코청암팰로우 선정
                            </li>


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

                    {/* 너비가 제한되는 collaborators 섹션 */}
                    <section id="content-collaborators">
                        <h2>Related Links</h2>
                        <div className="collaborators-grid" >
                            {collaborators.map((collaborator, index) => (
                                <div className={`collaborator-item ${index === 4 ? "large-image" : ""} ${index === 5 ? "small-image" : ""}`} key={index}>
                                    <a href={collaborator.href} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={collaborator.src}
                                            alt={collaborator.alt}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

            </div>
        </div>);
};
export default PageHome;