var Product= require('../models/product');


const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/nodeshop', { useNewUrlParser: true });
//mongoose.connect('mongodb://root:root:27017/nodeshop', { useNewUrlParser: true });
mongoose.connect('mongodb://127.0.0.1:27017/nodeshop', { useNewUrlParser: true }, function(err) { console.log("mongoDB connected", err); })
var products = [
new Product({
imagePath:'https://media.bloomsbury.com/rep/bj/9781408866191.jpg',
title: 'Harry Potter Book',
description: 'Harry Potter Book !!',
price: 40
}),

new Product({
    imagePath:'https://images-na.ssl-images-amazon.com/images/I/5120AgwUVtL.jpg',
    title: 'Becoming Supernatural',
    description: 'Becoming supernatural Book !!',
    price: 40
    }),

    new Product({
        imagePath:'https://images-na.ssl-images-amazon.com/images/I/71nUZ2pBL0L.jpg',
        title: 'Soeur ',
        description: 'Soeur Book !!',
        price: 40
        }),

        new Product({
            imagePath:'https://prodimage.images-bn.com/pimages/9781974704583_p0_v1_s550x406.jpg',
            title: 'Dragon ball super ',
            description: 'Dragon ball super Book !!',
            price: 40
            }),
];
var done =0;
for(var i =0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done=== products.length) {
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}
