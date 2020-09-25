$(document).ready(function() {
    //hide navbar after loading
    $('.navbar').hide();

    //navbar is only visble after the landing page
    //we are using a vendor javascript called waypoint
    //for detecting our scrolling
    $('.about-section').waypoint(function(dir){
      //if we are scrolling down
      //show the navbar and add padding for positioning the navbar
      if (dir=='down'){
        $('.navbar').show();
        $('.about-section').css("padding-top", "80px");
      //otherwise hide the navbar
      //and reduce the padding
      }else{
        $('.navbar').hide();
        $('.about-section').css("padding-top", "40px");
      }
    });

    //when we are scrolling, or clicked in a item in the navbar
    // in any other section after
    //the about section, add padding for the navbar
    $('.sections').waypoint(function(dir){
      //if we are scrolling down add padding for the navbar
      if (dir=='down'){
        $('.sections').css("padding-top", "80px");
      //otherwise reduce the padding
      }else{
        $('.sections').css("padding-top", "40px");
      }
    });


    //when we click any link in the navbar in mobile
    // collapse the menu
    $('.navbar-collapse a').click(function() {
      $(".navbar-collapse").collapse('hide');
    });

    //smooth scroll
    //query for any anchor
    $('a[href^="#"]').on('click', function (e){
      e.preventDefault();
      //get the target
      var target = this.hash;
      var $target = $(target);
      //add smooth scrolling
      $('html, body').animate({
        'scrollTop': $target.offset().top
      }, 1000, 'swing', function(){
        window.location.hash = target;
      });

  });

  $(".about-section").waypoint(function(dir){
    $("#picture-me").fadeIn("3000");
  },{offset:'50%'});

  // $(".projects-section").waypoint(function(dir){
  //   $(".animated-1").fadeIn("4000");
  //   $(".animated-2").fadeIn("4000");
  //   $(".animated-3").fadeIn("8000");
  //   $(".animated-4").fadeIn("8000");
  // },{offset:'30%'});


});
