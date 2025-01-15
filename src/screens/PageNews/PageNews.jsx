import React from "react";

import VerticalNavButton from "../../components/VerticalNavButton/VerticalNavButton";

import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";

import "./style.css";

import data_news from "../../content/news.json";

const Module = () => {
  return (
    <div>
        <div className="back-button-wrapper">
            <a className="back-button" href="/">Back to Home</a>
        </div>
        <div className="content-horizontal-flex">
            <div id="other-left-nav-tab-wrapper">
                <div id="other-left-nav-tab">
                <a className="left-nav-tab-home" href="/">The TCR Lab</a>
                    <VerticalNavButton label="Publications" src="/publications"/>
                    <VerticalNavButton label="Featured News" src="/news"/>
                </div>
            </div>

            <div className="content">
                <div id="content-news">
                    <div className="title-wrapper">
                        <h2>The TCR Lab:&nbsp;&nbsp;Featured News</h2>
                        <span className="description-label">{data_news.length} results</span>
                    </div>

                    <div className="list-articles">
                        {data_news.map(article => <ArticlePreview article={article}/>)}
                    </div>

                    {/* <ContentButton label="View All News" href="/news"/> */}
                </div>
            </div>
        </div>
    </div>);
};
export default Module;