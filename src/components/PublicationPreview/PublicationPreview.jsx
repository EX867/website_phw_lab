import React from "react";
import "./style.css";

const PublicationPreview = ({article, no_border = true}) => {
	return (
        <div className="publication-preview" no_border={String(no_border)}>
            <div>{article.author + " "}
                {article.title + " "}
                <em>{article.journal + " "}</em>
                {article.publication_detail}
                {"doi" in article ? <span>{" doi: "}<a href={"https://doi.org/" + article.doi} target="_blank" rel="noreferrer">{article.doi}</a></span> : ""}
            </div>
            {/* <span dangerouslySetInnerHTML={{__html: article.html_text + " doi: "}}></span> */}
        </div>
    );
};

export default PublicationPreview;