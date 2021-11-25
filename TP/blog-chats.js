

fetch('https://api.thecatapi.com/v1/breeds').then(function(response) {
            return response.json();
    }).then(function(listeRaces) {

        listeHtmlElement = document.getElementsByClassName("article")

        for (let index = 0; index < listeHtmlElement.length; index++) {
            randomInteger = Math.floor(Math.random()*listeRaces.length)
            $(listeHtmlElement[index]).siblings().find('.titre').eq(0).text(listeRaces[randomInteger].name);
            $(listeHtmlElement[index]).nextAll().find('.titre').eq(0).text(listeRaces[randomInteger].name);

            
            $(listeHtmlElement[index]).siblings().find('.image').eq(0).attr("src",listeRaces[randomInteger].image.url);
            $(listeHtmlElement[index]).nextAll().find('.image').eq(0).attr("src",listeRaces[randomInteger].image.url);

            
            $(listeHtmlElement[index]).siblings().find('.description').eq(0).text(listeRaces[randomInteger].description);
            $(listeHtmlElement[index]).nextAll().find('.description').eq(0).text(listeRaces[randomInteger].description);

            
            $(listeHtmlElement[index]).siblings().find('.temperament').eq(0).text(listeRaces[randomInteger].temperament);
            $(listeHtmlElement[index]).nextAll().find('.temperament').eq(0).text(listeRaces[randomInteger].temperament);

            
            $(listeHtmlElement[index]).siblings().find('.origin').eq(0).text(listeRaces[randomInteger].origin);
            $(listeHtmlElement[index]).nextAll().find('.origin').eq(0).text(listeRaces[randomInteger].origin);

        }

    }).catch(function() {
});  







