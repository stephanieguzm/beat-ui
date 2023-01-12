import nyTimesLogo from '../../nyt_logo.jpeg'
import './FullStory.css'

export const FullStory = ({ topStories, storyId }) => {
  const selectedStory = topStories.find(story => story.id === storyId) 

  return (
    <section className='full-story-container' id={selectedStory.id}>
      <h1>{selectedStory.title}</h1>
      <p>{selectedStory.byline}</p>
      <p>{selectedStory.section}</p>
      {!selectedStory.multimedia && <img src={nyTimesLogo} alt={selectedStory.title} />}
      {selectedStory.multimedia && <img src={selectedStory.multimedia[1].url} alt={selectedStory.multimedia[1].copyright} />}
      {selectedStory.multimedia && <p>{selectedStory.multimedia[1].caption}</p>}
      <p>{selectedStory.abstract}</p>
      <p>Published: {selectedStory.publishedDate}</p>
      {selectedStory.updatedDate && <p>Updated: {selectedStory.updatedDate}</p>}
      {selectedStory.longUrl && <a href={selectedStory.longUrl} target='_blank' rel='noreferrer'> READ THE FULL STORY</a>}
    </section>
  )
}
