var fs = require('fs');
var path = require('path');
var config = require('./index');


var dir = 'build';
var jsonFile = 'eslint.json';
var fullPath = path.join(dir, jsonFile);


function justThrowErrors(err) { if(err) { throw err; } }


function makeDir(dir, callback) {
  fs.mkdir(dir, (err) => {
    if (err) { throw err; }

    callback();
  });
}


function writeJson(jsonPath) {
  fs.writeFile(jsonPath, JSON.stringify(config), { encoding: 'utf8' }, justThrowErrors);
}


// We can't write the file if we don't have the `build` directory.
fs.stat(dir, (err) => {
  if (err) {
    makeDir(dir, () => writeJson(fullPath));
  } else {
    writeJson(fullPath);
  }
})
