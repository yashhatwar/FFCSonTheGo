var fs = require("fs");
// var node_xj = require("xls-to-json");
var XLSX = require('xlsx');

var wb = XLSX.readFile('report.xlsx');
var ws = wb.Sheets[wb.SheetNames[0]];

fs.writeFileSync('output.json', JSON.stringify(XLSX.utils.sheet_to_json(ws)));

// node_xj({
//     input: "report.xlsx", // input xls 
//     output: "output.json", // output json 
//     sheet: "Sheet 1" // specific sheetname 
// }, function (err, result) {
//     if (err) {
//         console.error(err);
//     } else {
//         var unique = [];

//         console.log(result);
//         // result.forEach(function (element) {
//         //     // remove number from faculty name
//         //     element.FACULTY = element.FACULTY.split(" - ").pop();
//         //     unique.push({
//         //         "CODE": element.CODE,
//         //         "TITLE": element.TITLE
//         //     });
//         // }, this);

//         // overwirte the output file
//         // fs.writeFile(__dirname + "/../data/all_data.json", JSON.stringify(result), () => {
//         //     console.log('all_data.json updated.');
//         // });

//         // remove repeating courses
//         // unique = result.filter((element, index, self) => self.findIndex(t => t.CODE === element.CODE && t.TITLE === element.TITLE) === index);

//         // fs.writeFile(__dirname + "/../data/unique_courses.json", JSON.stringify(unique), () => {
//         //     console.log('unique_courses.json updated.');
//         // });
//     }
// });
