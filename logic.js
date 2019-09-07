const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateBirthYear(x) {
    if(isNaN(x)){
        return false;
    }
    return true;
}

readline.question('What is your birth year?',birthYear => {
    //check if input is a number
    if (!validateBirthYear(birthYear)){
        console.log ('Invalid input! Please input your birth year.')
    }

    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    function ageGroup(age){
        if(age >= 0 && age < 18){
            console.log('You are a minor.');
        } else if(age >= 18 && age <= 36){
            console.log('You are still a youth.'); 
        } else if(age > 36) {
            console.log('You are an elder.');
        }else{
            console.log('Invalid input! Please check the birth year.')
        };
    }
    ageGroup(age);

    readline.close();

    });

    module.exports = ageGroup;