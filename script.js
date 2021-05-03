var login= document.body.querySelector(".login");
var user= document.body.querySelector(".username");
var pass= document.body.querySelector(".password");
var error= document.body.querySelector(".error");
var seegrades= document.body.querySelector(".seegrades");
var addgrades= document.body.querySelector(".addgrades");
var names= document.body.querySelector(".nam");
var grades= document.body.querySelector(".grad");
var message= document.body.querySelector(".mes");
var list= [];

document.body.querySelector(".viewgrades").addEventListener("click",function(){
  addedgrades();
});
document.body.querySelector(".logon").addEventListener("click",function(){
  if(user.value == "cool" && pass.value == "password"){
    addedgrades();
  }else if(user.value == "cool"){
    document.body.querySelector(".error").innerHTML = "Wrong Password";
  }else if(pass.value == "password"){
    document.body.querySelector(".error").innerHTML = "Wrong Username";
  }else{
     document.body.querySelector(".error").innerHTML = "Wrong Username or Password";
  }
});
document.body.querySelector(".add").addEventListener("click",function(){
  addsgrades();
});
document.body.querySelector(".sub").addEventListener("click",function(letters){
  if(names.value.match(letters)
     &&Number(grades.value<=100)
     &&Number(grades.value>=0)){
    list.push({
      name:names.value,
      grade:grades.value
    });
    renderList();
    addedgrades();
  }else{
    message.innerHTML= "Invalid";
  }
});
seegrades.style.display = "none";
addgrades.style.display = "none";
function addedgrades(){
  login.style.display = "none";
  seegrades.style.display = "block";
  addgrades.style.display = "none";
}
function addsgrades(){
  seegrades.style.display = "none";
  addgrades.style.display = "block";
}
function renderList(){
  document.body.querySelector(".list").innerHTML ="";
  for(var i=0; i<list.length; i++){
    var ele = document.createElement("h4");
    ele.innerHTML="Name: "+list[i].name + "  Grade: "+list[i].grade;
    document.body.querySelector(".list").appendChild(ele);
  }
}