// npm global command, comes with node
// npm --version

// local dependency use it only in this particular project
// npm i <packageName>

// global dependency use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package. json - manifest file (stores important info about project/package)
// manual approach (create package. json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (eve rything default)

const _ = require('lodash');

const x = [1,[2,[3,[4,[5]]]]];

console.log(_.flattenDeep(x));