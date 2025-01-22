import React from "react";

import MobileNavBar from "components/MobileNavBar/MobileNavBar";
import VerticalNavButton from "../components/VerticalNavButton/VerticalNavButton";

import ArticlePreview from "../components/ArticlePreview/ArticlePreview";

import data_news from "../content/news.json";

const Module = () => {
    return (
        <div>
            <MobileNavBar>
                <a className="other-nav-home" href="/">The TCR Lab</a>
                <VerticalNavButton label="Featured News" src="#content-news"/>
                <VerticalNavButton label="Publications" src="/publications"/>
            </MobileNavBar>

            <div className="back-button-bar">
                <a className="back-button" href="/">Back to Home</a>
            </div>
            <div className="content-horizontal-flex gap-20">
                <div id="desktop-nav-wrapper">
                    <div id="other-nav">
                        <a className="other-nav-home" href="/">The TCR Lab</a>
                        <VerticalNavButton label="Featured News" src="#content-news" highlight="true"/>
                        <VerticalNavButton label="Publications" src="/publications"/>
                    </div>
                </div>

                <div id="content">
                    <section id="content-news">
                        <div className="title-wrapper">
                            <h1>The&nbsp;TCR&nbsp;Lab:&thinsp;&thinsp;Featured News</h1>
                            <span className="text-gray pr-2">{data_news.length}&nbsp;results</span>
                        </div>

                        <div className="list-articles">
                            {data_news.map(article => <ArticlePreview article={article}/>)}
                        </div>
                    </section>
                </div>
            </div>
        </div>);
};
export default Module;