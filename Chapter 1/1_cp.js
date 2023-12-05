// child process  module is a module to create are sub process  within a 
// script. You can perform different task by using methods from the module in
// the script

const cp = require('child_process');


// cp.execSync('calc');
// cp.execSync('start chrome https://www.scaler.com/topics/course/nodejs/video/973/');
console.log('output ' + cp.execSync('node test.js'));