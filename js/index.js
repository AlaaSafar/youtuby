$(document).ready(function () {
    /*  إضافة النشاط على الزر الفيديوهات المقترحة بشكل تلقائي */
    $(".first-list-element").addClass("active");
    /* عند الضغط على أحد أزرار القائمة العلوية يتم حذف الصنف النشاط*/ 
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    /* عند الضغط على الأيقونة الخاصة بالقائمة الجانبية*/
    $("#toggler").click(function (event) {
        $("#wrap").toggleClass("toggled");

        /* إضافة الطبقة السوداء*/ 
        var right = $('.sidebar').css("right");/*تم استخدام هذه الخاصية للقائمة الجانبية لكي تصبح على الجهة اليمين */
        /*هنا القائمة الجانبية بحالة إظهار و بالتالي يجب إغلاقها */
        if (right == '0px') {
            $('.sidebar').css({ 'right': '-17rem' });
            /* إخفاء الطبقة السوداء*/
            $('.A').fadeOut();
        }
          /*هنا القائمة الجانبية بحالة إغلاق و بالتالي يجب إظهارها */
        else {
            $('.sidebar').css({ 'right': '0' });
            /* إظهار الطبقة السوداء*/
            $('.A').fadeIn();
        }
    });
    /*إخفاء القائمة الجانبية والطبقة السوداء عندما نضغط على الطبقة السوداء*/
    $('.A').click(function () {
        $('.sidebar').css({ 'right': '-17rem' });
        $('.A').fadeOut();
    });
    /*إخفاء وإظهار حقل البحث عند الضغط على أيقونة البحث التي تظهر في الشاشات المتوسطة والصغيرة*/
    $(".search-icon").click(function(){
        $(".search-input").slideToggle("slow");
    })
});

/*هنا سيتم تلقائيا تاريخ سنة حالية */
$(function () {
    var currentDate = new Date();
    $('#Year').text(currentDate.getFullYear());
});
