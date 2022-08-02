controlador = {

    register: (req,res) => res.render('users/register'),

    login: (req,res) => res.render('users/login'),

    cart: (req,res) => res.render('products/carritoCompras'),
    
};

module.exports = controlador;