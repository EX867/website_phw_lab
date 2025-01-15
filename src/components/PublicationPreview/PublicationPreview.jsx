import React from "react";
import "./style.css";

export const PublicationPreview = ({article, no_border = true}) => {
	return (
    <div className={`publication-preview`} no_border={String(no_border)}>
        <span dangerouslySetInnerHTML={{__html: article.html_text + " DOI: "}}></span>
        <a href={"https://doi.org/" + article.doi} target="_blank">{article.doi}</a>
    </div>
  );
};
