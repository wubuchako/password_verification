//build facebook 
var database = [
  {
    username: "andrei",
    password: "123"
  },
  {
    username: "sally",
    password: "secret"
  },
  {
    username: "ingrid",
    password: "777"
  }

];

var newsfeed = [
  {
    username: "bobby",
    timeline: "I am so happy to learn code."
  },
  {
    username: "sally",
    timeline: "I am getting bored."
  },
  {
    username: "mitch",
    timeline: "It is so much fun to do many things."
  }
];


function isUserValid(username, password){
  for(var i=0; i < database.length; i++){
    if(database[i].username === username &&
      database[i].password === password){
        return true;
      } 
  }
    return false;
}


function signIn(username, password){
   
  if(isUserValid(username, password)){
    console.log(newsfeed);
    } else {
      alert("sorry, wrong username and password");
    }
};

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);