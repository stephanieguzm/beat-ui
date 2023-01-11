import './StoryCard.css'

export const StoryCard = ({ story }) => {

  return (
    <section className='story-card'>
      <h1>{story.title}</h1>
    </section>
  )
}
