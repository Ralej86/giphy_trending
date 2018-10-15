export const fetchSearchGiphys = searchTerm => (
  $.ajax({
    method: 'GET',
    url:`https://api.giphy.com/v1/gifs/search?api_key=ZmYZJ1QawWl9xPSIcttoy57B8hhmfwsV&q=${searchTerm}&limit=25&offset=0&rating=G&lang=en`
  })
)

export const fetchTrendingGiphys = () => (
  $.ajax({
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/trending?api_key=ZmYZJ1QawWl9xPSIcttoy57B8hhmfwsV&limit=25'
  })
)
