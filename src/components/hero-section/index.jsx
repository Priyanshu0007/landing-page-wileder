import "./style.scss"
import Hero2 from "../../assets/hero2.png";
import Hero1 from "../../assets/hero1.png";
import Hero4 from "../../assets/hero4.png";
import Logo from "../../assets/logo.png"
const Hero = () => {
  return (
    <div className="container"> 
    <div className="hero-content">
        <img src={Logo} alt="logo"/>
    </div>
    <section className="carousel" aria-label="Gallery">
    <ol className="carousel__viewport">
    <li id="carousel__slide1" className="carousel__slide">
      <div className="carousel__snapper">
      <img src={Hero1} alt='hero1'/>
        <a href="#carousel__slide1"
           className="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           className="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2" className="carousel__slide">
      <div className="carousel__snapper">
        <img src={Hero2} alt='hero2'/>
      </div>
      <a href="#carousel__slide1"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         className="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3" className="carousel__slide">
      <div className="carousel__snapper">
      <img src={Hero4} alt='hero4'/>
      </div>
      <a href="#carousel__slide3"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         className="carousel__next">Go to next slide</a>
    </li>
   
  </ol>
    </section>
    </div>
    
  )
}

export default Hero