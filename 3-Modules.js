//modules - encapsulated code (share only required)

const{pete, johnny} = require ('./4-Names');

const greet = require ('./5-Utils')

greet(pete);
greet(johnny);

require('./7-mind-grenade'); //when yu import a module, you also invoke a function call in that module/ hence the output of "sum= 8"
const names = require('./4-Names');


const altExp = require('./6-AlternativeExport');




