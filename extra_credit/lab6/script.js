// Your job in this part of the assignment is to validate those entries. Within investment, the number should be numeric. Within rate, the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be numeric and between 1 and 30.

// ********************************************

// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    if(isNaN(investment) ){
        flag = true;
        alert(" Within investment, the entry should be numeric");
    }
    else{
        flag = false;
    }
} while (flag == true);

do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if(isNaN(rate) || (rate < 0 || rate > 10)){
        flag2 = true;
        alert(" the rate should be numeric and between 0 and a realistic rate like 6%");
    } else{
        flag2 = false;
    }
} while (flag2 == true);

do {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    if(isNaN(years) || years <0 || years > 30 ){
        flag3 = true;
        alert(" Within years, the entry should be numeric and between 1 to 30");
    }
    else{
        flag3 = false;
    }
} while (flag3 == true);


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);