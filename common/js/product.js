


$(document).ready(function() {
  var liChoice = $(".center .choiceColor li:not(.disable)");
   liChoice.click(function() {
   liChoice.removeClass("active");
   $(this).addClass("active");
  });

  var liMore = $(".center .property li.more");

  liMore.click(function() {
    $(this).prevAll(".none").toggle();
    $(this).toggleClass("more");
    $(this).toggleClass("less");
    $(this).find("i").toggleClass("fa fa-angle-up");
    $(this).find("i").toggleClass("fa fa-angle-down");
  });

  $(".list-icon li ").click(function() {
    var self = $(this);
    var spanSelf = self.find("span");
    var ind = self.index();
    if (ind == 0) {
      spanSelf.toggleClass("heart");
    }
    if (ind == 1) {
      spanSelf.toggleClass("share");
    }
    if (ind == 2) {
      spanSelf.toggleClass("bell");
    }
  });

  $(".goToBack").click(function() {
    $(this).parents(".left").find(".main").fadeOut(100);
    $(this).parents(".left") .find(".comeBack").fadeIn(100);
    $(this).parents(".frame").find(".right").addClass("height");
  });

  $(".back").click(function() {
    $(this).parents(".left").find(".comeBack").fadeOut(0);
    $(this).parents(".left").find(".main").fadeIn(0);
    $(this).parents(".frame").find(".right").removeClass("height");
  });

  $(".goToSent").click(function() {
    $(this).parents(".left").find(".main").fadeOut(0);
    $(this).parents(".left").find(".readyToSent").fadeIn(0);
  });

  $(".ready-icon").click(function() {
    $(this).parents(".left").find(".readyToSent").fadeOut(0);
    $(this).parents(".left").find(".main").fadeIn(0);
  });

  $(".main p.seeMore").click(function() {
    $(this).parents(".main").find(".row3,.row4").toggle();
    $(this).fadeOut(0);
    $(this).parents(".main").find("p.seeLess").toggle();
  });

  $(".main p.seeLess").click(function() {
    $(this).parents(".main").find(".row3,.row4").toggle();
    $(this).fadeOut(0);
    $(this).parents(".main").find("p.seeMore").toggle();
  });

/* bootstrap tooltip */

  $('[data-toggle="tooltip"]').tooltip();

  /* end bootstrap tooltip */

/***  tooltipMe ***/ 

  $(".row1 .prt1").hover(
    function() {
      $(".ttb", this).fadeIn(0);
    },
    function() {
      $(".ttb", this).fadeOut(0);
    }
  );

  $(".prt2 .spn").hover(
    function() {
      $(".ttb2", this).fadeIn(0);
    },
    function() {
      $(".ttb2", this).fadeOut(0);
    }
  );

  /***  tabMenu  ***/ 

  $(".header-tab li").click(function() {
    $(".header-tab li").removeClass("active");
    $(this).toggleClass("active");
    var indexTab = $(this).index();
    var contentTab = $(this).parents(".container-tab").find(".content,.content-active");
    contentTab.fadeOut(0);
    contentTab.eq(indexTab).fadeIn(0);
  });

  $(".box-content .continue").click(function() {
    var hiddenTab =$(this).prev(".hidden-tab");
    hiddenTab.toggle();
    var dis= hiddenTab.css("display");

    if(dis=="inline"){
    $(this).prevAll(".opa").css("opacity","1");
    $(this).html("بستن");
}else{
    $(this).prevAll(".opa").css("opacity","0.4");
    $(this).html("ادامه مطلب");
}
  });

$(".content-active .d-content button").click(function(){
  $(this).toggleClass("active");
  $(this).parent().toggleClass("press");
  $(this).parent().find("p").toggle();
  $(this).parent().find(".cadre").toggle()
});


$(".titr-cm .ul-cm li a").click(function(){
  $(".titr-cm .ul-cm li a").removeClass("active")
  $(this).toggleClass("active")
});


/***  elevateZoom  ***/ 
if($(window).width() > 1000){
$(".pictureMobile").elevateZoom({
  zoomWindowOffetx:-700,
  zoomWindowOffety:-10,
  easing:"true",
  // 'zoomWindowWidth':800,
  zoomWindowHeight:546,
  lensFadeIn:"true",
  zoomWindowFadeIn:"true",
  cursor: "crosshair"
});
}
/***  picture gallery  ***/ 

var containerGallery=$(".container-gallery")

$(".dark").click(function(){
  $(this).fadeOut();
  containerGallery.fadeOut()
});

$(".close-gallery").click(function(){
  $(".dark").fadeOut();
  containerGallery.fadeOut()
});

$("#collection .under").click(function(){
var index=$(this).index();
  $(".dark").fadeIn();
  containerGallery.fadeIn();
var srcImgClt= $(this).find("img").attr("src");
var mainImg= containerGallery.find(".mainImg");
mainImg.attr("src",srcImgClt);
var li=containerGallery.find("li");
li.removeClass("active");
li.eq(index).toggleClass("active")
  });



var galleryLi=$(".container-gallery .left ul li")

galleryLi.click(function(){
galleryLi.removeClass("active"); 
$(this).toggleClass("active");
var mainImg1=containerGallery.find(".mainImg");
var cv=containerGallery.find("#cv");
var srcImg= $(this).attr("data-img-src");

if(srcImg.length>0){
  mainImg1.attr("src",srcImg);
  cv.fadeOut(0);
  mainImg1.fadeIn(100);
}else{
  mainImg1.fadeOut(0);
  cv.fadeIn(100)
}

});

/***  customScroll  ***/

(function($){
 
      $(".container-gallery .left").mCustomScrollbar({
        setHeight: 370,
        theme:"dark"
      });

})(jQuery);

/***   JSC3D   ***/

var cv=document.getElementById("cv");
var viewer=new JSC3D.Viewer(cv,{
  SceneUrl:'https://raw.githubusercontent.com/xxv/jsc3d/master/jsc3d/demos/bmw/bmw.obj',
  RenderMode:'texturesmooth'
});
viewer.init();
viewer.update();

});

