import React from "react";

import VerticalNavButton from "../../components/VerticalNavButton/VerticalNavButton";

import PublicationPreview from "../../components/PublicationPreview/PublicationPreview";

import "./style.css";

import data_publications from "../../content/publications.json";

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
                <div id="content-publication">
                    <div className="title-wrapper">
                        <h2>The TCR Lab:&nbsp;&nbsp;Publications</h2>
                        <span className="text-gray">{data_publications.length} results</span>
                    </div>

                    <a href="https://scholar.google.co.kr/citations?hl=en&user=FdmQOs0AAAAJ&sortby=pubdate&view_op=list_works&gmla=AJsN-F4-j0vMeixWvh4gDgZvz9VaE8RmMf06np0YJ32IQshQavr3l8tFf797kezvf_qylJBz-ZxwfeTRH7rxDdN3MLqSUZgBBQ"><b>Google Scholar: Hyun Woo Park</b></a>
                    <br/><br/>
                
                    <div className="list-publications">
                        {data_publications.map((article, index) => <PublicationPreview article={article} no_border={index === 0}/>)}
                    </div>
                </div>
            </div>
        </div>
    </div>);
};
export default Module;