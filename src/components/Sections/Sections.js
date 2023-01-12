import { Link } from 'react-router-dom'
import './Sections.css'

export const Sections = ({ setUserSelectedSelection }) => {

  const sections = ["home", "arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]  
  
  const handleClick = (event) => {
    setUserSelectedSelection(event.target.value)
  }
  
  const sectionOptions = sections.map(section => {
    return (
      <Link to='/'>
        <button
          className='section'
          value={section}
          onClick={(event) => handleClick(event)}
          id={sections.indexOf(section)}
          key={sections.indexOf(section)}>
            {/* {console.log('section index', sections.indexOf(section))} */}
          {section.toUpperCase()}
        </button>
      </Link>
    )
  })

  return (
    <article className='section-container'>
      {sectionOptions}
    </article>
  )
}
