const fs = require('fs');

// overwirte the output file
const result = fs.readFileSync('output.json');
const resultObj = JSON.parse(result);

fs.writeFile(__dirname + "/../data/all_data.json", result, () => {
    console.log('all_data.json updated.');
});

// remove repeating courses
unique = resultObj.filter((element, index, self) => self.findIndex(t => t.CODE === element.CODE && t.TITLE === element.TITLE) === index);

fs.writeFile(__dirname + "/../data/unique_courses.json", JSON.stringify(unique), () => {
    console.log('unique_courses.json updated.');
});