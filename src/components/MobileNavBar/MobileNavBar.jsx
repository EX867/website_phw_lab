import React, {useState} from "react";
import "./style.css";

const MobileNavBar = ({children}) => {
    const [isOpen, setMenu] = useState(false);
  
    const toggleMenu = () => {
        if(isOpen){
            document.body.style.overflow = "auto";
        }else{
            document.body.style.overflow = "hidden";
        }
        setMenu(!isOpen);
    }

    const closeMenu = () => {
        document.body.style.overflow = "auto";
        setMenu(false);
    }

    return (
        <div className="mobile-nav-bar z-10">
            {isOpen ? <div className="cover-back"/> : ""}
            <div className="relative bg-yonsei">
                <button className="p-3 hover:bg-hover active:bg-active" label="menu" onClick={toggleMenu}>
                    {isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ffffff"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg> 
                        : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ffffff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>}
                </button>
            </div>
            <nav className={isOpen ? "show-menu" : "hide-menu"}>
                {children.map(child => React.cloneElement(child, {onClick: closeMenu}))}
            </nav>
        </div>);
};

export default MobileNavBar;