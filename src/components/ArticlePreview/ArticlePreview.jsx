import React from "react";
import "./style.css";

const ArticlePreview = ({article}) => {
	return (
    <div className="article-preview">
            <img className="size-[8rem] max-w-[40%]"
                alt="preview of article"
                src={article.preview_image}/>
        <div>
            <a href={article.src} target="_blank" rel="noreferrer">{article.title} </a>
            <div className="text-text_gray text-smaller py-1">{article.date}</div>
            <p>{article.preview_content}</p>
        </div>
    </div>
  );
};
export default ArticlePreview;