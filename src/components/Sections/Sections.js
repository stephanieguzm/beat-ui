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
          className='section-btn'
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
    <section className="sidebar">
      <article className='section-container'>
        <h2 className='section-text'>Browse By Section</h2>
        {sectionOptions}
      </article>
    </section>
  )
}
