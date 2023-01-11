import { StoryCard } from '../StoryCard/StoryCard'
import './Stories.css'

export const Stories = ({ topStories }) => {

  const storyCards = topStories.map(story => {
    return <StoryCard 
      story={story}
      key={story.id}
    />
  }) 

  return (
    <section className='stories-container'>
      <h1>This is the stories container</h1>
      {storyCards}
    </section>
  )
}
