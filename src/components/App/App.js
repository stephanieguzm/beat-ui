// import logo from './logo.svg';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Stories } from '../Stories/Stories.js';
import { FullStory } from '../FullStory/FullStory.js';
import { getTopStories } from '../../apiCalls.js'
import './App.css';

const App = () => {

  const [ topStories, setTopStories ] = useState([])

  let location = useLocation()
  const homeLink = location.pathname !== "/" && <Link className ='home-btn' data-cy="home-btn" to="/">Home</Link>

  useEffect(() => {
    getTopStories('home')
      .then(data => {
        setTopStories(data)
    })
  }, [])

  return (
    <div className='app'>
      <header className='header-container'>
        <h1>The Beat</h1>
        <h3 className='home-btn'data-cy='home-btn'>{homeLink}</h3>
      </header>
      <main>
        <Switch>
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
        </Switch>
      </main>
      <footer className='footer-container'>
        <p className='footer-text' data-cy='footer-text'>&#169; <a href='https://github.com/stephanieguzm/beat-ui' target='_blank' rel='noreferrer'> 2023 Stephanie Guzman</a></p>
      </footer>
    </div>
  );
}

export default App;
