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
    $( "#datepicker" ).datepicker();
    $('#pass').blur(function() {
        if($(this).val().length < 6){
            alert("ent >6");
        }
    });
    // Configure/customize these variables.
    var showChar = 111; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more";
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
      $('.read-more').each(function() {
        var content = $(this).html();

        if(content.length > showChartoo) {
            var c = content.substr(0, showChartoo);
            var h = content.substr(showChartoo, content.length - showChartoo);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a class="morelink"  style="font-size: 10pt ; color:indianred;">' + moretext + '</a></span>';
            $(this).html(html);
        }

    });
    //jQuery('.tabs .tab-links a').on('click', function(e)  {
    //    var currentAttrValue = jQuery(this).attr('href');
    //    // Show/Hide Tabs
    //    jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
    //    // Change/remove current tab to active
    //    jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
    //
    //    e.preventDefault();
    //});
    $('#clickMe').click(function(){
        $('#popupWrapper').show();
    });
    $('#closeMe').click(function(){
        $('#popupWrapper').hide();
    });

    $( "#tabs" ).tabs();

           $('.nws-slider').easyTicker({
            direction: 'up', // up or down
            easing: 'swing', // easing function
            speed: 'slow', // the speed of transition
            interval: 5000, // the time for the next transition to take place.
            height: 'auto', // the height of the elements
            visible: 0, // the number of visible elements of the list
            mousePause: 1, // pause on mouse hover
            controls:{ // assign the elements which control the transition.
                up: '',
                down: '',
                toggle: ''
            }
        });
    $('#emailid').focusout(function(){

        $('#emailid').filter(function(){
            var emil=$('#emailid').val();
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if( !emailReg.test( emil ) ) {
                alert('Please enter valid email');
            } else {
                alert('Thank you for your valid email');
            }
        })
    });

});