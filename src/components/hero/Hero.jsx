import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='container hero'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className="btn">Explore more <img src={darkArrow} alt="arrow icon" className='arrow-icon'/></button>
        </div>
    </div>
  )
}

export default Hero