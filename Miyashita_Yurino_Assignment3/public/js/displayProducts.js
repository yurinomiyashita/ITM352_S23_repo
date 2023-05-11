/* 
Yurino Miyashita 
This file for loading products data files and display the items in store.html without hard coding each display pages 
but allow users to choose genre that they are looking for.
*/
// Get the product category information from the query parameters of the url after loading the DOM
window.addEventListener('DOMContentLoaded', function() {
    if (params.has('key')) {
      var key = params.get('key');
      // Pass the obtained key to the displayProducts function
      displayProducts(key)
    } 
  })
  
  // Display store information on the screen
  // Differentiate information by product key
  function displayProducts(key) {
    // Initialize the html to insert on the screen
    let html = ''
    var wrap = document.getElementById("wrap");
  
    for(var i = 0; i < 6; i++) {
      html += `
    <div class="content">
    <div class="card-list">
   
          <div class="Image"><div class="overlay"> <img src="${products[key][i].image}" class="img-responsive" style="width:50%" alt="Image"></div></div>
          <div class="card-listTitle">${products[key][i].name}</div>
          <div class="card-listText">$${products[key][i].price}
          <br>
              <label id="quantity${i}_label"> Enter Quantity Desired: </label>
              <div class="input">
              <input id="quantity${i}" name="quantities[${i}]" type="text" placeholder = "Quantity Available: ${products[key][i].quantity_available}" name = "quantity" onkeyup="checkQuantityTextbox(this, '${key}');">
              </div>
          </div>
          <br>
          <div class="icons">
          <input class="cart-btn" type="submit" name="submit${i}" value="add to cart">
      </div>
      <br>
      <br>

      </div>
     
  </div>
  </section>
  `;
  }
    html += `<input type="hidden" name="products_key" value="${key}">`;
    wrap.innerHTML = html;
  }