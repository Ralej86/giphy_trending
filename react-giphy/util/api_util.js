export const fetchSearchGiphys = (searchTerm, offset = 0) => (
  $.ajax({
    method: 'GET',
    url:`https://api.giphy.com/v1/gifs/search?api_key=ZmYZJ1QawWl9xPSIcttoy57B8hhmfwsV&q=${searchTerm}&limit=25&offset=${offset}&rating=G&lang=en`
  })
)

export const fetchTrendingGiphys = () => (
  $.ajax({
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/trending?api_key=ZmYZJ1QawWl9xPSIcttoy57B8hhmfwsV&limit=25'
  })
)
