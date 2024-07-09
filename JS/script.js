$(".btnOpen").on("click", function () {
  $("#sidenav").animate({ width: "300px", paddingInline: "30px" }, 50);
  $(".btnOpen").animate({ marginLeft: "320px" });
});
$("#btnClose").on("click", function () {
  $("#sidenav").animate({ width: "0", paddingInline: "0" }, 50);
  $(".btnOpen").animate({ marginLeft: "15px" });
});

$("#sidenav a").on("click", function () {
  let id = $(this).attr("href");
  let offset = $(id).offset().top;
  $("body").animate({ scrollTop: offset }, 500);
});

$(".title").on("click", function () {
  $(".sub-title").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

$(window).on("load", function () {
  countDown("25 october 2024 8:00:00");
});
function countDown(countTo) {
  let dayDate = new Date();
  dayDate = dayDate.getTime() / 1000;

  let eventDate = new Date(countTo);
  eventDate = eventDate.getTime() / 1000;

  timeDifference = eventDate - dayDate;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDown(countTo);
  }, 1000);
}

let maxLength = 100;
$("textarea").on("keyup", function (e) {
  let text = $(this).val().length;
  let difference = maxLength - text;
  console.log(text);
  if (difference <= 0) {
    $("#chars").text("your available character finished");
    e.preventDefault();
  } else {
    $("#chars").text(difference);
  }
});
