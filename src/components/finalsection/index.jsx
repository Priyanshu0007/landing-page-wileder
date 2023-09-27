import Section from "../../assets/section.png"
import "./style.scss"
import Vector from "../../assets/vector.svg"
const FinalSection = () => {
  return (
    <div className="section">
        <div className={`rectangle`}></div> 
        <div className="box">
        <img src={Section} alt="section"/>    
        <div className="content">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod tempor incididunt ut labore et<br/>dolore magna aliqua. Ut enim ad minim veniam,quis<br/>nostrud exercitation ullamco laboris nisi ut aliquip ex<br/>ea commodo consequat.</p>
            <span className="span">
            <h3>Lorem ipsum   </h3>
            <div className="solar-arrow-up">
                <div className="overlap-group">
                    <div className="ellipse" />
                        <img className="vector" alt="Vector" src={Vector} />
                    </div>
                </div>
                </span>
            </div>
        </div>
    </div>
  )
}

export default FinalSection