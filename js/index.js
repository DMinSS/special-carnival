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

function Cat(name, color) {
    this.name = name;
    this.color = color;

    this.run = function() {
        console.log(this.name + " runs!");
    }
    return this;
}

var cat1 = new Cat("Snizhok", "white");
var cat2 = new Cat("Murzik", "black");

console.log(cat1.name);
console.log(cat2.name);
cat1.run();
cat2.run();

setTimeout(function() {
    cat1.run();
}, 3000);

function clicker() {
    noReturn(2,2)
}

clickbtn.onclick = clicker;
eventbtn.addEventListener('click', function (e) {
    console.log("clicked the button");
}, true);

bubble.addEventListener('click', function (e) {
    console.log("clicked the div");
    e.stopPropagation();
    e.preventDefault();
}, true);

eventbtn.addEventListener('click', clicker, false);
// eventbtn.removeEventListener('click', clicker);

