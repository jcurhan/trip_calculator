$(function(){
  $('#map-search-submit').on('click', app.map.controller.search)
})

app.map.controller = {
  search: function(event) {
    event.preventDefault();
    var origin = $('#origin-field').val();
    var destination = $('#destination-field').val();
    app.map.adapter.getBy(origin, destination);
  }
}

