import React from "react";
import "./style.css";

const ArticlePreview = ({article}) => {
	return (
    <div className={`article-preview`}>
        <img
            width={128} height={128}
            alt="preview of article"
            src={article.preview_image}/>
        <div>
            <a href={article.src} target="_blank">{article.title} </a>
            <div className="text-time">{article.date}</div>
            <p>{article.preview_content}</p>
        </div>
    </div>
  );
};
export default ArticlePreview;