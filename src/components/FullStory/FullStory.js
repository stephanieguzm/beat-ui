import './FullStory.css'

export const FullStory = ({ topStories, storyId }) => {
  const selectedStory = topStories.find(story => story.id === storyId) 
console.log(selectedStory)

  return (
    <section className='full-story-container' id={selectedStory.id}>
      <h1>{selectedStory.title}</h1>
      <p>{selectedStory.abstract}</p>
      <p>{selectedStory.byline}</p>
      <p>{selectedStory.section}</p>
      <img src={selectedStory.multimedia[1].url} alt={selectedStory.multimedia[1].caption} />
      <p>{selectedStory.multimedia[1].caption}</p>
      <p>Published: {selectedStory.publishedDate}</p>
      {selectedStory.updatedDate && <p>Updated: {selectedStory.updatedDate}</p>}

    </section>
  )
}
