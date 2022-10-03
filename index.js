const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let inputEl01 = document.getElementById("password01")
let inputEl02 = document.getElementById("password02")
let buttonClick = document.getElementById("btn")
let passwordLength = 15
let randomNumber = 0
let password = ""
let finalPassword = ""

//ability to set password length
//add copy-on-click
//toggle symbol and number on/off

function getRandomNumber(){
    randomNumber = Math.floor(Math.random()*(characters.length)) 
    return randomNumber
}

function generatePassword(){          
       for (let i=0; i<passwordLength; i++){
            password += characters[getRandomNumber()]
        }
        finalPassword = password
        password = ""
        return finalPassword
}

// function resetPassword(){
//     inputEl01.value =""
//     inputEl02.value =""
// }
function savePassword01(){
    inputEl01.value = generatePassword()
    
    
}

function savePassword02(){
    inputEl02.value = generatePassword()
    
}
function savePassword(){
    savePassword01();
    savePassword02();

    
} 









