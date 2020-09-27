function sidebarSlide(tag) {
  $(tag)
    .next()
    .slideToggle();
}

$(document).ready(function() {
  $(".togglIcon , h4").click(function() {
    $(this)
      .parent("div")
      .find(".togglIcon")
      .toggleClass("fa-angle-up");
  });
  /*filtering*/

  var itemsSearchMenu = $(".sideMnu div:not(.resultsFaction) ul li");

  itemsSearchMenu.click(function() {
    var toggle = $(this).find(".checkbox-Style");

    var titrSrchMnu = $(this).parent() .parent("div") .find(".filterTitr") .text();
    var textLi = $(this).text();

    var filtering = $("#filtering");

    var idVal = $(this).attr("data-id");
    var span =
      "<span class='filterSpan'  data-id=" +
      idVal +
      ">" +
      titrSrchMnu +
      " " +
      textLi +
      "<i class='fa fa-window-close' onClick='removeElem(this)'></i></span>";
    var findSpan = filtering.find("span[data-id=" + idVal + "]");

    var lengthSrchMnu = findSpan.length;

    filtering.css("display", "block");

    if (lengthSrchMnu > 0) {
      findSpan.remove();
    } else {
      filtering.append(span);
    }

if($(window).width()==1024){

  $("#filtering .filterSpan").css("width","70%")
}


    toggle.toggleClass("checked");
  });

  $(".delete").click(function() {
    $(this)
      .parents("#filtering")
      .find(".filterSpan")
      .remove();

    $(this)
      .parents("#filtering")
      .css("display", "none");

    $(".sideMnu div:not(.resultsFaction) ul li")
      .find("span")
      .removeClass("checked");
  });

  // $('#filtering .filterSpan i').onClick(function() {
  //    console.log('dddddd');
  //   $(this).parent().remove();

  // toggle.removeClass("checked")
  // });
});

function removeElem(elem) {
  var parentElem = $(elem).parent();

  var dataId = $(elem)
    .parent()
    .attr("data-id");
  $(".sideMnu div:not(.resultsFaction) ul li[data-id=" + dataId + "]")
    .find("span")
    .removeClass("checked");
  parentElem.remove();

  var ln = $("#filtering").find(".filterSpan").length;

  if (ln == 0) {
    $("#filtering").css("display", "none");
  }
}

// ........btn........

$(document).ready(function() {
  $("#just .btn-just .circle-btn").click(function() {
    $(this)
      .parent()
      .css("background", "rgb(29, 179, 238)");

    $(this).animate({ marginRight: "20px" }, 300);

    var marginMe = $(this).css("marginRight");

    if (marginMe == 20 + "px") {
      $(this).animate({ marginRight: "4px" }, 300);
      $(this)
        .parent()
        .css("background", "#eee");
    }
  });

  $("#just .btn-just").click(function() {
    if ($(window).width() <= 1000) {
      $(this).toggleClass("active");
    }
  });

  // .....Hover Image Left Menu.....//

  $(".row1 .part1 li").hover(
    function() {
      if ($(window).width() > 1024) {
        $(".hover,.tick", this).fadeIn();
      }
    },
    function() {
      if ($(window).width() > 1024) {
        $(".hover,.tick", this).fadeOut();
      }
    }
  );

  // ......active......//

  $(".regular p").click(function() {
    var regulaP = $(".regular p");

    if (regulaP.hasClass("active")) {
      regulaP.removeClass("active");
      $(this).addClass("active");
    }
  });

  $(".paginationMe ul li").click(function() {
    var paginationMeLi = $(".paginationMe ul li");

    if (paginationMeLi.hasClass("active")) {
      paginationMeLi.removeClass("active");
      $(this).addClass("active");
    }
  });

  $(".paginationMe ul a span.pager-next").click(function() {
    $(this).toggleClass("active");
  });

  // ........fixed scroll........//

  $(window).scroll(function() {
    var y = 1150;
    var z = parseFloat(y);
    var a = 2954;
    var b = parseFloat(a);
    var sticky = $("div.sideMnu div.sticky");
    var sticky2 = $("div.sideMnu div.sticky div.sticky2");

    if ($(window).width()>1024) {
      if ($(window).scrollTop() >= z) {
        sticky.css({
          position: "relative"
        });

        sticky2.css({
          position: "fixed",
          top: "auto",
          bottom: "100px",
          width: "255px"
        });
      }
      if ($(window).scrollTop() > b) {
        sticky2.css({
          position: "absolute",
          top: "1640px",
          bottom: "0px",
          width: "255px"
        });
      }
      if ($(window).scrollTop() < z) {
        sticky2.css("position", "static");
      }
    }
  });

  // ........explanationEnd.......//

  $("div.more span").click(function() {

    var moreSpan = $(this);
    var explanation=moreSpan.parents(".explanation");

    explanation.css("height", "533px");

   explanation.find("p.display") .toggle();

   explanation.find("h4.hLight,p.pLight") .css("opacity", "1");

    var heightExplanation =explanation.css("height");

    var displayP = explanation.find("p.display") .css("display");

    if ($(window).width() <= 1000) {

      explanation.attr("style", "height: 700px !important");
    }

    if ($(window).width() == 1024) {

      explanation.attr("style", "height: 605px !important");
    }

    if (heightExplanation == 533 || 700 + "px") {
      moreSpan.html("بستن");
    }

    if (displayP == "none") {
      explanation.css("height", "312px");

      explanation.find("h4.hLight,p.pLight") .css("opacity", "0.5");

      moreSpan.html("نمایش بیشتر");
    }
  });
});

function tick(test) {
  $(test).toggleClass("checked");
}
