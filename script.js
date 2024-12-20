const grandScore = document.getElementById('score');
const summaryList = document.querySelectorAll('.summary-list');

// Handling JSON retrieval in the browser
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        let score = 0;

        
        for (let i = 0; i < data.length; i++) {
            summaryList[i].innerText = data[i].score;
            score += data[i].score;
            console.log(data[i].score);
        }

        grandScore.innerText = Math.round(score / data.length);
        console.log(`Total score is: ${score}`);
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