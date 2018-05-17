var mod = require('./program6a.js');
mod(process.argv[2], process.argv[3], function(err, data){
    if (err) throw err;
    data.forEach(function (item) { console.log(item) });
});
