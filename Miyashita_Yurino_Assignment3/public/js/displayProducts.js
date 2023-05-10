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
              <div class="card-list">  <center>  
                <div style="max-width:1200px;margin-top:100px"> </div>
                <div class="Image"><div class="overlay"> <img src="${products[key][i].image}" class="img-responsive" style="width:50%" alt="Image"></div></div>
                <div class="card-listTitle">${products[key][i].name}</div>
                <div class="card-listText">$${products[key][i].price}
                  
              <div class="input">
              <input id="quantity${i}" class="quantity" type = "text"  placeholder = "Quantity Available: ${products[key][i].quantity_available}" name = "quantity" onkeyup="checkQuantityTextbox(this);" >
              </div>             
              </div>

              </div>
            </div>
            </center>
  `;
  }
    html += `<input type="hidden" name="products_key" value="${key}">`;
    wrap.innerHTML = html;
  }