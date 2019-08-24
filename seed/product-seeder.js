var Product= require('../models/product');


const mongoose = require('mongoose');




mongoose.connect("mongodb://localhost:27017/nodeshop" , { useNewUrlParser: true }).then(
  (res) => {
   console.log("Connected to Database Successfully.")
  }
).catch(() => {
  console.log("Conntection to database failed.");
});



var products = [
    new Product({
        imagePath: 'https://media.bloomsbury.com/rep/bj/9781408866191.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://prodimage.images-bn.com/pimages/9781781100523_p0_v3_s1200x630.jpg',
        title: 'World of Warcraft Video Game',
        description: 'Also awesome? But of course it was better in vanilla ...',
        price: 20
    }),
    new Product({
        imagePath: 'https://kbimages1-a.akamaihd.net/db1b24c5-f64c-4fd3-bdef-5717817dc636/1200/1200/False/harry-potter-and-the-order-of-the-phoenix-5.jpg',
        title: 'Call of Duty Video Game',
        description: 'Meh ... nah, it\'s okay I guess',
        price: 40
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg',
        title: 'Minecraft Video Game',
        description: 'Now that is super awesome!',
        price: 15
    }),
    new Product({
        imagePath: 'https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855676.jpg',
        title: 'Dark Souls 3 Video Game',
        description: 'I died!',
        price: 50
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}