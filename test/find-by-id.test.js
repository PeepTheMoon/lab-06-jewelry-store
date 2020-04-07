// IMPORT MODULES under test here:
import findById from '../common/utils.js';
// import example from '../src/example.js';

const test = QUnit.test;

QUnit.module('returns an item with the matching .id property');

test('findById', assert => {
    //Arrange
    const arrayOfItems = [
        { id: 'nose-ring', quantity: 2 }, 
        {
            id: 'watch',
            quantity: 1
        } 
    ];
    // Set up your parameters and expectations
    const result = findById(arrayOfItems, 'nose-ring');
    //Act 
    // Call the function you're testing and set the result to a const
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.id, 'nose-ring');
});