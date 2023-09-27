import "./style.scss"
import React1 from "../../assets/Rectangle1.png"
import React2 from "../../assets/Rectangle2.png"
import React3 from "../../assets/Rectangle3.png"
const Subsection = () => {
  return (
    <div className="Box">
    <div className="cont">
    <div className="box"><div className="rectangle" /></div>
    <div className="label">
        <div className="about-us">Lorem</div>
        <div className="subtitle">subtitle</div>
    </div>
    
    <div className="image-cont">
        <img src={React1} alt="img1"/>
        <img src={React2} alt="img1"/>
        <img src={React3} alt="img1"/>
    </div>
    </div>
    </div>
  )
}

export default Subsection