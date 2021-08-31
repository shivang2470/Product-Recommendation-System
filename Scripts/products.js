var fs = require('fs');
// const data = require('../ProductData/userData.json');
const products = ["Alisha Solid Women's Cycling Shorts", 'FabHomeDecor Fabric Double Sofa Bed',
    'AW Bellies', "Alisha Solid Women's Cycling Shorts", 'Sicons All Purpose Arnica Dog Shampoo',
    'Eternal Gandhi Super Series Crystal Paper Weights  with Silver Finish', "Alisha Solid Women's Cycling Shorts",
    'FabHomeDecor Fabric Double Sofa Bed', 'dilli bazaaar Bellies, Corporate Casuals, Casuals',
    "Alisha Solid Women's Cycling Shorts", 'Ladela Bellies', "Carrel Printed Women's",
    'Sicons All Purpose Tea Tree Dog Shampoo', "Alisha Solid Women's Cycling Shorts",
    'Freelance Vacuum Bottles 350 ml Bottle', "Alisha Solid Women's Cycling Shorts",
    'FabHomeDecor Fabric Double Sofa Bed', 'Style Foot Bellies', "Carrel Printed Women's",
    'FabHomeDecor Fabric Double Sofa Bed', 'Sicons Conditioning Conditoner Dog Shampoo',
    "Alisha Solid Women's Cycling Shorts", "dongli Printed Boy's Round Neck T-Shirt",
    'SWAGGA Women Clogs', 'Kennel Rubber Dumbell With Bell - Small Rubber Rubber Toy For Dog',
    'Glus Wedding Lingerie Set', 'Veelys Shiny White Quad Roller Skates - Size 4.5 UK',
    'Bulaky vanity case Jewellery Vanity Case', "FDT Women's Leggings", "Madcaps C38GR30 Men's Cargos"]

const categories = ['Clothing', 'Furniture', 'Footwear', 'Clothing', 'Pet Supplies', 'Clothing', 'Furniture ', 'Footwear', ' Clothing', " Women's Clothing", 'Footwear', 'Clothing ', 'Pet Supplies', 'Clothing', 'Pens & Stationery', 'Clothing', 'Furniture ', 'Footwear ', 'Clothing', 'Furniture', 'Pet Supplies', 'Clothing', 'Clothing ', 'Footwear', 'Pet Supplies', 'Clothing', 'Sports & Fitness', 'Beauty and Personal Care', 'Clothing', 'Clothing']
const category_ids = [1, 2, 3, 1, 4, 1, 2, 3, 1, 5, 3, 1, 1, 1, 6, 1, 2, 3, 1, 2, 1, 1, 1, 3, 1, 1, 7, 8, 1, 1]
const brands = ['Alisha', 'FabHomeDecor', 'AW', 'Alisha', 'Sicons', 'Eternal', 'GandhiAlisha', 'FabHomeDecor', 'dilli bazaaar', 'Alisha', 'Ladela', 'Carrel', 'Sicons', 'Alisha', 'Freelance', 'Alisha', 'FabHomeDecor', 'Style Foot', 'Carrel', 'FabHomeDecor', 'Sicons', 'Alisha', 'dongli', 'SWAGGA', 'Kennel','','','','','']
const retail_price = [999, 32157, 999, 699, 220, 430, 1199, 32157, 699, 1199, 1724, 2299, 260, 999, 699, 999, 32157, 899, 2499, 32157, 110, 499, 2400, 1500, 190, 1299, 3199, 499, 699, 2199]
const discounted_price = [379, 22646, 499, 267, 210, 430, 479, 22646, 349, 479, 950, 910, 199, 379, 699, 379, 22646, 449, 999, 22646, 100, 399, 1039, 1500, 190, 699, 2499, 390, 309, 1699]
const arrayData = []

for (var i = 1; i < 31; i++) {
    arrayData.push(
        {
            product_id: i,
            product_name: products[i - 1],
            category_id: category_ids[i-1],
            category_name: categories[i-1],
            brand: brands[i-1],
            retail_price: retail_price[i-1],
            discounted_price:discounted_price[i-1]
        }
    )
}

// console.log(arrayData)
fs.readFile('ProductData/product.json', function (err, data) {
    // console.log(JSON.parse(data))
    data = JSON.parse(data)
    // if(data["data"]){
    //     data["data"].push(arrayData[0])
    //     fs.writeFile('ProductData/userData.json', JSON.stringify(data), function (err) {
    //         if (err) throw err;
    //         console.log('Saved!');
    //       });
    // }
    data["data"] = arrayData
    fs.writeFile('ProductData/product.json', JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
})
