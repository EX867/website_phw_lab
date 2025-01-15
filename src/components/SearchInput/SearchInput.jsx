import React, {useState} from "react";
// import {Icon_X} from "../../icons/Icon_X";
import {Icon_Search} from "../../icons/Icon_Search";
import "./style.css";

export const SearchInput = ({label = "Search", color}) => {
	const [filled, setFilled] = useState(false);
  return (
    <div className={`search`}>
      <input type="search" id="q" placeholder={label} onChange={e => setFilled(e.target.value.length > 0)}/>
      <div onClick={() => {
        var q = document.getElementById('q').value;
        q += ' site:react.dev';
        window.open('http://www.google.com/search?q=' + encodeURIComponent(q));
      }}>
        <Icon_Search color={color}/>
      </div>
    </div>
  );
};

// <input type="search" name="query" placeholder={label} onChange={e => setFilled(e.target.value.length > 0)}/>
// {filled ? <Icon_X color={color}/> : <Icon_Search color={color}/>}
