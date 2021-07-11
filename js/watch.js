$(document).ready(function () {
    /*   عند ضغط على الزر سيتم استدعاء الدالة  لتعمل على إظهار و إخفاء النص  */
    $("#myBtn").on("click", function () {
        read();
    });
        /* عند ضغط على الزر الردود سيتم عمل إظهار و إخفاء*/
    $(".reply").click(function() {
        $(this).parents("div.row").next("div.card").toggle();
    });

});
/*الدالة التي تم استخدامها لإظهار و إخفاء العناصر */
function read() {
    /* تم أحضار النقاط الثلاثة */
    var dots = document.getElementById("dots");
    /*تم أحضار التص التي نريد إظهارهُ و إخفاءهِ*/
    var moreText = document.getElementById("more");
    /*تم أحضار الزر الذي سنضغط عليه */
    var btnText = document.getElementById("myBtn");
    /*  هنا إذا كانوا النقاط الثلاثة تم إخفائهم عند ضغط على الزر سيتم إظهار النص  */
    if (dots.style.display === "none") {
        /*إظهار النقاط الثلاثة */
        dots.style.display = "inline";
        /* إستبدال النص الزر إلى النص عرض */
        btnText.innerHTML = "عرض المزيد";
        /*أخفاء النص  */
        moreText.style.display = "none";
    }
    /* إذا كانت النقاط الثلاثة ظاهرين عند ضغط على الزر سيتم إخفاء النص */
    else {
        /*أخفاء نقاط ثلاثة */
        dots.style.display = "none";
        /* إستبدال النص عرض المزيد إلى النص عرض عناصر أقل */
        btnText.innerHTML = "عرض  عناصر أقل ";
        /*إظهار النص  */
        moreText.style.display = "inline";
    }
}


