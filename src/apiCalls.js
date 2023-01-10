const API_KEY = process.env.REACT_APP_API_KEY

export const getTopStories = async (section) => {
  try {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`);
    const data = await response.json();

    if (!response.ok) {
      console.log(data.description)
      throw new Error(response.status)
    }
    const cleanData = data.results.map(result => {
      return { 
        section: result.section,
        title: result.title,
        abstract: result.abstract,
        byline: result.byline,
        multimedia: result.multimedia,
        shortUrl: result.short_url,
        longUrl: result.url,
        publishedDate: result.published_date,
        updatedDate: result.updated_date
      }
    })

    return cleanData

  } catch (error) {
    if (error) {
      console.log(error)
    }
  }
}