var sum = 0;
for (var i = 2; i < process.argv.length; i++){
    let add = Number(process.argv[i]);
    sum += add;
}
console.log(sum);
