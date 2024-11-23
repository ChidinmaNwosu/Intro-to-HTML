//1. Get elements from the DOM
const form =document.getElementById('sum-form');
const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const resultDiv = document.getElementById('result');

// 2. Write the function to calculate the sum
function calculateSum (num1, num2){
    return num1 + num2;
}

// 3. Add event listener to the form
form.addEventListener('submit', function(event){
    event.preventDefault();

    //get values from the input fields
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);

    //call the calculateSum function
    const result = calculateSum(num1, num2);

    //display result in an alert or on the page
    alert("The sum is: " + result);

    //display the result
    resultDiv.textContent = `The sum of ${num1} and ${num2} is: ${result}`;
})