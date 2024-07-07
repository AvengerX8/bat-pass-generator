export default function generatePassword(){
    let password   : string = ''
    let characters : string = '1234567890qwertyuiopasdfghjklzxcvbnm=~!@#$%^&+QWERTYUIOPASDFGHJKLZXCVBNM<>?';
    let passwordLength = 10;

    for(let index = 0; index < passwordLength; index++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
    }

    return password;
}