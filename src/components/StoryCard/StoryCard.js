import { Link } from 'react-router-dom'
import './StoryCard.css'

export const StoryCard = ({ id, title, byline, section, img, imgCaption }) => {

  return (
    <Link to={`/${id}`}>
      <section className='story-card' id={id}>
        <img className='card-img' src={img} alt={imgCaption} />
        <h2>{title}</h2>
        <p>{byline}</p>
        <p>{section}</p>
      </section>
    </Link>
  )
}
