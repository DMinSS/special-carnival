// My comment

/*
my multi
line
comment
*/

const variable = 10;
const text = "Hello, World!";
const text1 = 'He said: "Hello, World!"';

/*
this function returns value
*/
function add(a, b) {
    const c = a + b;
    return c;
}

/*
no return value
*/
function noReturn(a, b) {
    alert(a + b);
}

const minus = (a, b) => a - b

const minus2 = (a, b) => a() - b()

const minus3 = (a, b) => {
    const c = a - b;
    if (c < 0) {
        return "negative";
    } else {
        return "positive";
    }
}

const minus4 = (a, b) => {
    const c = a - b;
    return (c < 0) ? "negative" : "positive";
}

for (var i = 0; i < 100; i++) {
    console.log(add(i, i));
}

let z = 0;
while (z < 50) {
    console.log(z);
    z++;
}

function Cat(name, color) {
    this.name = name;
    this.color = color;

    this.run = () => {
        console.log(this.name + " runs!");
    }
    return this;
}

class ModernCat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name + " runs!");
    }
}

const cat1 = new Cat("Snizhok", "white");
const cat2 = new ModernCat("Murzik", "black");

console.log(cat1.name);
console.log(cat2.name);
cat1.run();
cat2.run();

setTimeout(() => cat1.run(), 3000);

function clicker() {
    noReturn(2, 2)
}

clickbtn.onclick = clicker;
eventbtn.addEventListener('click', e => {
    console.log("clicked the button");
}, true);

bubble.addEventListener('click', e => {
    console.log("clicked the div");
    e.stopPropagation();
    e.preventDefault();
}, true);

eventbtn.addEventListener('click', clicker, false);
// eventbtn.removeEventListener('click', clicker);

document.querySelector('aside').addEventListener('click', () => {
    if (document.querySelector('aside').style["font-size"] === "28px") {
        document.querySelector('aside').style["font-size"] = "16px";
    } else {
        document.querySelector('aside').style["font-size"] = "28px";
    }
}, false)


function Person(age) {
    this.age = age;
    setInterval(() => {    // |this| properly refers to the person object
        this.age++;
    }, 1000);
}

// var p = new Person(25);

let p = new Promise((resolve, reject) => { 
    setTimeout(() => { 
        if (Math.random() > 0.5) { 
            resolve('Success!'); 
        } else { 
            reject('Error!'); 
        } 
    }, 1000); 
}); 
p
.then((data) => console.info(`good response: ${data}`))
.catch((data) => console.error(`bad respone: ${data}`));

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {       
        setTimeout(() => {            
            resolve(x);           
        }, 2000);    
    });
}

async function add1(x) {    
    let a = resolveAfter2Seconds(20);    
    let b = resolveAfter2Seconds(30);    
    return x + await a + await b;
}

add1(10).then(v => {    
    console.log(v);  // prints 60 after 2 seconds.
});


async function add2(x) {    
    let a = await resolveAfter2Seconds(20);    
    let b = await resolveAfter2Seconds(30);    
    return x + a + b;
}
add2(10).then(v => {    
    console.log(v);  // prints 60 after 4 seconds.
});

