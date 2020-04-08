//Go get functions and arrays from imports
import cart from '../Data/cart.js';
import jewelry from '../Data/product-data.js';
import findById, { calcOrderTotal, toUSD } from '../common/utils.js';
import { renderLineItem } from '../shopping-cart/render-line-item.js';

// Locate on the DOM where the line items will go
const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

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