//function findById takes in an array and an id
export default function findById(array, id) {
    let foundArrayItem;
    // loops through the cart array
    for (let i = 0; i < array.length; i++) {
        const arrayItem = array[i];
        // returns first item that has an .id property that matches the passed in id.
        if (arrayItem.id === id) {
            foundArrayItem = arrayItem;
        }
    }
    return foundArrayItem;
    // returns null if no answer is found
}

export function calcLineItem(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
    // Return total, rounded.
}

export function roundCurrency(amount) {
    //rounds result two decimal places
    return Math.round(amount * 100) / 100;
}
// Convert number to USD
export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

// Calculate totl of cart data
export function calcOrderTotal(cart, jewelry) {
    //Initialize state
    let orderTotal = 0;
    // Loop through the cart items
    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const jewelryItem = findById(jewelry, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, jewelryItem.price);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}
