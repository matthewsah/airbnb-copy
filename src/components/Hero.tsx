import '../App.css'
// @ts-ignore
import * as heroImg from '../images/hero-img.png'

export default function Hero () {
  return (
    <div className="hero">
      <img src={heroImg.default} alt="hero" className="hero--image"></img>
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by 
        one-of-a-kind hosts -all without leaving 
        home.
      </p>
    </div>
  )
}