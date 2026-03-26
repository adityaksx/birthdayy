$(window).on('load', function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function(){
    var vw;
    var balloonsFlying = false;

    // Responsive spacing function
    function getBalloonSpacing() {
        var totalWidth = $(window).width();

        if (totalWidth >= 1200) {
            // Desktop - original spacing
            return {
                s1: 350, s2: 250, s3: 150, s4: 50, s5: 50, s6: 150, s7: 250
            };
        } else if (totalWidth >= 768) {
            // Tablet - medium spacing
            return {
                s1: 240, s2: 180, s3: 120, s4: 40, s5: 40, s6: 120, s7: 180
            };
        } else {
            // Mobile - compact spacing
            return {
                s1: 150, s2: 110, s3: 70, s4: 25, s5: 25, s6: 70, s7: 110
            };
        }
    }

    // Position balloons on resize
    $(window).resize(function(){
        if (balloonsFlying) return;

        vw = $(window).width() / 2;
        var spacing = getBalloonSpacing();
        var bTop = Math.round($(window).height() * 0.08); // ✅ same dynamic value

        $('#b1,#b4,#b5,#b7').stop();
        $('#b11').animate({top: bTop, left: vw - spacing.s1}, 500);
        $('#b22').animate({top: bTop, left: vw - spacing.s2}, 500);
        $('#b33').animate({top: bTop, left: vw - spacing.s3}, 500);
        $('#b44').animate({top: bTop, left: vw - spacing.s4}, 500);
        $('#b55').animate({top: bTop, left: vw + spacing.s5}, 500);
        $('#b66').animate({top: bTop, left: vw + spacing.s6}, 500);
        $('#b77').animate({top: bTop, left: vw + spacing.s7}, 500);
    });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    // Balloon flying loops
    function loopOne() {
        if (!balloonsFlying) return;
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopOne();
        });
    }

    function loopTwo() {
        if (!balloonsFlying) return;
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopTwo();
        });
    }

    function loopThree() {
        if (!balloonsFlying) return;
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopThree();
        });
    }

    function loopFour() {
        if (!balloonsFlying) return;
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopFour();
        });
    }

    function loopFive() {
        if (!balloonsFlying) return;
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopFive();
        });
    }

    function loopSix() {
        if (!balloonsFlying) return;
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopSix();
        });
    }

    function loopSeven() {
        if (!balloonsFlying) return;
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopSeven();
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top: -500}, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

        balloonsFlying = true;

        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();

        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function(){
        balloonsFlying = false;

        vw = $(window).width() / 2;
        var spacing = getBalloonSpacing();
        
        // ✅ Dynamic top — stays above the cake on all screen sizes
        var bTop = Math.round($(window).height() * 0.08);

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop(true, false);

        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22');
        $('#b3').attr('id','b33');
        $('#b4').attr('id','b44');
        $('#b5').attr('id','b55');
        $('#b6').attr('id','b66');
        $('#b7').attr('id','b77');

        $('.balloons')
            .removeClass('balloons-rotate-behaviour-one balloons-rotate-behaviour-two')
            .css('transform', 'rotate(0deg)');

        // ✅ Use bTop instead of hardcoded 240
        $('#b11').animate({top: bTop, left: vw - spacing.s1}, 500);
        $('#b22').animate({top: bTop, left: vw - spacing.s2}, 500);
        $('#b33').animate({top: bTop, left: vw - spacing.s3}, 500);
        $('#b44').animate({top: bTop, left: vw - spacing.s4}, 500);
        $('#b55').animate({top: bTop, left: vw + spacing.s5}, 500);
        $('#b66').animate({top: bTop, left: vw + spacing.s6}, 500);
        $('#b77').animate({top: bTop, left: vw + spacing.s7}, 500);

        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);

        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });

        var i;

        function msgLoop(i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
                i = i + 1;
                $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
                if(i == 50){
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function(){
                        $('.cake').fadeIn('fast');
                    });
                } else {
                    msgLoop(i);
                }
            });
        }

        msgLoop(0);
    });
});
