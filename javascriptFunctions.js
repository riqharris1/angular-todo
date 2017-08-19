// define a function
function myFunction() {
   console.log("function called")
}
myFunction(); //execute a function
var func = function() { // define an anonymous function
    console.log("anonymous function");
}
func();   //execute function
func;         // reference to an anonymous function
function myFunc(param1, param2, param3) { // introduce parameters with the names param1, ...
    var newValue = param1 + param2;
    console.log(newValue + " " + param3);
}
//
myFunc(12,13,30);   //execute function with given values for the parameters
function myFunc(param1, param2, param3) {
//
    var newValue = param1 + param2;
    return newValue + param3;
    console.log("this statement will not be executed");
}
//
var returnValue = myFunc(12,13,30);   // execute function with parameters; store return value
console.log(returnValue);             // display the returned value which was stored in variable
//Callbacks
wotDayIsIt(function(day){
    if (day === 0 || day === 6)
        console.log("its the weekend, yipee!");
    else
        console.log("bummer, its a work day");
});
function wotDayIsIt(callback){
  //callback is a function passed on execution of this function
  var day = (new Date().getDay()); //day of week 0-6
  callback(day);
}