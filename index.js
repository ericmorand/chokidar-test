let chokidar = require('chokidar');
let path = require('path');

let w = chokidar.watch(path.resolve('src/index.js'));

w.on('all', function(type, file) {
    console.log('CHOKIDAR', file, type);
});