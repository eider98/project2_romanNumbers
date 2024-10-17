'use strict';
const output = document.getElementById("output");
const numberInput = document.getElementById("number");
const button = document.getElementById("convert-btn");



button.addEventListener('click',()=>{
    const num = numberInput.value
    if (!String(num)){
        output.innerText = 'Please enter a valid number';
    }
    else if (num <=0) {
        output.innerText = 'Please enter a number greater than or equal to 1';
    }
    else if (num>3999){
        output.innerText = "Please enter a number less than or equal to 3999";
    }
    else{
        output.innerText = romanConverter(num);
    }
} )


function romanConverter(num){
    console.log('bai')
    const romanObj ={'M':1000,'CM':900,'D':500,'CD':400,'C':100,'XC':90,'L':50,'XL':40,'X':10,'IX':9,'V':5,'IV':4,'I':1};
    let roman ='';
    for (const key in romanObj){
        while (num - romanObj[key] >= 0){
            num-= romanObj[key];
            roman += key;
        }
        
    }
    return roman
}