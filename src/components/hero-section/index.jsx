import "./style.scss"
import Hero2 from "../../assets/hero2.png";
import Hero3 from "../../assets/hero3.png";
import Hero4 from "../../assets/hero4.png";
const Hero = () => {
  return (
    <section className="carousel" aria-label="Gallery">
  <ol className="carousel__viewport">
    <li id="carousel__slide1" className="carousel__slide">
      <div className="carousel__snapper">
      <img src={Hero3} alt='hero3'/>
        <a href="#carousel__slide4"
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
      <a href="#carousel__slide2"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         className="carousel__next">Go to next slide</a>
    </li>
   
  </ol>
</section>
  )
}

export default Hero