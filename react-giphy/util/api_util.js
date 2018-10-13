export const fetchSearchGiphys = searchTerm => (
  $.ajax({
    method: 'GET',
    url:`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=ZmYZJ1QawWl9xPSIcttoy57B8hhmfwsV&q=&limit=25`
  })
)

export const fetchTrendingGipphys = () => (
  $.ajax({
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/trending?api_key=ZmYZJ1QawWl9xPSIcttoy57B8hhmfwsV&limit=25'
  })
)
