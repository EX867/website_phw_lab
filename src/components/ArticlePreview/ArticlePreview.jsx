import React from "react";
import "./style.css";

const ArticlePreview = ({article}) => {
	return (
    <div className="article-preview">
        {article.preview_image === "" ?
            <img className="w-[10rem] h-[7.5rem] max-w-[40%] object-cover"
                alt="placeholder image"
                src="./assets/images/placeholder.svg"/> :
            <img className="w-[10rem] h-[7.5rem] max-w-[40%] object-cover"
                alt="preview of article"
                src={article.preview_image}/>}
        <div>
            <a href={article.src} target="_blank" rel="noreferrer">{article.title} </a>
            <div className="text-text_gray text-smaller py-1">{article.date}</div>
            <div>{article.preview_content}</div>
        </div>
    </div>
  );
};
export default ArticlePreview;