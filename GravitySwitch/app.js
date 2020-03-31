var ball = document.getElementById("ball");
var div = document.getElementById("container");

ball.addEventListener('click',(e) => {

    slideTheBall();
});

function slideTheBall(){

    if($(div).hasClass("reverse")){
        $(div).css({
            "transform" : "rotate(-10deg)",
            "transition" : "300ms ease-in-out"
        });
        $(ball).animate({left : '5px'});

    } else{
        $(div).css({
            "transform" : "rotate(10deg)",
            "transition" : "300ms ease-in-out"
        });
        $(ball).animate({left : '135px'});
    }

    setTimeout(()=>{
        $(div).toggleClass("reverse");
    },500);

    
}
    
  


