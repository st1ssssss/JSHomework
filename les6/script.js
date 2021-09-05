'use strict';

const catalog = {
    cart: null,
    listOfProducts: [
        { idProduct: 1, name: 'Фен', price: 2300 },
        { idProduct: 12, name: 'Сушилка', price: 1000 },
        { idProduct: 13, name: 'Телефон', price: 1500 },
    ],
    catalogBlock: null,
    init(catalogName, cart) {
        this.catalogBlock = document.querySelector(`.${catalogName}`);
        this.cart = cart;
        this.createCatalog();
        this.addEventHandlers()

    },

    createCatalog() {

        this.listOfProducts.forEach(item => { this.catalogBlock.insertAdjacentHTML('beforeend', this.createCatalogDiv(item)) }
        )
    },


    createCatalogDiv(item) {
        return `<div class="product">
            <h2>Название товара: ${item.name}</h2>
            <p>Цена товара: ${item.price}</p>
            <button class="cartBtn" data-id="${item.idProduct}">Добавить в корзину</button>
        </div>`
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event))
    },

    addToBasket(event) {
        if (!event.target.classList.contains('cartBtn')) return;
        const productId = +event.target.dataset.id;
        const productToAdd = this.listOfProducts.find((item) => item.idProduct === productId);
        this.cart.addToCart(productToAdd);
    },
}
const cart = {
    cartGoods: [

    ],

    cartBlock: null,

    init(cartName) {
        this.cartBlock = document.querySelector(`.${cartName}`);
        this.createCart();
    },

    addToCart(productToAdd) {
        if (productToAdd) {
            const findProduct = this.cartGoods.find(item => productToAdd.idProduct === item.idProduct)
            if (findProduct) {
                findProduct.count++;
            } else {
                this.cartGoods.push({ ...productToAdd, count: 1 })
            }
            this.createCart();
        }
    },

    createEmpty() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.innerHTML = '<p>Корзина пуста</p>'
    },

    createCart() {
        if (this.cartGoods.length < 1) return this.createEmpty()
        else {
            this.cartBlock.innerHTML = ''
            this.cartGoods.forEach(item => {
                this.cartBlock.insertAdjacentHTML('beforeend', this.createCartItem(item));

            })

        }
    },


    createCartItem(item) {
        return `<div class="cartItem">
        <h2>Название товара: ${item.name}</h2>
        <p>Цена товара: ${item.price}</p>
        <p>Кол-во товара: ${item.count}</p>
        </div>`
    }
}
catalog.init('catalog', cart)
cart.init('cart')