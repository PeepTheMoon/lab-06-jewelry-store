// IMPORT MODULES under test here:
import { renderLineItem } from '../shopping-cart/render-line-item.js';
// import example from '../src/example.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item from cart', assert => {
    //Arrange
    // ring details from shopping cart
    const cartItem = { id: 'ring', quantity: 1 };
    // ring details from products page
    const ring = {
        id: 'ring',
        name: 'Statement Ring',
        image: 'ring.jpeg',
        description: 'A simple gold statement ring featuring geometric shapes.',
        category: 'rings',
        price: 54.00,
    };
    // Set up your parameters and expectations
    const expected = '<tr><th>Statement Ring</th><th>$54.00</th><th>1</th><th>$54.00</th></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderLineItem(cartItem, ring);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});