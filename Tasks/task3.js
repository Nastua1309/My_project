var str ='http://люблю кушать';

var str_check = 'http://';
str =  str.substr(0, 7);
if (str == str_check){
    console.log(true);
} else{
    console.log(false);
}   