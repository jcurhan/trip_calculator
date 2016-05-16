$(function(){
  $('.map-search-form').hide();
  app.car.controller.populateYears();
  $('#car-search-submit').on('click', app.car.controller.search)
  $('body').on('click', '.selected-car-style', app.car.controller.findMpg)
})

app.car.controller = {
  search: function(event){
    event.preventDefault();
    $('.ajax-errors ul').empty();
    carYear = $('#car-year-field').val(); // currently global variables
    carMake = $('#car-make-field').val();
    carModel = $('#car-model-field').val();
    app.car.adapter.carGetBy(carYear, carMake, carModel).then(function(carResults){
      app.car.controller.render(carResults)
    })
  },
  populateYears: function(){
    for (i = new Date().getFullYear(); i > 1979; i--)
    {
      $('#car-year-field').append($('<option />').val(i).html(i));
    }
  },
  render: function(carResults){
    $(".car-search-results h2").empty();
    $(".car-search-results ul").empty();
    var stylesNum = carResults.length;
    $(".car-search-results h2").append("Please select from the following " + stylesNum + " models")
    carResults.forEach(function(car){
      $(".car-search-results ul").append("<li><a href='#' class='selected-car-style' id=" + car.styleId + ">" + carYear + " " + carMake + " " + carModel + " " + car.style + "</a></li>")
    })
  },
  findMpg: function(event) {
    event.preventDefault()
    var styleId = $(this).attr('id')
    var style = $(this).html()
    app.car.adapter.mpgGetBy(styleId).then(function(mpgResults){
      debugger;
    })
  }
}

//ISSUES:
// can't do it off of all array because if you don't refresh page and they search
// civic then accord, all the civic results will still print

// when car search button is hit, make API call, and then append a ul of the specific trims of that car model for the user to select, 
// when they select their car (using the id) - find all the info needed for that car - mpg, etc
// their car then make map search form appear: $('.map-search-form').show()