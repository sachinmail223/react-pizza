import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../CartContext';


function Navigation() {
    const {cart} = useContext(CartContext)
    const cartstyle = {
        background: '#F59e0d',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
    }
    return (
        <>
            <nav className="container mx-auto flex item-center justify-between py-4">
                
                    <Link to="/">
                        <img style={{height: 25}} src="/img/logo.png" alt="" />
                    </Link>
                    <ul className="flex item-center ">
                        <li><Link to="/">Home</Link></li>
                        <li className="ml-4"><Link to="/products">Products</Link></li>
                        <li className="ml-4"><Link to="/cart">
                            <div style={cartstyle}>
                                <span className="text-white">{ cart.totalItems ? cart.totalItems : 0 }</span>
                                <img className="ml-2" style={{height: 25}} src="/img/cart.png" alt="" />
                            </div>
                            </Link></li>
                    </ul>
                
            </nav>
        </>
    )
}

export default Navigation
