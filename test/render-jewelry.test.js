// IMPORT MODULES under test here:
import renderJewelry from '../products/render-jewelry.js';
// import example from '../src/example.js';

const test = QUnit.test;

QUnit.module('Render Jewelry Item');

test('renders a jewelry item', assert => {
    //Arrange
    const ring = {
        id: 'ring',
        name: 'Statement Ring',
        image: 'ring.jpeg',
        description: 'A simple gold statement ring featuring geometric shapes.',
        category: 'rings',
        price: 54.00,
    };
    // Set up your parameters and expectations
    const expected = '<li class="rings" title="A simple gold statement ring featuring geometric shapes."><h3>Statement Ring</h3><img src="../assets/ring.jpeg" alt="Statement Ring image"><p class="price">$54.00<button value="undefined">Add to cart</button></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderJewelry(ring);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
