const input = document.getElementById("input")
const checkBtn = document.getElementById("checkBtn")

checkBtn.addEventListener("click", () => {
    let text = input.value

    checkPalindrome(text)
    
})

function checkPalindrome(text){
    let newText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(text, newText) 
    let len = newText.length;
    let halfLen = Math.floor(len / 2)
    let description = document.getElementById("description")
    let i

    for(i = 0; i < halfLen; i++){
        if (newText[i] !== newText[len - 1 - i]){
            description.textContent = "Nah!, this is not a Palindrome"
            return;
        }else{
            description.textContent = "Yay!!! Its a Palindrome"
        }
    }

   
    
}

