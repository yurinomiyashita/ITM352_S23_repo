
function validateQuantity() {
  // Get the value of the quantity input
  var quantity = parseInt(document.getElementById("quantity").value);
  let errors = {};
  let available_quantity = false;
for (let i in quanity){
    if(isNoNegInt(quantity[i])== false){
         document.getElementById("purcahse_message").innerHTML='Please submit valid data for for ${products[i].name}!';
    } if (quantity[i] > 0) { //if quantity entered is greater than, meaning no errors
        available_quantity = true;
      }else if (quantity[i]>products[i].available_quantity){
        document.getElementById("purcahse_message").innerHTML = `We currenly don't have ${quantity[i]}${products[i].name}. please check our website later!`
    }else{
        document.getElementById("purcahse_message").innerHTML = 'purcahse';
    }
  
};
 
  // Check if the quantity input is a valid number greater than zero
  if (isNoNegInt(quantity) || quantity <= 0) {
    // If the quantity input is not a valid number or is less than or equal to zero, replace the submit button with an error message
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("error-message").innerHTML = "Please submit a valid quantity";
    document.getElementById("error-message").style.display = "block";
  } else if (quantity > 10) {
    // If the quantity input is greater than 10, replace the submit button with an error message
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("error-message").innerHTML = "You can only purchase up to 10 items";
    document.getElementById("error-message").style.display = "block";
  } else if (quantity > 5) {
    // If the quantity input is greater than 5 but less than or equal to 10, replace the submit button with an error message
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("error-message").innerHTML = "We currently don't have stocks of the item you selected";
    document.getElementById("error-message").style.display = "block";
  } else {
    // If the quantity input is valid, show the submit button
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("error-message").style.display = "none";
  }
}

function validate(){
    let quantities = request.body['quantity']; //assigning value to quantities as quantity entred in store.html textbox
    let errors = {};
    let available_quantity = false;
    for (i in quantities) {
      console.log(quantities[i])    
      if (notAPosInt(quantities[i]) == false) {
        errors['quantity' + i] = `Please submit valid data for ${products[i].name}!` //if quantity enetred is invalid number 
      }
      if (!(quantities[i] === '') && Number(quantities[i]) === 0) {
        errors['quantity' + i] = `If the ${products[i].name} quantity is 0, please enter blank!` //if the cell is filled with 0 
      }
      if (quantities[i] > 0) { //if quantity entered is greater than, meaning no errors
        available_quantity = true;
      }
      if (quantities[i] > products[i].quantity_available) { //if quantity entered is greater than quantity available 
        errors['quantity' + i] = `We currenly don't have ${(quantities[i])}${products[i].name}. please check our website later!`
      }
    }
    };