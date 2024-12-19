const grandScore = document.getElementById('score');
const summaryLists = document.querySelectorAll('.summary-list')
let  dt;
// Handling JSON retrieval in the browser
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        dt = data;
        console.log(dt[1]);
        summaryLists[0].innerText = dt[0].score
    })
    .catch(error => console.error(error));










// Handling JSON retrieval in the terminal for during development
/*
const jsonData = require('../results-summary-component/data.json');
// for loop that shows the individual items of the json
for (key in jsonData) {
    console.log(jsonData[key].category)
    console.log(jsonData[key].score)
    console.log(jsonData[key].icon)
    
}
*/