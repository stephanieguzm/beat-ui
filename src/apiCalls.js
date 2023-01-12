import { nanoid } from 'nanoid'
const API_KEY = process.env.REACT_APP_API_KEY

export const getTopStories = async (section) => {
  try {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`);
    if (response.ok) {
      const data = await response.json();
      
      const cleanData = data.results.map(result => {
        return { 
          section: result.section.toUpperCase(),
          title: result.title,
          abstract: result.abstract,
          byline: result.byline,
          multimedia: result.multimedia,
          shortUrl: result.short_url,
          longUrl: result.url,
          publishedDate: result.published_date,
          updatedDate: result.updated_date,
          id: nanoid()
        }
      })

      return cleanData
    } else {
      throw new Error(response.status)
    }
  } catch (error) {
    return Promise.reject()
  }
}