var arr = [1, 2, 3, 4, 5];
recursion(arr);

function recursion(arr) {
    console.log(arr.shift());
    if (arr.length > 0) {
        recursion(arr);
    }
}

