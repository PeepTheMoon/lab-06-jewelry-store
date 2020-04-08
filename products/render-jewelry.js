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
    button.value = jewelry.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderJewelry;