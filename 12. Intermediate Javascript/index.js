// Love Calculator

// prompt("Enter your Name!");
// prompt("Enter your Crush Name!!");
// var result = Math.random() * 100;
// result = Math.floor(result) + 1;
// alert("Your Love Probability is "+result + "%");




// function bmiCalculator (weight, height) {
//     var bmi = weight/(height * height);
//     if(bmi < 18.5){
//         return "Your BMI is "+bmi+ ", so you are underweight.";
//     }
//     else if(bmi >= 18.5 && bmi <= 24.9){
//         return "Your BMI is "+bmi+", so you have a normal weight.";
//     }
//     else if(bmi > 24.9){
//         return "Your BMI is "+bmi+", so you are overweight.";
//     }
// }
// bmiCalculator(65, 1.8);

// function isLeap(year) {
    
// /**************Don't change the code above****************/    
    
//     //Write your code here.
//     if(year % 4 === 0){
//         return "Leap Year.";
//     }else if(year % 4 === 0 && year % 400 === 0 ){
//         return "Leap year.";
//     }else if(year % 400 === 0){
//         return "Leap year."
//     }
//     else{
//         return "Not leap year."
//     }

// /**************Don't change the code below****************/    

// }
// isLeap(2100);


 
// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// var guestkey = prompt("Enter the name of the Guest!!");
// if(guestList.includes(guestkey)){
//     alert("Your guest is in the List.");
// }else{
//     alert("Your guest is not in the List.");
// }


// var output = [];
// count = 1;
// function fizzbuzz(){
//     if( count % 3 === 0 && count % 5 === 0){
//         output.push("fizzbuzz");
//     }else if(count % 3 === 0){
//         output.push("fizz");
//     }else if(count % 5 === 0){
//         output.push("buzz");
//     }else{
//         output.push(count);
//     }
//     count ++;
//     console.log(output);
// }
// fizzbuzz();


// function whosPaying(names) {
//     var noOfPeople = names.length;
//     var randomPersonPosition = Math.floor(Math.random() * noOfPeople);
//     var randomperson = names[randomPersonPosition];
//     return randomperson + " is going to buy lunch today!"

// }


// var noOfBootles = 99;
// while (noOfBootles >= 0){
//    var bottleWord = "bottles";
//     if (noOfBootles === 1){
//         bottleWord = "bottle";
//     }else if (noOfBootles === 0){
//         bottleWord = "no more bottles";
//         console.log(bottleWord+" of beer on the wall, " + bottleWord+ "  of beer.");
//         noOfBootles --;
//         console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
//     }
//     console.log(noOfBootles +" "+ bottleWord+" of beer on the wall, " + noOfBootles+ " bottles of beer.");
//     noOfBootles --;
//     console.log("Take one down and pass it around, " + noOfBootles+" "+ bottleWord+" of beer on the wall.");
    

// }

function fibonacciGenerator (n) {
    var output = [];
    if(n == 1){
        output = [0];
        return output;
    }else if (n ==2){
        output = [0,1];
        return output;
    }
    else{
        output = [0,1];
        for (var i = 2; i < n; i++){
        output.push(output[output.length - 2] + output[output.length - 1]);
        }
    return output;
    }
}
output = fibonacciGenerator(3);
console.log(output);

