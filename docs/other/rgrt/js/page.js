$(document).ready(
  $(".iButton").click(
    function(){
      if($(this).hasClass("iAkabou")){
        $("#akabou").slideDown("high");
        $("#kaonasi").slideUp("high");
        $("#hakorobo").slideUp("high");
        $("#kirokuya").slideUp("high");
        $("#murasaki").slideUp("high");
      }
      if($(this).hasClass("iKaonasi")){
        $("#akabou").slideUp("high");
        $("#kaonasi").slideDown("high");
        $("#hakorobo").slideUp("high");
        $("#kirokuya").slideUp("high");
        $("#murasaki").slideUp("high");
      }
      if($(this).hasClass("iHakorobo")){
        $("#akabou").slideUp("high");
        $("#kaonasi").slideUp("high");
        $("#hakorobo").slideDown("high");
        $("#kirokuya").slideUp("high");
        $("#murasaki").slideUp("high");
      }
      if($(this).hasClass("iKirokuya")){
        $("#akabou").slideUp("high");
        $("#kaonasi").slideUp("high");
        $("#hakorobo").slideUp("high");
        $("#kirokuya").slideDown("high");
        $("#murasaki").slideUp("high");
      }
      if($(this).hasClass("iMurasaki")){
        $("#akabou").slideUp("high");
        $("#kaonasi").slideUp("high");
        $("#hakorobo").slideUp("high");
        $("#kirokuya").slideUp("high");
        $("#murasaki").slideDown("high");
      }
  })
)
