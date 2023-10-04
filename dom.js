var Name= prompt("enter you name");
var gender= prompt("enter you gender");
var age = prompt("enter you Age");
var drink = prompt("enter you Drink");


var para = document.createElement("p");
para.textContent=Name;

var list = document.createElement("ul");
var li1= document.createElement("li");
var li2= document.createElement("li");
var li3= document.createElement("li");
list.appendChild(li1);
li1.textContent="Gender : "+gender;
list.appendChild(li2);
li2.textContent="Age : "+age;
list.appendChild(li3);
li3.textContent="Gender : "+drink;
document.getElementById("dom").appendChild(para);
document.getElementById("dom").appendChild(list);

