//set the dtate
var day = 31; 
var month = "December";
var year = 2001; 
var monthKey = {
    January:0,
    February:3,
    March:2,
    April:5,
    May:0,
    June:3,
    July:5,
    August:1,
    September:4,
    October:6,
    November:2,
    December:4,
};
//step 1 
step1 = year;

//step 2
step2= parseInt(year/4)+step1;

//step3 
step3 = step2 - (parseInt(step1/100));

step4= parseInt(year/400)+step3;

step5= step4 + day; 

step6 = monthKey[month]+step5;

step7 = step6%7; 

var dayofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
console.log(step7);

console.log(day, 'st', 'of', month,year, 'is', dayofWeek[step7]); 