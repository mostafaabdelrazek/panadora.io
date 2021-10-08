$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();
    $(".portfolio-container").removeAttr('data-aos');
    var isShowing = false;
    $(".portfolio-container").css('margin-bottom',$(this).height());
    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");
        $(".portfolio-container").css('margin-bottom','0');

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
          
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");
          $(".portfolio-container").css('margin-bottom',$(this).height());

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});