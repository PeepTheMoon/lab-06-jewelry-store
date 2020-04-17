import renderJewelry from './render-jewelry.js';
import jewelry from '../Data/product-data.js';

const ul = document.getElementById('jewelry');

for (let i = 0; i < jewelry.length; i++) {
    const jewelryItem = jewelry[i];
    const el = renderJewelry(jewelryItem);
    ul.appendChild(el);
}