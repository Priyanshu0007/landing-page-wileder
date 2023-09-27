import "./style.scss";
import Logo from "../../assets/logo.png"
import { useState } from "react";
//import { scrollTosection } from "../../utils/helpers";
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    // const menuItemClickHandler = (section) => {
    //     setMobileMenu(!mobileMenu);
    //     scrollTosection(section);
    // };
  return (
    <div className="nav">
    <div className="navbar">
        <div>
            <img src={Logo} alt="logo"/>
        </div>
        <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
                {!mobileMenu ? (
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="2" fill="#6A45FF"/>
                    <rect y="7" width="20" height="2" fill="#6A45FF"/>
                    <rect y="14" width="20" height="2" fill="#6A45FF"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#6A45FF">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                
                )}
        </div>
        <div className={`navbar_el ${mobileMenu ? "active" : ""}`}>
            <h2>Home</h2>
            <h2>Page1</h2>
            <h2>Page2</h2>
        </div>
    </div>
    </div>
  )
}

export default Navbar