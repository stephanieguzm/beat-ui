import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Stories } from '../Stories/Stories.js';
import { FullStory } from '../FullStory/FullStory.js';
import { Sections } from '../Sections/Sections.js';
import { getTopStories } from '../../apiCalls.js'
import { PageNotFound } from '../PageNotFound/PageNotFound.js';
import './App.css';

const App = () => {

  const [ topStories, setTopStories ] = useState([])
  const [ error, setError ] = useState('')
  const [ userSelectedSelection, setUserSelectedSelection ] = useState('')
  
  let location = useLocation()
  const homeLink = location.pathname !== "/" && <NavLink className ='home-btn' data-cy="home-btn" to="/">BACK</NavLink>

  let pageTitle = userSelectedSelection ? userSelectedSelection.toUpperCase() : "HOME"

  useEffect(() => {
    getTopStories(userSelectedSelection ? userSelectedSelection : 'home')
      .then(data => {
        setTopStories(data)
      })
      .catch(error => {
        setError(`We're not able to show you top stories at this time. Please visit us again later.`)
    })
  }, [userSelectedSelection])

  return (
    <div className='app'>
      <header className='header-container'>
        <h1>The Beat</h1>
        <p>{pageTitle}</p>
        <p className='home-btn'data-cy='home-btn'>{homeLink}</p>
      </header>
      <main>
        <Sections 
          setUserSelectedSelection={setUserSelectedSelection}
        />
        {error && <h2>We're sorry. We're not able to show you top stories at this time. Please visit us again later.</h2>}
        {topStories && !error && <Switch>
          <Route 
            exact path='/'
            render={() => {
              return <Stories 
                topStories={topStories} 
              />
            }}
          />
          <Route 
            exact path='/:id'
            render={({ match }) => {
              return <FullStory 
                topStories={topStories}
                storyId={match.params.id} 
              />
            }}
          />
          <Route path='*' component={PageNotFound} />
        </Switch>}
      </main>
      <footer className='footer-container'>
        <p className='footer-text' data-cy='footer-text'>&#169; <a href='https://github.com/stephanieguzm/beat-ui' target='_blank' rel='noreferrer'> 2023 Stephanie Guzman</a></p>
      </footer>
    </div>
  );
}

export default App;
