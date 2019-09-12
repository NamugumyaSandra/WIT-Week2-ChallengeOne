function ageGroup(x){
    if(x >= 0 && x < 18){
        return('You are a minor.');
    } else if(x >= 18 && x <= 36){
        return('You are still a youth.'); 
    } else if(x > 36) {
        return('You are an elder.');
    }
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is your birth year?',birthYear => {
    // check if input is a number
    if (isNaN(birthYear)){
        console.log ('Invalid input! Please input your birth year.')
    }

    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    ageGroup(age);
    readline.close();

    });

    module.exports = readline;