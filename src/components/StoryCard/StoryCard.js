import { Link } from 'react-router-dom'
import './StoryCard.css'

export const StoryCard = ({ story }) => {

  console.log(story)
  return (
    <Link to={`/${story.id}`}>
      <section className='story-card' id={story.id}>
        <h1>{story.title}</h1>
        <p>{story.section}</p>
        <p>{story.byline}</p>
        <p>{story.longUrl}</p>
      </section>
    </Link>
  )
}
