const cart = {

    shoppingCart: document.getElementById('cart'),

    createCart(basket) {

        const productPlate = document.createElement('div');

        this.shoppingCart.appendChild(productPlate);

        if (basket.length === 0) {
            const warning = document.createElement('div')
            warning.innerHTML = '<i>Корзина пуста</i>';
            productPlate.appendChild(warning);
            warning.style.margin = '0 auto';
            warning.style.backgroundColor = 'lightGrey';
        } else {

            basket.forEach((item) => {

                const descriptionOfProduct = document.createElement('div');
                productPlate.appendChild(descriptionOfProduct);
                descriptionOfProduct.style.marginBottom = '5px'
                descriptionOfProduct.style.backgroundColor = 'lightGrey'
                descriptionOfProduct.style.padding = '10px'

                const nameOfProduct = document.createElement('h3');
                nameOfProduct.innerHTML = 'Название продукта ' + item.name;
                descriptionOfProduct.appendChild(nameOfProduct);

                const priceOfProduct = document.createElement('p');
                priceOfProduct.innerHTML = 'Цена продукта ' + item.priceOfProduct;
                descriptionOfProduct.appendChild(priceOfProduct);

                const countOfProduct = document.createElement('p');
                countOfProduct.innerHTML = 'Количество продуктов ' + item.countOfProduct;
                descriptionOfProduct.appendChild(countOfProduct);





            });
            countBasket(basket);
            const par = document.createElement('p');
            par.innerHTML = 'Количество продуктов ' + finalCount + '. Общая цена ' + finalPrice;
            this.shoppingCart.appendChild(par);

        }

    }
}


let arr = []

let basketGoods = [
    { name: 'Яблоко', priceOfProduct: 34, countOfProduct: 3 },
    { name: 'Банан', priceOfProduct: 44, countOfProduct: 2 }
]

let finalPrice = 0;
let finalCount = 0;
function countBasket(basket) {

    basket.forEach((item) => {
        finalPrice += item.priceOfProduct * item.countOfProduct;
        finalCount += item.countOfProduct;

    })


}

cart.createCart(basketGoods);