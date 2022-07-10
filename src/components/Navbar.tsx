import '../App.css'
// @ts-ignore
import * as airbnbLogo from '../images/airbnb-logo.png'

export default function Navbar () {
  return (
    <div class="nav">
      <img src={airbnbLogo.default} alt="airbnb logo"></img>
    </div>
  )
}