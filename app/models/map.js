// while figuring out the maps issue, create the search for the car type first (have them search for honda and a year) - then from 
// edmunds API pull back all of the models into a list that they can click. once they click that it will make a background API call so i can
// save the mpg info about the car but when they click that it will make the google maps search box show up (which had been hidden on the page)


app.map = {
  new: (function() {
    var map = function Map(origin, destination){
      debugger;
    }
  }()),
  adapter: {
    getBy: function(origin, destination){
      return $.ajax({
        method: "GET",
        url: "https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination //+ "&key=AIzaSyCgMJ4FlwGHeL3nRiexUcv7hXeHMM--K98"
      }).then(function(data){
        debugger;
      })
    }
  }
}