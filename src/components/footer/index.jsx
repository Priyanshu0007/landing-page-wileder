
import "./style.scss"
import Social from "../../assets/social.png"



const Footer = () => {
  return (
    <div  className="footer">
        <div className="footer-content-wrapper">
        <ul className="footer-menu-items">
            <li className="footer-menu-item" >
                Home
            </li>
            <li className="footer-menu-item" >
                Page1
            </li>
            <li className="footer-menu-item" >
                Page2
            </li>
        </ul>
        <div className='bottom-bar'>
        <div className="social-icons">
          <img src={Social} alt='social'/>
        </div>
        
            <div className='copyright-text'>
            © Logo, Inc.
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer