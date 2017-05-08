//business logic
//Place constructor function
var Place = function(place, time, notes) {
  this.place = place;
  this.time = time;
  this.notes = notes;
};

Place.prototype.capitalizeTitle = function () {
  var input = this.place.split(" ");
  input = input.map(function(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase();
  });
  input = input.join(" ");
  return input;
};


//user interface logic
$(function() {
  $("#input-form").submit(function(event){
    event.preventDefault();
    var place = $("#place").val();
    var time = $("#time").val();
    var notes = $("#notes").val();
    var location = new Place(place, time, notes);
    $("#display-list").append("<li><a href='#' class='location-list'>" + location.capitalizeTitle() + "</a></li>")
    $('.location-list').last().click(function(e) {
      e.preventDefault();
      $('#display-details').show();
      $('.place').text(location.capitalizeTitle());
      $('.time').text(location.time);
      $('.notes').text(location.notes);
    });
  });
});
