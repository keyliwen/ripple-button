(function (window, $) {
  $(function() {
    $('.ripple').on('click', function (event) {
      var parent,d,x,y,rippleColor;
      
      parent = $(this);
      rippleColor = $(this).data("ripple-color");

      $(this).css({position:"relative",overflow:"hidden"});
      if(parent.find('.ripple-span').length == 0)
        parent.prepend('<span class="ripple-span"></span>');
      
      var rippleSpan = $('.ripple-span');
      rippleSpan.removeClass('ripple-animation');
      rippleSpan.css({'background-color': rippleColor});

      if(!rippleSpan.width() && !rippleSpan.height()){
        d = Math.max(parent.outerWidth(), parent.outerHeight());
        rippleSpan.css({width:d,height:d});
      }

      x = event.pageX - parent.offset().left - rippleSpan.width()/2;
      y = event.pageY - parent.offset().top - rippleSpan.height()/2;

      rippleSpan.css({top: y+'px', left: x+'px'}).addClass("ripple-animation");

      window.setTimeout(function(){
        rippleSpan.remove();
      }, 500);
    });
    
  });
  
})(window, jQuery);