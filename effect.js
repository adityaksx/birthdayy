$(window).on('load', function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function(){
    var vw;
    var balloonsFlying = false;

    function getBalloonSpacing() {
        var totalWidth = $(window).width();
        if (totalWidth >= 1200) {
            return { s1: 350, s2: 250, s3: 150, s4: 50, s5: 50, s6: 150, s7: 250 };
        } else if (totalWidth >= 768) {
            return { s1: 240, s2: 180, s3: 120, s4: 40, s5: 40, s6: 120, s7: 180 };
        } else {
            return { s1: 150, s2: 110, s3: 70, s4: 25, s5: 25, s6: 70, s7: 110 };
        }
    }

    function getBalloonTop() {
        var w = $(window).width();
        if (w >= 1200) return 240;
        else if (w >= 768) return 220;
        else return 200;
    }

    $(window).resize(function(){
        if (balloonsFlying) return;
        vw = $(window).width() / 2;
        var spacing = getBalloonSpacing();
        var bTop = getBalloonTop();
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

    function floatBalloon(id) {
        if (!balloonsFlying) return;

        let randomLeft = Math.random() * $(window).width();

        $(id)
        .css({ bottom: -200 }) // start from bottom
        .animate({
            bottom: $(window).height() + 200, // go above screen
            left: randomLeft
        }, 5000 + Math.random()*3000, 'linear', function () {
            floatBalloon(id); // loop
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top: -500}, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        balloonsFlying = true;
        floatBalloon('#b1');
        floatBalloon('#b2');
        floatBalloon('#b3');
        floatBalloon('#b4');
        floatBalloon('#b5');
        floatBalloon('#b6');
        floatBalloon('#b7');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function(){
        balloonsFlying = false; // stop balloons
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

        $('.cake').fadeOut('slow'); // ✅ ADDED — cake hides, no overlap

        vw = $(window).width() / 2;
        var spacing = getBalloonSpacing();
        var bTop = getBalloonTop();

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
