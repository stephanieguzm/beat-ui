import { StoryCard } from '../StoryCard/StoryCard'
import nyTimesLogo from '../../nyt_logo.jpeg'
import './Stories.css'

export const Stories = ({ topStories }) => {

  const storyCards = topStories.map(story => {
    return <StoryCard 
      id={story.id}
      title={story.title}
      byline={story.byline}
      section={story.section}
      img={!story.multimedia ? nyTimesLogo : story.multimedia[1].url}
      imgCaption={!story.multimedia ? story.title : story.multimedia[1].copyright}
      key={story.id}
    />
  }) 

  return (
    <section className='stories-container'>
      {storyCards}
    </section>
  )
}
