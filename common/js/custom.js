
 $(document).ready(function(){
    var delay={};
  $(".bbb li").hover(function(){ 
      var tag=$(this);
      var liattr=tag.attr('data-timer');
      clearTimeout(delay[liattr]);
       delay[liattr]=setTimeout( function(){
        $('>ul',tag).fadeIn(0);
        $('>div.container-ul3',tag).fadeIn(0);
        $('span',tag).removeClass('caretD').addClass('caretU');
      },500);

    },function(){
      
        var tag=$(this);
        var liattr=tag.attr('data-timer');
        clearTimeout(delay[liattr]);
         delay[liattr]=setTimeout(function(){
            $('>ul',tag).fadeOut(0);
            $('span',tag).addClass('caretD').removeClass('caretU');
            $('>div.container-ul3',tag).fadeOut(0);
        
        },600);

    });

/*$(".btnRes").click(function(){

    $(".ulNav").fadeIn()
})*/

});


$(document).ready(function(){

var slider=$("div.slider");
var image=slider.find(".picture");
var tool=image.length;
var navigator= slider.find(".sliderCaption ul li");
var num=1;

function showSlider(){
    if(num>tool){
        num=1
    };

    if(num<0){
        num=tool
    }

    image.hide();
  image.eq(num-1).fadeIn(100);
  navigator.removeClass("active");
  navigator.eq(num-1).addClass("active");
  num++

};

showSlider();
var timeSlider=setInterval(showSlider,5000);


$(".slider").hover(function(){
    clearInterval(timeSlider)
},function(){
     timeSlider=setInterval(showSlider,5000);
})

$("span.right-sld").click(function(){
showSlider()
});

$("span.left-sld").click(function(){
  num=num-2;
  showSlider()
  
    });

    function goToSlide(index){
        num=index;
       showSlider()
    };

   
   $(".sliderCaption li").click(function(){
      var index=$(this).index();
      goToSlide(index+1)
   });

/*slider2*/
var slider2= $("#slider2");
var contentSld=slider2.find(".slice-1");
var linkSld=contentSld.find("a");
var ind=1;
var lngh= linkSld.length;
var part2 = slider2.find(".slice-2");
var listSld=part2.find("ul li:not(.last-li)")
function showSlider2(){

    linkSld.hide()
    linkSld.eq(ind-1).fadeIn(300);
    listSld.removeClass("active2")
    listSld.eq(ind-1).addClass("active2");
    ind++
    
    if(ind > lngh){
        ind=1
    }

    if(ind<0){
        ind=lngh
    }
  
}

showSlider2();
var timerSlider2=setInterval(showSlider2,5000);


function goToSlide2(index2){
    ind=index2;
    showSlider2()
};

$(listSld).click(function(){
var index2= $(this).index();
goToSlide2(index2+1);
});

$("#slider2").hover(function(){
    clearInterval(timerSlider2);
},function(){
   
    timerSlider2=setInterval(showSlider2,5000)

})

/*scrollSlider*/

});





$(document).ready(function() {
    $('.flipTimer').flipTimer({ 
    
    // count up or countdown
    direction: 'down', 
    
    // the target <a href="https://www.jqueryscript.net/time-clock/">date</a>
    date: 'december 22, 2020 08:30:30', 
    
    // callback works only with direction = "down"
    callback: function() { $("#slider2 .finished").fadeIn() }
    
    });
    });


    function sliderScroll(side,tag){
        var divTag=$(tag);
        var finder= divTag.parents(".container-slider");
    var contentSliderScr=finder.find(".content-sliderScr");
    var items= contentSliderScr.find(".partition img , .partition-brand img");
    var lg=items.length;
    var division=lg/4;
    var cell=Math.ceil(division)
    var maxMg=-(cell-1)*830
        var marginOld=contentSliderScr.css('marginRight');
        var numerical= parseFloat(marginOld);
        var marginNew=numerical - 830;

        if($(window).width()<=1024){
            marginNew=numerical - 730;
        };

      
    if(side=='left'){
        marginNew;
        $(".box-icon,.box-icon-brand").fadeIn(0)
    };   
    
    if(side=='right'){
        marginNew=numerical + 830;
        if($(window).width()<=1024){
             marginNew=numerical + 730;
        }
    
    };
    
    if(marginNew<maxMg){
        marginNew=0;
        $(".box-icon,.box-icon-brand").fadeOut(0);
        if($(window).width()<=1024){
            maxMg=-(division-1)*730;
        }
    };
    
    if(marginNew>0){
        marginNew=0;
        if($(window).width()<=1024){
            maxMg=-(division-1)*730;
        }
    }

    if(marginNew==0){
       
        $(".box-icon,.box-icon-brand").fadeOut(0);
    }
    contentSliderScr.animate({'marginRight':marginNew},1000)
    
    
    
    };