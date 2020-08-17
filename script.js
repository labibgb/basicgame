$(document).ready(function(){

    let mov = 0;
    let p = new Array();
    p[ 0 ] = 0;
    p[ 1 ] = 0;
    let cur = 0;
    let last = 0;
    let score1 = $("#score-1");
    let score2 = $("#score-2");
    score1.text("Player 1 Score: "+p[ 0 ]);
    score2.text("Player 2 Score: "+p[ 1 ]);
    let btn = $("#btn-1");
    let btn1 = $("#btn-2");
    let btn2 = $("#btn-3");
    btn.text("Player "+(mov+1))
    let xx = 0;
    btn2.click(function(){
        reset();
    });
    btn1.click( function(){
        if( xx === 0 ){
            if( p[mov]+cur >= 100 )
            {
                console.log(mov);
                xx = 1;
                $("#goal").text("Player "+(mov+1)+" win");
                $("#goal").css("color", "red");
                setTimeout(reset, 3000);
            }
            update();
        }
    });
    btn.click(function(){
        if( xx === 0 ){
            let x = Math.ceil(Math.random()*10) % 7;
            if( x == 0 ) x++;
            cur += x;
            if( x == 1 && last == x )
            {
                x = 0;
                last = 0;
                cur = 0;
                update();
            }
            last = x;
            $("#cur-score-"+mov).text("Current Score: "+cur)
            $("#cur-move-"+mov).text(x);
            let src = "dice/face-"+x+".png";
            let img = $(".header");
            if( x > 0 ){
                img.html("<img src="+src+" style='width:200px;height:200px;'>");
            }
        }
    });

    function update(){
        p[ mov ] += cur;
        score1.text("Player 1 Score: "+p[ 0 ]);
        score2.text("Player 2 Score: "+p[ 1 ]);
        cur = 0;
        last = 0;
        $("#cur-score-"+mov).text("Current Score: "+cur)
        $("#cur-move-"+mov).text(0);
        mov = mov == 0 ? 1 : 0;
        btn.text("Player "+(mov+1));
    }
    function reset(){
        p[ 0 ] = 0;
        p[ 1 ] = 0;
        mov = 0;
        cur = 0;
        last = 0;
        xx = 0;
        $("#goal").text("Goal: 100");
        $("#goal").css("color", "black");
        score1.text("Player 1 Score: "+p[ 0 ]);
        score2.text("Player 2 Score: "+p[ 1 ]);
        $("#cur-score-0").text("Current Score: 0");
        $("#cur-score-1").text("Current Score: 0");
        $("#cur-move-0").text(0);
        $("#cur-move-1").text(0);
        btn.text("Player 1");
    }

});

