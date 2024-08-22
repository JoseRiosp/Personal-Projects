/*You should have an input element with an id of "text-input"
You should have a button element with an id of "check-btn"
You should have a div, span or p element with an id of "result"
When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text "Please input a value"
When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome"
When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text "eye is a palindrome"
When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text "_eye is a palindrome"
When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text "race car is a palindrome"
When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text "not a palindrome is not a palindrome"
When the #text-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text "A man, a plan, a canal. Panama is a palindrome"
When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text "never odd or even is a palindrome"
When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text "nope is not a palindrome"
When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text "almostomla is not a palindrome"
When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text "My age is 0, 0 si ega ym. is a palindrome"
When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text "1 eye for of 1 eye. is not a palindrome"
When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text "0_0 (: /-\ :) 0-0 is a palindrome"
When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text "five|\_/|four is not a palindrome" */

const palCal= document.getElementById("calculator");
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanTextInput(str) {
str=str.trim();
  const regex = /[.\\,_+()/-\s]/g;
  return str.replace(regex,'');
}

function invalidInput(str) {
  if (str == ""){
    alert("Please input a value");
    return true;
  } else {
    return false;
  }
}

function getPalindrome(e) {
 e.preventDefault();
    const wordInp = textInput.value;
    console.log(wordInp); //Para depurar
    const wordInput = wordInp.toLowerCase();
    console.log(wordInput); //Para depurar
    const textPoli = cleanTextInput(wordInput);
    console.log(textPoli); //Para depurar

    if (invalidInput(textPoli)) {
        return; }
    calculatePalindrome(textPoli);
}

function calculatePalindrome(word) {
    console.log(word.length);
    let finalCicle = Math.floor(word.length/2);
    console.log(finalCicle);
    let finalStr= word.length-1;
    let i =0;
    //for (i=0; i<finalCicle; i++){
    
    //let verifStr= word[i]==word[finalStr-i];
    //console.log(verifStr);
    while(i<finalCicle){
        if(!(word[i]==word[finalStr-i])){
        return result.innerHTML=`${textInput.value} is not a palindrome`;
        
            } i++; }
    return result.innerHTML=`${textInput.value} is a palindrome`;
            
        }
    


/*
function llamar(e){
    e.preventDefault();
    const wordInput = textInput.value;
    const textPoli = [wordInput];
    console.log(textPoli.length);
}*/

palCal.addEventListener("submit", getPalindrome);