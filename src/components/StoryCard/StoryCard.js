import { Link } from 'react-router-dom'
import './StoryCard.css'

export const StoryCard = ({ id, title, byline, img, imgCaption }) => {

  return (
    <section className='story-card' id={id}>
      <Link to={`/${id}`}>
        <img className='card-img' src={img} alt={imgCaption} />
        <h2 className='card-text'>{title}</h2>
        <p className='card-text'>{byline}</p>
      </Link>
    </section>
  )
}
