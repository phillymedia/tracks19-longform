


$(document).ready(function() {
    $('#recircSpecials').load('/philly/news/special_packages/390291181.html  #morereports');

if($(window).width() >= 800){

  setTimeout(function(){
      var scroll = 0;
      var fired = 0;
      $(window).scroll(function() {
          // if (scroll > 0) {
          if(fired == 0){
            console.log("Scroll Fired");
              $("#background-cover").fadeIn();
              $(".flyover-container").addClass("flyover-container-fixed");
              $(".flyover-container").fadeIn(200);
              $(".videoText").delay(2000).fadeIn(1000);
              $('#flyover').get(0).play();
              $('html, body').delay(100).css({
                  overflowY: 'hidden',
                  height: '100%'
              });
            }
            fired = 1;
             var distance = $('#three-ribbon').offset().top,
              $window = $(window);
             if ($window.scrollTop() >= distance){
                 $(".flyover-container").hide();
             } else $(".flyover-container").show();
          });
          console.log(fired)
  }, 1000);

  function videoOut() {
    $("#controls").fadeOut();
    $('html, body').css({
        overflowY: 'initial',
        height: '100%'
    });
    $(".flyover-container").removeClass("flyover-container-fixed");
    $("#background-cover").hide();
    $('#flyover-labels,.gradient').fadeIn(1500);
    $("#bodyContainer-1").fadeTo(1500, 1);
    $("#bodyContainer-1").css("z-index", "6");
    // $("#flyover").remove();
    $(".flyover-container").sticky({
        topSpacing: 0
    });
    var scrollTo = $("#bodyContainer-1").offset().top;
    $('html, body').scrollTop(scrollTo - 200);
  }

  $('#flyover').on('ended', function() {
      setTimeout(function(){ videoOut(); }, 3000);
  });

  $("#skip").click(function(){
      videoOut();
  });

}
});
