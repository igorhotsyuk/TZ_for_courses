


$(document).ready(function() {
    $('.menu-button').click(function () {
        $('.header-expend').slideDown();
    });
    $('#home-id').mouseenter(function () {
        $('.sub-menu').slideToggle();
    });
    $('.account-button').click(function () {
        $('.epx-login-block').slideDown();
    });
    $('.account-button, .epx-login-block').mouseleave(function (){
        $('.epx-login-block').slideUp();
    });
    $("#change-color").hover(function(){
        $(this).animate({"backgroundColor": "#ffffff"}, 400);
    }, function(){
        $(this).animate({"backgroundColor": "red"}, 400);
    });


    $('.bxslider').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true
    });


    // Configure/customize these variables.
    var showChar = 111; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Show less";


    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="morelink" id="clickMe" style="font-size: 10pt ; color:indianred;">' + moretext + '</a></span>';
            $(this).html(html);
        }

    });

    var showChartoo = 220; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Show less";


    $('.read-more').each(function() {
        var content = $(this).html();

        if(content.length > showChartoo) {
            var c = content.substr(0, showChartoo);
            var h = content.substr(showChartoo, content.length - showChartoo);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a class="morelink"  style="font-size: 10pt ; color:indianred;">' + moretext + '</a></span>';
            $(this).html(html);
        }

    });

    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
    $('#clickMe').click(function(){
        $('#popupWrapper').show();
    });
    $('#closeMe').click(function(){
        $('#popupWrapper').hide();
    });

});