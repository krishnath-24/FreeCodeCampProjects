
var buttonContainer = document.getElementById("btn_container");
var ghostButton = document.getElementById("ghost");


ghostButton.addEventListener("mouseover",function(){

    if(buttonContainer.style.flexDirection == "row-reverse"){
        buttonContainer.style.flexDirection = "row";

    } else {
        buttonContainer.style.flexDirection = "row-reverse";
    }
});