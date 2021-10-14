// $(function () {

// })

$(document).ready(function() {
    $('.question__item').on('click', function() {
      $('.question__answer').toggle('slow');
    });
  });

  $(document).ready(function() {
    $('.question__item-two').on('click', function() {
      $('.question__answer-two').toggle('slow');
    });
  });  

  $(document).ready(function() {
    $('.question__item-three').on('click', function() {
      $('.question__answer-three').toggle('slow');
    });
  }); 

  /* Scroll to top*/
$(window).on("scroll", function () {
  let offtop = $(this).scrollTop();
  let page_h = document.body.clientHeight;
  if (offtop > 580) {
      $(".totop").fadeIn("fast");
  } else {
      $(".totop").fadeOut("fast");
  }
  if (offtop > page_h - 900) {
      $(".totop").addClass("stopped");
  } else {
      $(".totop").removeClass("stopped");
  }
});
$(".totop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});