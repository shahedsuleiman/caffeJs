let form = document.querySelector("form");
let userName = document.getElementById("user");
let age = document.getElementById("age");
let drinkType = document.getElementById("hot");
let drinkType1 = document.getElementById("cold");
let drinkName = document.getElementById("drinkName");
let para = document.querySelector("p");

function myFunction(){

    para.getElementById("demo").innerHTML = userName.value;
    para.getElementById("demo").innerHTML = age.value;
    para.getElementById("demo").innerHTML = drinkType.value;
    para.getElementById("demo").innerHTML = drinkType1.value;
    para.getElementById("demo").innerHTML = drinkName.value;
}
form.addEventListener("submit", (e) => {
    
  if (userName.value === "" || age.value === "" || drinkType==="" || drinkType2==="" || drinkName==="") {
     e.preventDefault();
     para.textContent = "You need to fill all the information!";
   }
 });