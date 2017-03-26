var moment = require('moment');
var now = moment();

//console.log(now.format());
//console.log(now.format('X'));//unix timestamp
//console.log(now.format('x'));//Javascript unix timestamp --cant compare
//console.log(now.valueOf());//can compare

var timestamp = 1490549517318;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mm a'));

//now.subtract(1, 'year');
//console.log(now.format());
//console.log(now.format('MMM Do YYYY, h:mma')); //Oct 5th 2015, 6:45 pm