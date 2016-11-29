
function searchIMDB(query) {
  // http://www.omdbapi.com/?t=rocky&y=&plot=short&r=json
  $.getJSON('http://www.omdbapi.com/', {
    t: query,
    plot: "short",
    r: 'json'
  }, function(omdbData) {
    var results = omdbData;
    renderMovie(omdbData);
  });
}

function renderMovie(data) {
  console.log(data);
  $('#title').html(data.Title)
}



$('#movie-search-form').on('submit', function(event) {
  event.preventDefault();
  searchIMDB(this.query.value);
  this.query.value = '';
});
