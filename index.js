
function saturdayFun(){
    return 'This Saturday, I want to roller-skate!';
}
//expects when no arguments are passed to return a string
function saturdayFun(activity = roller-skate){
    return `This Saturday, I want to ${activity}!`;
}
//
console.log(saturdayFun()); 
function saturdayFun(activity){
    if(!activity){
        activity = "roller-skate";
    }
    return "This Saturday, I want to " + activity + "!";
    }
console.log(saturdayFun("bathe my dog"));
//console.log(saturdayFun("dance"));
/* the default activity (roller-skate) can be overridden by passing
an argument to the 'saturdayfun' function, it expects the function to return 
a string based on the overriden activity*/

function mondayWork(activity = "go to the office"){
    return`This Monday, I will ${activity}.`;
}
console.log (mondayWork());
console.log (mondayWork("work from home"));
/*function razzle(lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
  }
  razzle();
  razzle("kate", "her");
 const fn = function (){
    console.log("yet more dazzling");
  }*/
 
  (function (baseNumber) {
    return baseNumber + 3;
  })

  /*let wrapAdjective = function(sign = "*"){
    return function (adj = "special"){
        return `You are ${sign}${adj}${sign}!`;
    };
  }*/
  //has a two way with it 
 function wrapAdjective (sign = "*"){
    return function (adj = "special"){
        return `You are ${sign}${adj}${sign}!`;
    };
 }
  
  function outer(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }
  
  outer("Hello")("student", "JavaScript");

  