$("h1").addClass("big-title margin");
$("button").addClass("margin");
// $("button").text("Don't Click Me");
// $("button").html("<em>Hey</em>");

$("a").attr("href", "https://www.bing.com");

$(document).keypress(function(event) {
    $("h1").text(event.key);
    });