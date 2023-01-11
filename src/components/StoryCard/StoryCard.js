import { Link } from 'react-router-dom'
import './StoryCard.css'

export const StoryCard = ({ story }) => {
  console.log(story)
  return (
    <Link to={`/${story.id}`}>
      <section className='story-card' id={story.id}>
        <img className='card-img' src={story.multimedia[1].url} alt={story.multimedia[1].caption} />
        <h2>{story.title}</h2>
        <p>{story.section}</p>
        <p>{story.byline}</p>
      </section>
    </Link>
  )
}
