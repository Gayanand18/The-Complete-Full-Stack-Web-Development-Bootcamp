// var msg = prompt("Enter your Messages!!");
// var msgLength = msg.length;
// alert("You have written " + (msgLength) + " characters, and you have" +(15 - (msgLength))+ "characters left.");
// var slicedMessage = msg.slice(0,15);
// alert("Your Messages are: " + slicedMessage);



// var name = prompt("What is your name?");
// var part1 = name.slice(0,1);
// var capLetter = part1.toUpperCase();
// var part2 = name.slice(1,name.length);
// var lowCase = part2.toLowerCase();
// var newname = (capLetter + lowCase);
// alert("My name is " + newname);

// var dogAge = prompt("Enter your dog age!!");
// var humanAge = ((dogAge -2) *4 +21);
// alert("Your dog human age is " + humanAge);

// var x = 3;
// var y = x++;
//  y += 1;
// console.log(y);

// function lifeInWeeks(age) {
    
// /************Don't change the code above************/    
    
//     //Write your code here.
//     var weeks = (90*52) - (age * 52);
//     var months = (90*12) - (age * 12);
//     var days = (90*365) - (age * 365);
//     console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.");
    
   
// /*************Don't change the code below**********/
// }
// lifeInWeeks(56);

function bmiCalculator(weight, height){
    bmiValue = weight/(height * height);
    return bmiValue;
}


// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

 var bmi = bmiCalculator(65, 1.8);