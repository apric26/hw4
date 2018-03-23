                      // WEATHER API

let updateWidget = function(data) {
  console.log("Got weather data: ", data)

  let weatherImage = data.weather[0]
  let weather_url = "http://openweathermap.org/img/w/" + weatherImage.icon + ".png"
  console.log ("The image url is:", weather_url)
  $("#weatherpic").attr("src", weather_url)

  $(".card-title").html(data.name)

  $(".card-text").html("It is " + Math.round(data.main.temp) + " degrees outside")

}

let getWeather = function(info) {
  console.log(info)
  window.weatherInfo = info
  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);
  let apiKey = '4d849d7b15532adcfd0e3b519de30a69'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'


  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);

}
let handlePosition = function(event) {
   console.log ("Starting handlePosition...")
   event.preventDefault();
   navigator.geolocation.getCurrentPosition(getWeather);
   console.log ("Ending handlePosition...")

}

$("#get_forecast").on("click", handlePosition)
  console.log ("It works!")



////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }



                  // NYT NEWSPAPER API
$(function(event) {
  let apiKey = "9374c39b145945098d2a97f94d476271";
  let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data); // have a look at what "data" is in the browser console
    $(".nyArticle").empty();

    {
      let topNews = data.results[2];
      let html = '<div class="card bg-light mb-3" style="min-width: 18rem;">';
      html = html + '<div class="card-header">Top National News</div>';
      html = html + '<h4 class="card-title">' + topNews.title + '</h4>';
      html = html + '<p class="card-text">' + topNews.abstract + '</p>';
      html = html + '</div></div></div>';
      $(".nyArticle").append(html);
    }
      $(".nyArticle").fadeIn(2000);
  });
});


                  // SPORTS NEWSPAPER API
$(function(event) {
let apiKey = "b5be691db60a491da1de9a15bcdb7382";
let url = "https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=" + apiKey;
$.get(url, function(data) {
console.log(data);
$(".sportsArticle").empty();

    {
    let sportsNews = data.articles[1];
    let html = '<div class="card bg-light mb-3" style="min-width: 18rem;">';
    html = html + '<div class="card-header">Top Sports News</div>';
    html = html + '<img id="sportsImage" class="card-img-top" src="' + sportsNews.urlToImage + '">'
    html = html + '<h4 class="card-title">' + sportsNews.title + '</h4>';
    html = html + '<p class="card-text">' + sportsNews.description + '</p>';
    html = html + '</div></div></div>';
    $(".sportsArticle").append(html);
    }
  });
});

                  // MOVIE NEWS

$(function() {
  let apiKey = "9374c39b145945098d2a97f94d476271";
  let url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".movieReviews").empty();
    {
      let movieNews = data.results[11];
      let html = '<div class="card bg-light mb-3" style="min-width: 18rem;">';
      html = html + '<div class="card-header">Top Movie News</div>';
      html = html + '<img id="newsImage" class="card-img-top" src="' + movieNews.multimedia.src + '">';
      html = html + '<h4 class="card-title">' + movieNews.display_title + '</h4>';
      html = html + '<p class="card-text">' + movieNews.headline + '</p>';
      html = html + '</div></div></div>';
      $(".movieReviews").append(html);
    }
  });
});

// // // FINANCIAL NEWSPAPER API
$(function(event) {
let apiKey = "b5be691db60a491da1de9a15bcdb7382";
let url = "https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=" + apiKey;
$.get(url, function(data) {
console.log(data);
$(".stockTicker").empty();

    {
    let financialNews = data.articles[0];
    let html = '<div class="card bg-light mb-3" style="min-width: 18rem;">';
    html = html + '<div class="card-header">Top Financial News</div>';
    html = html + '<h4 class="card-title">' + financialNews.title + '</h4>';
    html = html + '<p class="card-text">' + financialNews.description + '</p>';
    html = html + '</div></div></div>';
    $(".stockTicker").append(html);
    }
  });
});



  // MORE MOVIE NEWS

$(function() {
let apiKey = "9374c39b145945098d2a97f94d476271";
let url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + apiKey;
$.get(url, function(data) {
console.log(data);
$(".thumbnailOne").empty();
    {
    let movieNews = data.results[4];
    let html = '<div class="col-12">';
    html = html +'<div class="thumbnail">'
    html = html + '<img id="movieImage" class="card-img-top" src="' + movieNews.multimedia.src + '">';
    html = html + '<div class="caption">' + movieNews.display_title + '</div>';
    html = html + '<p class="card-text">' + movieNews.summary_short + '</p>';
    html = html + '</div></div></div>';
    $(".thumbnailOne").append(html);
    }
  });
});

$(function() {
let apiKey = "9374c39b145945098d2a97f94d476271";
let url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + apiKey;
$.get(url, function(data) {
console.log(data);
$(".thumbnailTwo").empty();
    {
    let movieNews = data.results[5];
    let html = '<div class="col-12">';
    html = html +'<div class="thumbnail">'
    html = html + '<img id="movieImageTwo" class="card-img-top" src="' + movieNews.multimedia.src + '">';
    html = html + '<div class="caption">' + movieNews.display_title + '</div>';
    html = html + '<p class="card-text">' + movieNews.summary_short + '</p>';
    html = html + '</div></div></div>';
    $(".thumbnailTwo").append(html);
    }
  });
});

$(function() {
let apiKey = "9374c39b145945098d2a97f94d476271";
let url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + apiKey;
$.get(url, function(data) {
console.log(data);
$(".thumbnailThree").empty();
    {
    let movieNews = data.results[6];
    let html = '<div class="col-12">';
    html = html +'<div class="thumbnail">'
    html = html + '<img id="movieImageThree" class="card-img-top" src="' + movieNews.multimedia.src + '">';
    html = html + '<div class="caption">' + movieNews.display_title + '</div>';
    html = html + '<p class="card-text">' + movieNews.summary_short + '</p>';
    html = html + '</div></div></div>';
    $(".thumbnailThree").append(html);
    }
  });
});
