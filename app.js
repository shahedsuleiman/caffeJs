let name = prompt("what is your name").toLowerCase();

var title="";

while(gender != "male" || gender != "female")
{
    var gender = prompt("Enter your gender please ").toLowerCase();
    if (gender == "female"){
        title= "Ms";
        alert("Hello " +title +". "+ `${name}`);
        break;
    
    }else if (gender == "male"){
        title= "Mr";
        alert("Hello " +title +". "+ `${name}`);
        break;
    }
    
}


let drinks= prompt("Do you want a hot or cold drink?").toLowerCase();
let drinkName = prompt("What do you wanna drink?").toLowerCase();

if (gender== "female" || gender=="male" && title=="Ms" || title == "Mr " && drinks == "hot" || drinks =="cold"){
    alert("Welcome "+title +". " +name+ " your "+drinks+" "+drinkName+" drink is being prepared!");
    console.log ("Order of " +title +". "+name + " is " + drinkName);
}
else {
    alert("Please fill your information correctly");
}

let user = [`${name}`,`${gender}`,`${drinks}`,`${drinkName}`];
for (let i = 0; i<user.length; i++)
{
    console.log(user[i]+" ");
}
