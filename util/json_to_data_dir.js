const fs = require('fs');

// overwirte the output file
const result = fs.readFileSync('output.json');
const resultArray = JSON.parse(result);

// const keyMap = {
//     "COURSE\r\nCODE": "CODE",
//     "COURSE NAME": "TITLE",
//     "COURSE\r\nTYPE": "TYPE"
// }

// const keysRemove = ['ALLOTED\r\nSEATS'];

// for (let courseObj of resultArray) {
// transformKeys(courseObj, keyMap);
// removeKeys(courseObj, keysRemove);
// }

fs.writeFile(__dirname + '/../data/all_data.json', JSON.stringify(resultArray), () => {
	console.log('all_data.json updated.');
});

// remove repeating courses
unique = resultArray.filter((element, index, self) => self.findIndex(t => t.CODE === element.CODE && t.TITLE === element.TITLE) === index);

fs.writeFile(__dirname + '/../data/unique_courses.json', JSON.stringify(unique), () => {
	console.log('unique_courses.json updated.');
});

// function transformKeys(obj, keyMap) {
//     const from = Object.keys(keyMap);

//     for(let i = 0; i < from.length; ++i) {
//         let origKey = from[i];

//         const val = obj[origKey];
//         delete obj[origKey];
//         obj[keyMap[origKey]] = val;
//     }
// }

// function removeKeys(obj, keys) {
// 	for (let key of keys) delete obj[key];
// }
