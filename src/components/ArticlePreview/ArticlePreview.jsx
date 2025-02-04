import React from "react";
import "./style.css";

const ArticlePreview = ({article}) => {
	return (
    <div className="article-preview">
        {article.preview_image === "" ?
            <img alt="placeholder"
                src="./assets/images/placeholder.svg"/> :
            <img alt="preview of article"
                src={article.preview_image}/>}
        <div>
            <a href={article.src} target="_blank" rel="noreferrer">{article.title} </a>
            {"date" in article ? <div className="text-text_gray text-smaller leading-normal py-1">{article.date}</div> : <div className="h-1"/>}
            <div>{article.preview_content}</div>
        </div>
    </div>
  );
};
export default ArticlePreview;