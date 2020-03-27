var CountryDataButton,LatestDataButton;

var conf_span_latest,deaths_span_latest,confirmedCountry,deathsCountry,countryDataContainer;

LatestDataButton = document.getElementById("latest_data_btn");
CountryDataButton = document.getElementById("country_data-btn");
confirmed = document.getElementById("conf_span_latest");
deaths = document.getElementById("deaths_span_latest");
confirmedCountry = document.getElementById("confirmed_country");
deathsCountry = document.getElementById("deaths_country");
countryDataContainer = document.getElementById("country_data_container");

LatestDataButton.addEventListener('click',function(){

    console.log("The latest button was clicked");
    fetchLatestData();
});

CountryDataButton.addEventListener('click',function(){
    console.log("country button clicked");
    fetchCountryData();
});


function fetchLatestData(){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/latest')
    .then(response => response.json())
    .then(data => {
        var mConfirmed = " " + data["latest"]["confirmed"] + " ";
        var mDeaths = " " +data["latest"]["deaths"] + " ";
        $(confirmed).text(mConfirmed);
        $(deaths).text(mDeaths);
        var label = document.getElementsByTagName("label");
        $(label).show();    
    });
}


function fetchCountryData(){

    fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
    .then(response => response.json())
    .then(data => {
        var dataArray = data["locations"];

        var countryDataArray = filterArray(dataArray);

        countryDataArray.forEach(data => {
            var countryName = data.country;
            var confirmed = data["latest"]["confirmed"];
            var deaths = data["latest"]["deaths"];
            var countryCode = data["country_code"];

            var countryCard = document.createElement("div");
            countryCard.setAttribute("id","country_card");

            
            var flag = document.createElement("img");
            $(flag).css({
                "display" : "block",
                "margin" : "0 auto"
            })
            flag.setAttribute("src",`https://www.countryflags.io/${countryCode}/shiny/64.png`)
            
            var mCNameLabel = document.createElement("div");
            mCNameLabel.setAttribute("id","country_name_label");
            
            var mCData = document.createElement("div");
            mCData.setAttribute("id","country_data_label")
            
            $(mCData).html(`Confirmed cases : <span id="country_cnf_span">${confirmed}</span> Deaths : <span id="country_deaths_span">${deaths}<br></span>`);
            $(mCNameLabel).html(`${countryName} <br>`);

            countryCard.appendChild(flag);
            countryCard.appendChild(mCNameLabel);
            countryCard.appendChild(mCData);

            countryDataContainer.appendChild(countryCard);
            
        });
    });
}

function filterArray(dataArray){
    
    var countryDataArray = [];
    const map = new Map();  

    for(const item of dataArray){
        if(!map.has(item.country)){
            map.set(item.country,true);
            countryDataArray.push(item);
        }
    }

    return countryDataArray;
}