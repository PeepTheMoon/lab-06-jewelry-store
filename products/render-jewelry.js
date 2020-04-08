import findById from '../common/utils.js';

function renderJewelry(jewelry) {
    const li = document.createElement('li');
    li.className = jewelry.category;
    li.title = jewelry.description;

    const h3 = document.createElement('h3');
    h3.textContent = jewelry.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + jewelry.image;
    img.alt = jewelry.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + jewelry.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.value = jewelry.id;

    button.addEventListener('click', () => {
        let cartItem = localStorage.getItem('CART');
        let cart;
        if (cartItem) {
            cart = JSON.parse(cartItem);
        } else {
            cart = [];
        }
        let lineItem = findById(cart, jewelry.id);

        if (!lineItem) {
            lineItem = {
                id: jewelry.id,
                quantity: 1
            };
            cart.push(lineItem);
        } else {
            lineItem.quantity++;
        }
    
        cartItem = JSON.stringify(cart);
        localStorage.setItem('CART', cartItem);

        alert('1 ' + jewelry.name + ' was added to your cart');
    
    });

    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderJewelry;