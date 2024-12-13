
const form = document.querySelector("form")

form.addEventListener("submit" , function(e){
    e.preventDefault()

    genPassword()
})




function genPassword(){
    
    const includeUppercase = document.querySelector("#Uppercase").checked
    const includeLowercase = document.querySelector("#Lowercase").checked
    const includeNumbers = document.querySelector("#Numbers").checked
    const includeSymbols = document.querySelector("#Symbols").checked

    const length = document.querySelector("#length").value
    const output = document.querySelector("#output")


    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChar = ""

    if(includeUppercase) {allChar += upperLetters};
    if(includeLowercase) {allChar += lowerLetters};
    if(includeNumbers) {allChar += numbers};
    if(includeSymbols) {allChar += symbols};

    if(allChar === ""){
        alert("please choose at least one type")
        return false
    }



    let password = ""

    for(let i = 0 ; i < length ; i++){
        const random = Math.floor(Math.random() * allChar.length)
        password += allChar[random]
    }

    output.value = password

}


function copyPassword(){
    const output = document.querySelector("#output")
    output.select()
    document.execCommand("copy")
}