/*Create a function that takes an array of numbers, called monthly_sales (a list of monthly sales amounts),
 and a tax rate (tax_rate) as inputs. The function must return an array called tax_owing, which consists of
  one entry for every entry in monthly_sales indicating the tax owing for that entry.
*/
function calculateTax(monthly_sales, tax_rate){    //set parameter with monthly sales, and tax rate 
    let tax_owing = [];                             //initialize tax_owning as empty 
    for (let i =0; i<monthly_sales.length; i++){   //for loop to take elemet from array 
        let sale = monthly_sales[i];      //define sale and monthly_sales [i] means monthly_sales[0], monthly_sales[1] and monthly_sales[2]
        let tax = sale*tax_rate;    //calculte tax by variable sale times tax rate
        tax_owing.push(tax);      //tax is pushed to tax_owning and now tax_owning is defined as tax
    }
    return tax_owing;   
}

let monthly_sales = [12000, 200000, 400000];      //monthly_sales array 
let tax_rate = 0.15;        //15% of tax rate 

let tax_owing = calculateTax(monthly_sales, tax_rate);     //use function created above 

console.log(tax_owing); //output [1800, 30000,60000]
