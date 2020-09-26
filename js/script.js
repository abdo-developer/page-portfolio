//Scroll شفرة 
$(window).scroll(function () {

    if ($(this).scrollTop() >= 200) {
        $("#navBar").addClass("noTransparrent");
    } else {
        $("#navBar").removeClass("noTransparrent");
    }
});

//شفرة الانتقال إلى الفقرة الهدف
$(document).ready(function () {
    $("a.scroll").on('click', function (event) {

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {});

    });

    //circle progress
    $('.circle').circleProgress({
        starAngle: -Math.PI / 2,
        fill: "#057e6"
    }).on('circle.animation.progress', function (event, progress, stepValue) {
        $(this).find('span').html(Math.rounded(stepValue * 100) + '%');
    });

    //التحقق من دخل المستخدم

    $(function () {
        $('#commentForm').validate();
    });

});