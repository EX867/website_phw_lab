import React, {useState} from "react";
// import IconX from "../../icons/IconX";
import IconSearch from "../../icons/IconSearch/IconSearch";
import "./style.css";

const SearchInput = ({label = "Search", color}) => {
  // eslint-disable-next-line no-unused-vars
	const [filled, setFilled] = useState(false);
  return (
    <div className={`search`}>
      <input type="search" id="q" placeholder={label} onChange={e => setFilled(e.target.value.length > 0)}/>
      <div onClick={() => {
        var q = document.getElementById('q').value;
        q += ' site:react.dev';
        window.open('http://www.google.com/search?q=' + encodeURIComponent(q));
      }}>
        <IconSearch color={color}/>
      </div>
    </div>
  );
};

export default SearchInput;

// <input type="search" name="query" placeholder={label} onChange={e => setFilled(e.target.value.length > 0)}/>
// {filled ? <Icon_X color={color}/> : <Icon_Search color={color}/>}
