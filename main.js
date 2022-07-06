
var birthYear = document.getElementById("birthYear");
var ageElement = document.getElementById("age")
var typeElement = document.getElementById("type")
var asteriskElement = document.getElementById("asterisk")


function clcAge(){
    asteriskElement.innerHTML = ""
    var date = new Date;
    var age = date.getFullYear() - birthYear.value;
    ageElement.innerHTML = 'Your age is <span>'+age+'</span>'
    if(age>=18&& age<=30){
        typeElement.innerHTML = "You are Youth"
    }
    else if(age<18){

        typeElement.innerHTML = "You are kid"
    }
    else if(age>30 ){
        typeElement.innerHTML = "You are adult"
    }
    for(var i = 0 ; i < age ; i++){
        asteriskElement.innerHTML += "*"
    }

}

