$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: target.offset().top + 10
          }, 1000);
          return false;
      }
  }
});

/* =============== hide container on scroll =============== */

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var height = ($(this).height()) - 500;
    $('#container1').css({
      'opacity': ((height - scrollTop) / height)
    });
});

/* =============== width on scroll =============== */

$(window).scroll(function() {
    if ($(this).scrollTop() > '980') {
      $("#skl1, #skl2, #skl3, #skl4, #skl5, #skl6, #skl7, #skl8").show(1500, 'swing');
    }else{
      $("#skl1, #skl2, #skl3, #skl4, #skl5, #skl6, #skl7, #skl8").hide(1000);
    }
});
