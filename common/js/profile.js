$(document).ready(function(){

$(".fav-li .fav-img i").click(function(){

    $(this).parents(".fav-li").remove()
});

$(".adrs-rght").click(function(){
    $(".dark").fadeIn();
    $(".modal-addres").fadeIn();
    $("body").attr("scroll","no");
    $("body").css("overflow","hidden");
});





});

function closeModal(){
    $(".dark").fadeOut();
    $(".modal-addres").fadeOut();
    $("body").attr("scroll","yes");
    $("body").css("overflow","auto");
};

// api address


function selected(that){
  var txt=  $(that).find("option:selected").text();
  var arr= new Array();

  if(txt == "آذربایجان شرقی"){
      arr=['آبش‌احمد ',' آچاچی',' آذرشهر',' آقکند','اسکو ','اهر','ایلخچی','باسمنج','بخشایش',' بستان‌آباد','بناب']
  };
  
  if(txt == "آذربایجان غربی"){
      arr=['اروميه','اشنويه','بازرگان','بوكان','پيرانشهر','تكاب','چالدران','خوي','سر دشت','سلماس','سيه چشمه','شاهين دژ','ماكو','مهاباد','مياندوآب','نقده']
  };

  if(txt == "اردبیل"){
    arr=['اردبيل','بيله سوار','پارس آباد','خلخال','سرعين','گیوی(کوثر)','گرمي','مشگين شهر','نمين','نير']
  };



  if(txt == "اصفهان"){

    arr=['آران و بيدگل','اردستان','اصفهان','باغ بهادران','تيران','چادگان','خميني شهر','خوانسار','دولت آباد','دهاقان','زرين شهر','زیبا شهر','سميرم','سپاهان شهر','شاهين شهر','شهرضا','فريدن','فريدون شهر','فلاورجان','فولاد شهر','قهدریجان','كاشان','گلدشت','گلپايگان','مباركه','ملک شهر','نايين','نجف آباد','نطنز','هرند'];
    
    };
    
    
    
    if(txt == "البرز"){
    
    arr=['آسارا','اشتهارد','چهار باغ','صفادشت','طالقان','کرج','کوهسار','نظر آباد','هشتگرد'];
    
    
    };
    
    
    if(txt == "ایلام"){
    
    arr=['آبدانان','ايلام','ايوان','دره شهر','دهلران','سرابله','مهران'];
    
    
    };
    
    
    
    if(txt == "بوشهر"){
    
    arr=['اهرم','برازجان','بپخش','بوشهر','تنگستان','جم','خارك','خورموج','دشتستان','دشتي','دلوار','دير','ديلم','عسلویه','كنگان','گناوه'];
    
    };
    
    
    
    if(txt == "تهران"){
    
    arr=['اسلام شهر','اندیشه','بومهن','پاكدشت','تجريش','تهران','چهاردانگه','دماوند','رباط كريم','رودهن','ري','شريف آباد','شهريار','فشم','فيروزكوه','قدس','قرچك','كن','كهريزك','گلستان','لواسان','ملارد','ورامين'];
    
    };
    
    
    if(txt == "چهارمحال و بختیاری"){
    
    arr=['ردل','بروجن','چلگرد','سامان','شهركرد','فارسان','فرخ شهر','لردگان','هفشجان'];
    
    };
    
    
    
    if(txt == "خراسان جنوبی"){
    
    arr=['بشرویه','بيرجند','خضری','سرایان','سربيشه','فردوس','قائن','هبندان'];
    
    };
    
    
    if(txt == "خراسان رضوی"){
    
    arr=['بردسكن','بجستان','تايباد','تربت جام','تربت حيدريه','جغتای','جوین','چناران','خواف','خلیل آباد','درگز','رشتخوار','سبزوار','سرخس','طوس','طرقبه','فريمان','قوچان','كاشمر','كلات','گناباد','مشهد','نيشابور'];
    
    };
    
    
    
    if(txt == "خراسان شمالی"){
    
    arr=['آشخانه','اسفراين','بجنورد','جاجرم','شيروان','فاروج'];
    
    
    };
    
    
    if(txt == "خوزستان"){
    
    arr=['آبادان','اميديه','انديمشك','اهواز','ايذه','گتوند','باغ ملك','بندرامام ','بندر ماهشهر','بهبهان','خرمشهر','دزفول','رامهرمز','رامشیر','سوسنگرد','شادگان','شوشتر','شوش','لالي','مسجد سليمان','هنديجان','هويزه'];
    
    
    };
    
    
    if(txt == "زنجان"){
    
    arr=['آب بر','ابهر','ايجرود','خرمدره','زرين آباد','زنجان','قيدار','ماهنشان'];
    
    };
    
    
    if(txt == "سمنان"){
    
    arr=['ايوانكي','بسطام','دامغان','سمنان','سرخه','شاهرود','شهمیرزاد','گرمسار','مهدیشهر'];
    
    };
    
    
    if(txt == "سیستان و بلوچستان"){
    
    arr=['ايرانشهر','چابهار','خاش','راسك','زابل','زاهدان','سراوان','سرباز','فنوج','کنارک','ميرجاوه','نيكشهر'];
    
    };
    
    if(txt == "فارس"){
    
    arr=['آباده','اردكان','ارسنجان','استهبان','اقليد','ایزد خواست','بوانات','پاسارگاد','جهرم','حاجي آباد','خرم بید','خنج','خشت','داراب','شيراز','فراشبند','فسا','فيروز آباد','قایمیه','قيرو کارزین','كازرون','گراش','لار','لامرد','مرودشت','مصیری(رستم)','مهر','نورآباد','نیریز'];
    
    };
    
    
    
    if(txt == "قزوین"){
    
    arr=['آبيك','شهرک البرز','بوئين زهرا','تاكستان','قزوين','محمود آباد نمونه'];
    
    };
    
    
    
    if(txt == "قم"){
    
    arr=['قم'];
    
    };
    
    
    if(txt == "کردستان"){
    
    arr=['بانه','بيجار','ديواندره','دهگلان','سقز','سنندج','قروه','كامياران','مريوان'];

    };
    
    
    if(txt == "کرمان"){
    
    arr=['شهر بابك','بافت','بردسير','بم','جيرفت','سرچشمه','راور','رفسنجان','زرند','سيرجان','كرمان','كهنوج'];
    
    };
    
    
    
    if(txt == "کرمانشاه"){
    
    arr=['اسلام آباد غرب','پاوه','ثلاث باباجانی','جوانرود','خسروی','سر پل ذهاب','سنقر','صحنه','قصر شيرين','كرمانشاه','كنگاور','گيلان غرب','هرسين'];
    
    };
    
    
    
    if(txt == "کهگیلویه و بویر احمد"){
    
    arr=['دنا','دوگنبدان','دهدشت','سي سخت','گچساران','لیکک','ياسوج'];
    
    };
    
    if(txt == "گلستان"){
    
    arr=['آزاد شهر','آق قلا','بندر گز','تركمن','جلین','راميان','علي آباد كتول','كردكوي','كلاله','گالیکش','گرگان','گنبد كاووس','مراوه تپه','مينو دشت'];
    
    };
    
    if(txt == "گیلان"){
    
    arr=['ستارا','آستانه اشرفيه','املش','بندرانزلي','تالش','خمام','رودبار','رود سر','رستم آباد','رشت','رضوان شهر','سياهكل','شفت','صومعه سرا','فومن','كلاچاي','لاهيجان','لنگرود','لوشان','ماسال','ماسوله','منجيل'];
    
    };
    
    
    
    if(txt == "لرستان"){
    
    arr=['ازنا','الشتر','اليگودرز','بروجرد','پلدختر','خرم آباد','دورود','سراب دوره','سپید دشت','شول آباد','كوهدشت','نور آباد'];
    
    };
    
    
    
    if(txt == "مازندران"){
    
    arr=['مل','بلده','بهشهر','بابل','بابلسر','پل سفيد','تنكابن','جويبار','چالوس','رامسر','ساري','سلمانشهر','سواد كوه','فريدون كنار','کلاردشت','قائم شهر','گلوگاه','محمود آباد','مرزن آباد','نكا','نور','نوشهر'];
    
    };
    
    if(txt == "مرکزی"){
    
    arr=['آشتيان','اراك','تفرش','خمين','خنداب','دليجان','زرندیه','ساوه','شازند','کمیجان','محلات'];
    
    };
    
    if(txt == "هرمزگان"){
    
    arr=['ابوموسي','انگهران','بندر جاسك','بندر خمیر','بندرعباس','بندر لنگه','بستك','پارسیان','تنب بزرگ','حاجي آباد','دهبارز','قشم','كيش','ميناب'];
    
    };
    
    if(txt == "همدان"){
    
    arr=['سدآباد','بهار','تويسركان','رزن','كبودر اهنگ ','ملاير','نهاوند','همدان'];
    
    };
    
    
    if(txt == "یزد"){
    
    arr=['ابركوه','اردكان','اشكذر','بافق','تفت','طبس','مهريز','ميبد','رات','يزد'];
    
    };
    
    $(".left select").find("option:not():first-child").remove();

    var x=0;
    if(arr.length>0){
        for(x=0;x<arr.length;x++){

            $(".left select").append($('<option>',{
                text:arr[x]
            }));
        };
    };
    $(".left select").selectpicker('refresh')
}