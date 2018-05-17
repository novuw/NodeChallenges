/*
function callback(path, extension){
var extens = '.' + extension;
fs.readdir(toString(path), (err, list) => {
    if (err) return err;
    for (var i = 0; i < list.length; i++){
        if (path.extname(list[i]) == extens){
            console.log(list[i]);
        }
    }
});
console.log('penis');

    }
*/
var fs = require('fs');
var pathy = require('path');
module.exports = function(path, ext, callback){
    var array = [];
    fs.readdir(path, (err, list) => {
    var extension = '.' + ext;
    if (err) return callback(err);
    for (var i = 0; i < list.length; i++){
        if (pathy.extname(list[i]) == extension){
            array.push(list[i]);
        }
    }
    return callback(null, array);
});
};
