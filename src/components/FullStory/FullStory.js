import nyTimesLogo from '../../nyt_logo.jpeg'
import './FullStory.css'

export const FullStory = ({ topStories, storyId }) => {
  const selectedStory = topStories.find(story => story.id === storyId) 

  return (
    <section className='full-story-container' id={selectedStory.id}>
      <h1>{selectedStory.title}</h1>
      <p className='full-story-text'>{selectedStory.byline}</p>
      <span className='full-story-caption'>Published: {selectedStory.publishedDate}</span>
      {selectedStory.updatedDate && <span className='full-story-caption'>Updated: {selectedStory.updatedDate}</span>}
      {!selectedStory.multimedia && <img src={nyTimesLogo} alt={selectedStory.title} />}
      {selectedStory.multimedia && <img src={selectedStory.multimedia[1].url} alt={selectedStory.multimedia[1].copyright} />}
      {selectedStory.multimedia && <span className='full-story-caption'>{selectedStory.multimedia[1].caption}</span>}
      <div className='full-story-abstract'>
        <p className='full-story-text'>{selectedStory.abstract}</p>
        {selectedStory.longUrl && <a 
          href={selectedStory.longUrl} 
          target='_blank' 
          rel='noreferrer' 
          className='full-story-text'> 
          READ THE FULL STORY
        </a>}
      </div>
    </section>
  )
}
