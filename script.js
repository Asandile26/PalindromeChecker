
function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanStr);

    const reversedStr = cleanStr.split("").reverse().join("");
    console.log(reversedStr);

    return cleanStr === reversedStr;
}

function palindromeChecker(){
     const inputText = document.getElementById("inputText");
     const results = document.getElementById("results");

     if(isPalindrome(inputText.value)){
        results.textContent = `${inputText.value} is a Palindrome`;
     }else{
        results.textContent = `${inputText.value} is a Palindrome`;
     }
     results.classList.add('fadeIn');
     inputText.value = "";
}


document.getElementById("checkBtn").addEventListener("click",palindromeChecker);