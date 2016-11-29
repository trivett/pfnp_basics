
function searchIMDB(query) {
  // http://www.omdbapi.com/?t=rocky&y=&plot=short&r=json
  $.getJSON('http://www.omdbapi.com/', {
    t: query,
    plot: "short",
    r: 'json'
  }, function(omdbData) {
    var results = omdbData;
    if (omdbData.Response == "True"){
      renderMovie(omdbData);
    } else {
      renderError();
    }
  });
}

function renderMovie(data) {
  $('.result').show();
  $('#poster').attr("src", data.Poster);
  $('#title').html(data.Title);
}

function renderError() {
  $('.error').show();
}


$('#movie-search-form').on('submit', function(event) {
  event.preventDefault();
  $('.result').hide();
  searchIMDB(this.query.value);
  this.query.value = '';
});
