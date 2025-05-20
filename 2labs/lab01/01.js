// npm i lodash -> inside the terminal with lab01
//npm init -y -> package.json file

let today = new Date();
holidays.forEach(holiday => {
    const difference = holiday.date - today;
    const inDays = Math.ceil(difference/(1000*60*60*24))
    console.log(`${holiday.name} is in ${inDays} days`)    
});