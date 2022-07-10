import '../App.css'
// @ts-ignore
import star from '../images/star.png'
// import picture from '../images/san-blas.jpeg'

interface Props {
  picture: string,
  location: string
  rating: number,
  reviewCount: number,
  price: number
}

export default function Card (props: Props) {

  return (
    <div className="card">
      {/*
      //@ts-ignore*/}
      <img src={require(`../images/${props.picture}`)} alt="house" className="card--image"></img>
      <div className="card--stats">
        <span className="bold card--title">{props.location}</span>
        <img src={star} className="card--star" alt="star"></img>
        <span>{props.rating}</span>
        <span className="gray card--review-count">({props.reviewCount})</span>
      </div>
      <p><span className="bold">From ${props.price}</span> / night</p>
    </div>
  )
}