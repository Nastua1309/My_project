var num = '874';


function toNine (a) {
var arr = a.split('');
var sum1 = 0;
for(var i = 0; i < arr.length; i++){
        sum1 += +arr[i];
}
if (sum1 > 9){
    toNine(sum1+'');
}else{
    console.log(sum1);
    }
}
toNine(num);
