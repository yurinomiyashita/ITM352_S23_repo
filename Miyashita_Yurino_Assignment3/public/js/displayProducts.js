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
      <section class="products" id="products">
  <h1 class="heading"> <span></span></h1>
  <div class="box-container">
      
      <div class="box" >
          <span class="disccount"></span>
          <div class="image">
              <img src="${products[key][i].image}" alt="">
              <div class="icons">
                  <a href="#" class="fas fa-heart"></a> 
                  <input class="cart-btn" type="submit" name="submit${i}" value="add to cart">
              </div>
          </div>
          <div class="content">
              <h3>${products[key][i].name}</h3>
              <h4>${products[key][i].author}</h4>
              <div class="price">$${products[key][i].price}</div>
              <label id="quantity${i}_label"> Enter Quantity Desired: </label>
              <div class="input">
              <input id="quantity${i}" name="quantities[${i}]" type="text" placeholder = "Quantity Available: ${products[key][i].quantity_available}" name = "quantity" onkeyup="checkQuantityTextbox(this, '${key}');"></div>
          </div>
      </div>
  </div>
  </section>
  `;
  }
    html += `<input type="hidden" name="products_key" value="${key}">`;
    wrap.innerHTML = html;
  }