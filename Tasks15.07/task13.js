var str = 'var_text_hello'
var arr = str.split('_');
var result = '';
for (var i = 0; i < arr.length; i++) {
    if (i != 0) {
        result += arr[i][0].toUpperCase() + arr[i].substr(1);
    } else {
            result += arr[i];
        }
}
console.log(result);
