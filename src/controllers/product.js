//Get All Product
exports.getProduct = (req, res, next) => {
    
    res.json({
        message: "Success get Product",
        data: {
            id: 1,
            name: "Sayuran Basah",
            price: 25000
        }
    })
    next();
}


//Add Product
exports.addProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    res.json({
        message: "Create Product Success !",
        data: {
            id: 1,
            name: name,
            price: price
        }
    })
    next();
}

exports.updateProduct = (req, res, next) => {
    res.json({
        message: "Success",
        data: {
            id: 1,
            name: "Sayuran Basah",
            price: 25000
        }
    })
    next();
}

exports.deleteProduct = (req, res, next) => {
    res.json({
        message: "Success",
        data: {
            id: 1,
            name: "Sayuran Basah",
            price: 25000
        }
    })
    next();
}