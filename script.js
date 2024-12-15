const jsonData = require('../results-summary-component/data.json');

//for loop that shows the individual items of the json
for (key in jsonData) {
    console.log(jsonData[key].category)
    console.log(jsonData[key].score)
    console.log(jsonData[key].icon)
    
}
