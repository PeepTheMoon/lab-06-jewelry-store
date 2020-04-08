export function makeReadablePrice(price) {
    const readablePrice = `$${Number(price).toFixed(2)}`;

    return readablePrice;
}

export function renderLineItem(cartItem, jewelry) {
    // returns the DOM element that matches the statc HTML example
    const tr = document.createElement('tr');

    const nameTh = document.createElement('th');
    nameTh.textContent = jewelry.name;
    //nameTh.classList.add('align-left');
    
    const priceTh = document.createElement('th');
    priceTh.textContent = makeReadablePrice(jewelry.price);

    const quantityTh = document.createElement('th');
    quantityTh.textContent = cartItem.quantity;

    const totalTh = document.createElement('th');
    const totalPrice = (jewelry.price * cartItem.quantity);
    totalTh.textContent = makeReadablePrice(totalPrice);
    //totalTh.classList.add('line-item-total');

    tr.appendChild(nameTh);
    tr.appendChild(priceTh);
    tr.appendChild(quantityTh);
    tr.appendChild(totalTh);

    return tr;
}