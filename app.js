let name = prompt("what is your name");
let gender = prompt("what is your gender?(male/female)");
var title="";

if (gender == "female"){
    title= "Ms";
    alert("Hello " +title +". "+ name);

}else if (gender == "male"){
    title= "Mr";
    alert("Hello " +title +". "+ name);
}
else {
    alert("Hello " + name);
}

let drinks= prompt("Do you want a hot or cold drink?");
let drinkName = prompt("What do you wanna drink?");

if (gender== "female" || gender=="male" && title=="Ms" || title == "Mr " && drinks == "hot" || drinks =="cold"){
    alert("Welcome "+title +". " +name+ " your "+drinks+" "+drinkName+" drink is being prepared!");
    console.log ("Order of " +title +". "+name + " is " + drinkName);
}
else {
    alert("Please fill your information correctly");
}
