const userData = require("../ProductData/userData.json")
const productData = require("../ProductData/product.json")
const fs = require('fs');

const users = userData.data
const products = productData.data

const arrayData = []

for(var i=0;i<60;i++){
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    arrayData.push({
        user_id:randomUser.user_id,
        user_name:randomUser.user_name,
        product_id:randomProduct.product_id,
        product_name:randomProduct.product_name,
        order_amount:randomProduct.discounted_price
    })
}

fs.writeFile('ProductData/transactionData.json', JSON.stringify(arrayData), function (err) {
    if (err) throw err;
    console.log('Saved!');
})
