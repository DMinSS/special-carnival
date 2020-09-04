// My comment

/*
my multi
line
comment
*/

var variable = 10;
var text = "Hello, World!";
var text1 = 'He said: "Hello, World!"';

/*
this function returns value
*/
function add(a, b) {
    var c = a + b;
    return c;
}

/*
no return value
*/
function noReturn(a,b) {
    alert(a + b);
}

var minus = function(a, b) {
    return a - b;
}

var minus2 = function(a, b) {
    return a() - b();
}

var minus3 = function(a, b) {
    var c = a - b;
    if (c < 0) {
        return "negative";
    } else {
        return "positive";
    }
}

var minus4 = function(a, b) {
    var c = a - b;
    return (c < 0) ? "negative" : "positive";
}

for (var i = 0; i < 100; i++) {
    console.log(add(i, i));
}

var z = 0;
while (z < 50) {
    console.log(z);
    z++;
}