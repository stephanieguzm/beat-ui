import { Link } from 'react-router-dom'
import './StoryCard.css'

export const StoryCard = ({ story }) => {
  return (
    <Link to={`/${story.id}`}>
      <section className='story-card' id={story.id}>
        <h2>{story.title}</h2>
        <p>{story.section}</p>
        <p>{story.byline}</p>
      </section>
    </Link>
  )
}
