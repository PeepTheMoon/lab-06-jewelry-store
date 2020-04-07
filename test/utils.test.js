// IMPORT MODULES under test here:
import findById from '../common/utils.js';
// import example from '../src/example.js';

const test = QUnit.test;

QUnit.module('utils');

test('findById', assert => {
    //Arrange
    const arrayOfItems = [
        { id: 'nose-ring', quantity: 2 }, 
    ];
    // Set up your parameters and expectations
    const result = findById(arrayOfItems, 'nose-ring');
    //Act 
    // Call the function you're testing and set the result to a const
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.id, 'nose-ring');
});

test('calcLineItem', assert => {
    //Arrange
    const quantity = '2';
    const price = '3';
    // Set up your parameters and expectations
    const result = quantity * price;
    //Act 
    // Call the function you're testing and set the result to a const
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, '6');
});