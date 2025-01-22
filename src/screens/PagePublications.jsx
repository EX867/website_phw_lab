import React from "react";

import MobileNavBar from "components/MobileNavBar/MobileNavBar";
import VerticalNavButton from "../components/VerticalNavButton/VerticalNavButton";

import PublicationPreview from "../components/PublicationPreview/PublicationPreview";

import data_publications from "../content/publications.json";

const Module = () => {
    return (
        <div>
            <MobileNavBar>
                <a className="other-nav-home" href="/">The TCR Lab</a>
                <VerticalNavButton label="Featured News" src="/news"/>
                <VerticalNavButton label="Publications" src="#content-publication"/>
            </MobileNavBar>

            <div className="back-button-bar">
                <a className="back-button" href="/">Back to Home</a>
            </div>
            <div className="content-horizontal-flex gap-20">
                <div id="desktop-nav-wrapper">
                    <div id="other-nav">
                        <a className="other-nav-home" href="/">The TCR Lab</a>
                        <VerticalNavButton label="Featured News" src="/news"/>
                        <VerticalNavButton label="Publications" src="#content-publication" highlight="true"/>
                    </div>
                </div>

                <div id="content">
                    <section id="content-publication">
                        <div className="title-wrapper">
                            <h1>The&nbsp;TCR&nbsp;Lab:&thinsp;&thinsp;Publications</h1>
                            <span className="text-gray pr-2">{data_publications.length}&nbsp;results</span>
                        </div>

                        <a href="https://scholar.google.co.kr/citations?hl=en&user=FdmQOs0AAAAJ&sortby=pubdate&view_op=list_works&gmla=AJsN-F4-j0vMeixWvh4gDgZvz9VaE8RmMf06np0YJ32IQshQavr3l8tFf797kezvf_qylJBz-ZxwfeTRH7rxDdN3MLqSUZgBBQ"><b>Google Scholar: Hyun Woo Park</b></a>
                        <br/><br/>
                    
                        <div className="list-publications">
                            {data_publications.map((article, index) => <PublicationPreview article={article} no_border={index === 0}/>)}
                        </div>
                    </section>
                </div>
            </div>
        </div>);
};
export default Module;