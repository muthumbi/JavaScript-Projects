// Random Quote Generator
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $(".quote-text").text(data.quoteText);
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' ' + data.quoteAuthor;
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author-text").text(data.quoteAuthor);
  $(".twitter-share-button").attr("href", quot);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});
$("#quote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

$("button").click(function() {
  $(".well p").animate({
    opacity: 0,
  }, 1000, function() {
    $(this).animate({
      opacity: 1,
    }, 1000);
  });
});
       $(function() {
    $( "#quote" ).click(function() {
      $( ".well" ).addClass( "animated fadeIn", 700, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( ".well" ).removeClass( "animated fadeIn" );
      }, 1500 );
    }
  });