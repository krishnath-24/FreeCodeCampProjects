var getMealButton,videoRecipe,figCaption,mealThumbnail,mealName,mealInstructions,
category,area,tags,mealGeneralInfo,ingredientsList,ingredients;

var dataArray = [];
var meal;


getMealButton = document.getElementById("get_meal");
videoRecipe = document.getElementById("video_recipe");
figCaption = document.getElementsByTagName("figcaption");
mealThumbnail = document.getElementById("meal_thumbnail");
mealName = document.getElementById("meal_name");
mealInstructions = document.getElementById("meal_Instructions");
category = document.getElementById("category");
area = document.getElementById("area");
tags = document.getElementById("tags");
mealGeneralInfo = document.getElementById("meal_general_info");
ingredientsList = document.getElementById("ingredients_list");
ingredients = document.getElementById("ingredients");

getMealButton.addEventListener( "click", function(){

        $(document).ready(function(){
            
            $.get('https://www.themealdb.com/api/json/v1/1/random.php',function(data,status){

            dataArray[0] = data.meals[0];
            meal = dataArray[0];
            if(data)
            populateData();
        });
    });
});

function populateData(){

    populateIngredients();
    populateNameNInstructions();
    populateVideo();
    
}


function populateIngredients(){
    
    let thumbnailUrl = meal.strMealThumb;
    let mCategory = meal.strCategory;
    let mArea = meal.strArea;
    let mTags = meal.strTags;
    
    // console.log(meal["strIngredient"+1] + " " + meal["strMeasure"+1]);

    for(let i = 1; i <= 20; i++){
        var ing = meal["strIngredient"+""+i];
        if( ing !== null && ing.length > 0)
        $(ingredientsList).append(`<li>${meal["strIngredient"+""+i]} - ${meal["strMeasure"+""+i]}</li><br>`)
    }
    $(ingredients).show();
    $(mealThumbnail).attr("src",thumbnailUrl);

    $(category).html(mCategory);
    $(area).html(mArea);
    $(tags).html(mTags);
    setTimeout(() => {
        $(mealGeneralInfo).show();
    }, 300);

}

function populateNameNInstructions(){

    var name = meal.strMeal;
    var instructions = meal.strInstructions;

    console.log(name + " " + instructions);
    $(mealName).html(name);
    $(mealInstructions).html(instructions);

}

function populateVideo(){

    var url = meal.strYoutube;
    var id = url.split("=")[1];

    $(videoRecipe).attr("src","https://www.youtube.com/embed/"+id);
    $(videoRecipe).show();
    $(figCaption).html("Watch how to make delecious "+meal.strMeal);
    
 
}