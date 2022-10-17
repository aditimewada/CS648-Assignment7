//STEP 1
function halfnumber (number){
       half_num = number / 2;
       return half_num;
 }

number = parseFloat(window.prompt("STEP 1. Half of a number. \nEnter a number:"));
var result1 = halfnumber(number);
window.console.log("Half of "+number+" is " + result1 );

//STEP 2
function squareNumber (number){
    return number * number;
}

number = parseFloat(window.prompt("STEP 2. Squaring a number. \nEnter a number:"));
var result2 = squareNumber(number);
window.console.log("The result of squaring the number "+number+" is " + result2);

//STEP 3
function percentOf (firstnum, secondnum){
    return (firstnum * 100) / secondnum;
}

firstNumber = parseFloat(window.prompt("STEP 3. Percent the first number represents of the second number. \nEnter a first number:"));
secondNumber = parseFloat(window.prompt("Enter a second number:"));
var result3 = percentOf(firstNumber,secondNumber);
window.console.log(firstNumber+" is " + result3 + "% of "+secondNumber);

//STEP 4
function findModulus (firstnum, secondnum) {
     return (firstnum % secondnum);
}

firstModNumber = parseFloat(window.prompt("STEP 4. The modulus of the two numbers. \nEnter a first number:"));
secondModNumber = parseFloat(window.prompt("Enter a second number:"));
var result4 = findModulus(firstModNumber,secondModNumber);
window.console.log(result4 + " is the modulus of "+firstModNumber+" and " +secondModNumber);

//STEP 5

function sum (){
    var numbers = window.prompt("Enter the numbers that you want to put: ");
    var num_arr = numbers.split(',');
    var sum = 0
    for( i = 0; i<num_arr.length; i++) {
           num_converted_to_Integer =  parseInt(num_arr[i],10);
           sum = sum + num_converted_to_Integer;
    }
    window.console.log(sum);
}

sum()