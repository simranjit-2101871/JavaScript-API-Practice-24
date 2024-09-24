/*console.log("Lets make news website");
//7f049e1f310041cba011664f1ee0444c


let source = 'bbc-news';
let apiKey = '7f049e1f310041cba011664f1ee0444c';


//1.) grab the news container 
newsAccordion = document.getElementById('newsAccordion');

//2.) create a get request or post request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//3.) what to do when response os ready to be sent
// Assuming xhr is already defined and set up properly
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML = "";
        articles.forEach(function (element) {
            let id = element["title"].replace(/\s+/g, ''); // Unique ID without spaces
            let news = `<div class="card">
                            <div class="card-header" id="heading${id}">
                                <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${id}"
                                    aria-expanded="false" aria-controls="collapse${id}">
                                    ${element["title"]}
                                </button>
                                </h5>
                            </div>
                            <div id="collapse${id}" class="collapse" aria-labelledby="heading${id}" data-parent="#accordion">
                                <div class="card-body">
                                    ${element["description"]}<a href="${element['url']}">Read more at
                                </div>
                            </div>
                        </div>`;
            newsHTML += news;
        });
        document.getElementById("accordion").innerHTML = newsHTML;
    } else {
        console.log("Some error occurred");
    }
};

// Ensure this script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    xhr.send(); // Assuming xhr is properly set up and opened
});
*/

console.log("Let's make a news website");
//7f049e1f310041cba011664f1ee0444c

let source = 'bbc-news';
let apiKey = '7f049e1f310041cba011664f1ee0444c';

// 1.) Grab the news container
let newsAccordion = document.getElementById('accordion');

// 2.) Create a get request or post request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// 3.) What to do when response is ready to be processed
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML = "";
        articles.forEach(function (element, index) {
            let uniqueId = `collapse${index}`;
            let news = `<div class="card">
                            <div class="card-header" id="heading${uniqueId}">
                                <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#${uniqueId}"
                                    aria-expanded="false" aria-controls="${uniqueId}">
                                    ${element["title"]}
                                </button>
                                </h5>
                            </div>
                            <div id="${uniqueId}" class="collapse" aria-labelledby="heading${uniqueId}" data-parent="#accordion">
                                <div class="card-body">
                                    ${element["description"]}<a href="${element['url']}">Read more</a>
                                </div>
                            </div>
                        </div>`;
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    } else {
        console.log("Some error occurred");
    }
};

// Ensure this script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    xhr.send(); // Assuming xhr is properly set up and opened
});








