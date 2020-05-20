const key = require('./keys');
const spoonKey = key.main;
const searchBox = document.querySelector('#search input');
const recipeDiv = document.querySelectorAll('#recipe');

let search;
let diet = "";
let cuisine = "";
let num = "150";
let recipeArray = [];

let sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;

let spoonRecipe = function() {
    fetch(sUrl) 
    .then(response => {
        return response.json();
    })
    .then(data => {
        // console.log(data);
        e = 0;
        let dataArray = data.results;    
        for(let i = 0; i < dataArray.length; i++) {
            recipeArray.push( {
                image: dataArray[i].image,
                title: dataArray[i].title,
                url: dataArray[i].sourceUrl,
                time: dataArray[i].readyInMinutes,
                servings: dataArray[i].servings,
                ids: dataArray[i].id
            });
        };  

        let results = data.totalResults;
        let $body = $("#main");
        let $foundLots = $("<h5></h5>").text("found " + results + " recipes! here are " + num + " of the best");
        let $found = $("<h5></h5>").text("found " + results + " recipes");
        let $notFound = $("<h5></h5>").text("Sorry comrade, no recipes match your criteria, please try again").css({"font-size" : "30px"}, {"text-align" : "center"});

        if (results == 0) {
            $($body).append($notFound);
        } else if (results > num) {
            $($body).append($foundLots);
        } else {
            $($body).append($found);
        };
        // console.log(recipeArray)
        return recipeArray;     
    })
    .then(recipeArray => {
        for(let e = 0; e < recipeArray.length; e++) {
            let title = recipeArray[e].title;
            let ids = recipeArray[e].ids;
            let time = recipeArray[e].time;
            let servings = recipeArray[e].servings;
            let url = recipeArray[e].url;
        newRecipe(title, ids, time, servings, url);
        };
    });
};

let newRecipe = function(title, ids, time, servings, url) {
    let $body = $("#main");
    let $recArea = $("<div></div>").addClass("recipeArea");
    let $mainDiv = $("<div></div>").attr('id', 'recipe');
    let $title = $("<h2></h2>").addClass('title').text(title);
    let $img = $("<img></img>").attr('src', "https://spoonacular.com/recipeImages/" + ids + "-240x150.jpg").attr('id', 'recImg');
    let $time = $("<h4></h4>").addClass('time').text(time + " minutes");
    let $servings = $("<h4></h4>").addClass('serving').text("makes about " + servings + " servings");
    let $url = $("<a></a>").attr('href', url);
    let $timerImg = $("<img></img>").attr('src', "images/timer2.png");
    
    $($mainDiv).append($title);
    $($mainDiv).append($img);
    $($time).prepend($timerImg);
    $($mainDiv).append($time);
    $($mainDiv).append($servings);
    $($url).append($mainDiv)
    $($recArea).append($url);
    $($body).append($recArea);

    var $numWords = $title.text().split("").length;

    if (($numWords >= 40)) {
        $title.css("font-size", "19px");
    }    
};

document.addEventListener('keypress', (e) => {
    search = searchBox.value;
    if (e.key === 'Enter') {
        e.preventDefault();
        recipeArray = [];
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
        $('.recipeArea').remove();
        $('#background').remove();
        $('h5').remove();
        spoonRecipe();
    };
});

let submit = document.querySelector('#submit')
submit.addEventListener('click', (e) => {
        e.preventDefault();
        search = searchBox.value;
        recipeArray = [];
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl)
        $('.recipeArea').remove();
        $('#background').remove();
        $('h5').remove();
        spoonRecipe();
});

$('#diet').on('change', function() {
    if ($(this).val() == 1) {
        diet = "";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 2) {
        diet = "vegan";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 3) {
        diet = "vegetarian";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    };
    
  });

  $('#cuisine').on('change', function() {
    if ($(this).val() == 1) {
        cuisine = "";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 2) {
        cuisine = "African";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 3) {
        cuisine = "American";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 4) {
        cuisine = "British";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 5) {
        cuisine = "Cajun";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 6) {
        cuisine = "Chinese";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 7) {
        cuisine = "European";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 8) {
        cuisine = "Greek";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 9) {
        cuisine = "Indian";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 10) {
        cuisine = "Italian";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 11) {
        cuisine = "Japanese";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 12) {
        cuisine = "Jewish";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 13) {
        cuisine = "Mediterranean";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 14) {
        cuisine = "Mexican";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 15) {
        cuisine = "Middle Eastern";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 16) {
        cuisine = "Thai";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    } else if ($(this).val() == 17) {
        cuisine = "Vietnamese";
        sUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonKey}&query=${search}&number=${num}&diet=${diet}&cuisine=${cuisine}`;
        console.log(sUrl);
    };
  });

$(".logo").click((e) => {
    location.reload();
});