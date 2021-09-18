import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';


function Product(props) {
    const {cart, setCart} = useContext(CartContext);
    const {product} = props;

const addToCart =(event, product) => {
    event.preventDefault();
    let _cart = {...cart}; // { items: {}}
    if (!_cart.items) {
        _cart.items = {}
    }
    if (_cart.items[product._id]) {
        _cart.items[product._id] += 1;
    } else {
        _cart.items[product._id] = 1;
    }

    if(!_cart.totalItems) {
        _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
}



    return (
        
            <Link to={`/products/${product._id}`}>
            <div>
                    <img style={{height: 280}} src={product.image} alt="" />
                    <div className="text-center"><h2 className="text-lg font-bold py-2 mx-3">{product.name}</h2></div>
                    
                    <div className="flex justify-between items-center mt-4 mx-3">
                        <span>₹ {product.price}</span>
                        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold" onClick={(e)=>{addToCart(e, product)}}>ADD</button>
                    </div>
                </div>
                </Link>
        
    )
}

export default Product
