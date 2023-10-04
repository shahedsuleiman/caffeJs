let nameDrink,gender,drinkType,age,userName;
let submit = document.getElementById("submit");
submit.onclick = function myFunction(e){
  e.preventDefault();
    userName = document.getElementById("user").value;
    age = document.getElementById("age").value;


    nameDrink= document.querySelector("#drinkname").value;
    let para = document.createElement("p");
    document.getElementById("dom").appendChild(para);
    let list = document.createElement("ul");
    let li1= document.createElement("li");
    list.appendChild(li1);
    let li2= document.createElement("li");
    list.appendChild(li2);
    let li3= document.createElement("li");
    list.appendChild(li3);
    gender = document.getElementById("gender");
    let check = gender.options[gender.selectedIndex].text;
    drinkType = document.querySelectorAll("#drinkType");
    let type;    
    if(drinkType[0].checked == true ){
      type = "hot";
    }
    else {
      type = "cold";
   
    }
    para.innerHTML=userName;
    li1.innerHTML=`Age : ${age}`;
    li2.innerHTML=`Gender : ${check}`;
    li3.innerHTML= type+" "+nameDrink;
   
    document.getElementById("dom").appendChild(list);


};


// form.addEventListener("submit", (e) => {
    
//   if (userName.value === "" || age.value === "" || drinkType==="" || drinkType2==="" || drinkName==="") {
//      e.preventDefault();
//      para.textContent = "You need to fill all the information!";
//    }
//  });