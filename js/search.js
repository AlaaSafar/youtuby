$(document).ready(function () {
    // عندما نضغط على التصفية البحث يتم فتحها و إعلاقها 
    $("#search-filters-icon").click(function () {
        $(".filter-column").slideToggle("slow");
    });
    // أختيار الخيار الواحد من كل العمود من صناديق التأشير
    $("input:checkbox").click(function () {
        //تحديد الصندوق التأشير الذي تم الضغط عليه
        var $box = $(this);
        //إذا حدد صندوق التأشير؟
        if ($box.is(":checked")) {
            // attr يتم الحصول على الاسم صندوق التأشير عن طريق الخاصية 
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            // تحديد خطأ لجميع صناديق التأشير الموجودة في المجموعة التي لها الاسم الذي استدعيناهُ في السطر السابق
            $(group).prop("checked", false);
            //  تحديد صح فقط لصندوق التأشير الذي الضغظ عليه
            $box.prop("checked", true);
        }

    });
});