

/*//You should have an input element with an id of "number"
You should have a button element with an id of "convert-btn"
You should have a div, span or p element with an id of output
When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"
When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX" */

const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumber=[{ value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }];


const convertRoman =(input)=>{
let romanList=[];
output.innerText="";

for (const { value, symbol } of romanNumber) {
    while (input >= value) {
      romanList += symbol;
      input -= value;
    }
  }
  return romanList;
}

const getInput=()=>{
    const inputInt=Math.floor(numberInput.value);

    if(!numberInput.value || isNaN(inputInt)){
        output.innerText= "Please enter a valid number";
        return;
    } else if (inputInt<=0){
        output.innerText= "Please enter a number greater than or equal to 1";
        return;
    } else if (inputInt>3999){
        output.innerText= "Please enter a number less than or equal to 3999";
        return;
    }

    output.innerText= convertRoman(inputInt);

};

convertButton.addEventListener("click", getInput)

