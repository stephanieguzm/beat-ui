import { StoryCard } from '../StoryCard/StoryCard'
import './Stories.css'

export const Stories = () => {
  return (
    <section className='stories-container'>
      <h1>This is the stories container</h1>
      <StoryCard />
      <StoryCard />
    </section>
  )
}
