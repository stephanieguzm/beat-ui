import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <section className='pg-not-found-container' data-cy='pg-not-found'>
      <h3 className='pg-not-found-message' data-cy='pg-not-found-message'>You've found a page that doesn't exist. Please go back home.</h3>
      <Link to='/'>
        <button className='home-button' data-cy='not-found-home-button'>HOME</button>
      </Link>
    </section>
  )
}
