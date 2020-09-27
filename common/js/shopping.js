$(document).ready(function(){
    $(".shop-ul li").click(function(){
        var li=$(".shop-ul li");
        var sil=$(".shop-ul li.sil")
        li.removeClass("active");
        $(this).toggleClass("active");

      if(sil.hasClass("active")){
          sil.removeClass("silver")
      }else{
          sil.addClass("silver")
      }

    });

    $(".trash").click(function(){
        var pr2=$(this).parents(".container");
        var fin=pr2.find("li");
        var pre=fin.prev(".sil");
        $(".removing").remove();
      pre.removeClass("number"); 

       
    });

    $(".next-save").click(function(){
        $(".removing").fadeOut(0);
        $(".empty").fadeIn(0);
        $(".sil").removeClass("number");
        $(".sil").addClass("active");
        $(".next-list").addClass("silver");
        if($(".next-list").hasClass("active")){
            $(".next-list").removeClass("active")
        }
        if($(".sil").hasClass("silver")){
            $(".sil").removeClass("silver")
        }
    });
    $(".next-list").click(function(){
        var prv=$(this).prev();
        var pr=$(this).parents(".container")
        var prn=$(this).parents(".container").find(".empty");
        var lft= pr.find(".shopping-left");
        var end=pr.find(".text-end");
        var footer=pr.find(".footer-shop")
        
        if($(this).hasClass("silver")){
            $(this).removeClass("silver");
            $(this).addClass("number");
           prv.removeClass("silver")
        };

        if(prv.hasClass("number")){

        }else{
            prv.removeClass("silver")
        }
       
        if($(this).hasClass("number")){
            $(".sil").removeClass("silver");

            prn.fadeOut(0);
           
           $(".removing").fadeIn(0);
           end.remove();
           footer.remove();
           lft.html("<P class='p-list-next'>لیست خرید بعدی چیست؟<p class='p2'>شما می‌توانید محصولاتی که به سبد خرید خود افزوده اید و موقتا قصد خرید آن‌ها را ندارید، در لیست خرید بعدی خود قرار داده و هر زمان مایل بودید آن‌ها را مجدداً به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.</p></P>")
        };
     
    });

    $(".sil").click(function(){
        var pr1=$(this).parents(".container")
        var prn1=$(this).parents(".container").find(".empty");
        var nextLi=$(this).next();
        if(nextLi.hasClass("number")){
            nextLi.removeClass("number");
            nextLi.addClass("silver");
            prn1.fadeIn(0);
$(".removing").fadeOut(0);
        };

        
    })
})