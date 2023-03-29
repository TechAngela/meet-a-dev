// document.getElementById('demo').style.fontSize='20px';
// document.getElementById("demo").style.color= 'green';
// document.getElementById("demo").style.paddingTop='50px';
// document.getElementById("demo").style.backgroundColor='pink';
// document.getElementById("demo").style.width='100%';
// document.getElementById("demo").style.height='70%';


// // create a new html tag
// console.log (3+2);
// // console.log (Angela);
// console.log("Angela");
// console.log("me+you");
// let sum = 20+40;
// let a =23;
// let b=41;
// let c = a+ b;
//  c=a+c
// let d = sum-2+b;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// const link =document.createElement("a");
// link.innerHTML="Google";
// link.href ="www.google.com";
// let anchor = document.getElementsByClassName("anchor");
// console.log(typeof anchor);
// anchor[0].innerHTML= link;


// Create element:
const main = document.createElement("div");
main.id ="main";

const test = document.createElement("h3");
test.id = "test";
test.innerHTML= "hello world";

const para= document.createElement("p");
para.innerHTML="today we are learning practical javascript";

const hash = document.createElement("p");
hash.id ="hash";
hash.innerHTML= "#makeprogress";

const span = document.createElement("span");
span.innerHTML= "some text";

const link = document.createElement("a");
link.id ="link";
link.innerHTML ="about page";

const image = document.createElement("img");
image.id ="bd";
image.src ="./scripts/bg.jpg";
image.alt="test";

const anchor = document.createElement("div");
anchor.id="anchor";

const head = document.createElement("h1");
head.innerHTML ="javascript is powerful";

const anchor1 = document.createElement("div");
anchor1.id="anchor1";

main.appendChild(test);
main.appendChild(para);
main.appendChild(hash);
main.appendChild(span);
main.appendChild(link);
const body = document.body;
body.appendChild(main);
body.appendChild(image);
body.appendChild(anchor);
body.appendChild(head);
body.appendChild(anchor1);

let bday = new Date();
const tests = document.getElementById("tests");
tests.innerHTML= bday;

let birthdate = new Date ("1997-08-24");
tests.innerHTML = birthdate;

let day = birthdate.getDay();
tests.innerHTML = day;

let month = birthdate.getMonth();
tests.innerHTML = month;

let year = birthdate.getFullYear();
tests.innerHTML = year;

let website = window.location.href;
const address = document.getElementById("address");
address.innerHTML = website;

let protocol = window.location.protocol;
const addres = document.getElementById("addres");
addres.innerHTML = protocol;

let hostname = window.location.hostname;
const addre = document.getElementById("addre");
addre.innerHTML = hostname;

let port = window.location.port;
const addr = document.getElementById("addr");
addr.innerHTML = port;

let pathname = window.location.pathname;
const add = document.getElementById("add");
add.innerHTML = pathname;

let history = window.history.length;
const back = document.getElementById("back");
back.innerHTML = history;

window.location.href= "https://www.linkedin.com";

window.location.replace= "https://www.google.com";







