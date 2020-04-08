//Go get functions and arrays from imports
// import cart from '../Data/cart.js';
import jewelry from '../Data/product-data.js';
import findById, { calcOrderTotal, toUSD } from '../common/utils.js';
import { renderLineItem } from '../shopping-cart/render-line-item.js';

// Locate on the DOM where the line items will go
const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
// Bring in order total button from shopping-cart.html
const orderButton = document.getElementById('order-button');

// get shopping cart items from local storage 
const json = localStorage.getItem('CART');
let cart;
// if there's something in the cart, make the string data into and object.  Otherwise, get an empty cart
if (json) {
    cart = JSON.parse(json);
} else {
    cart = [];
}

// Loop through cart items
for (let i = 0; i < cart.length; i++) {

    // Create a variable based on current array index (cart)
    const cartItem = cart[i];

    // Use findById() to find the corresponding product for this line item from the products-data list.
    const jewelryItem = findById(jewelry, cartItem.id);

    // Pass these to the DOM generation function and store in a variable
    const dom = renderLineItem(cartItem, jewelryItem);

    // Append to the <tbody>
    tbody.appendChild(dom);
}

// Calculate the complete order total
const orderTotal = calcOrderTotal(cart, jewelry);
//Update the order total cell's text content
orderTotalCell.textContent = toUSD(orderTotal);

// disable order button if there's no items in the cart.
if (cart.length === 0) {
    orderButton.disable = true;
    // otheriwise, add an even listener that allows the order button to be clicked
} else {
    orderButton.addEventListener('click', () => {
        // then remove cart items from local storage
        localStorage.removeItem('CART');
        //alert user to an order confirmation
        alert('Confirmed!  Here is your order information: ' + JSON.stringify(cart, true, 2));
        // take user back to home page
        window.location = '../';
    });
}