import { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import './cart.css';

// Define the props interface for the Cart component
interface CartProps {
  onClose: () => void;
}

// Define the product interface
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
    // Initial product data with their details
    const initialProducts: Product[] = [
        {
            id: 1,
            name: 'Jazzmaster',
            price: 1050,
            quantity: 1,
            image: '/img/featured1.png'
        },
        {
            id: 2,
            name: 'Rose Gold',
            price: 850,
            quantity: 1,
            image: '/img/featured3.png'
        },
        {
            id: 3,
            name: 'Longines Rose',
            price: 980,
            quantity: 1,
            image: '/img/new1.png'
        }
    ];

    // State to manage the cart products
    const [products, setProducts] = useState<Product[]>(initialProducts);
    
    // State for cart totals
    const [totals, setTotals] = useState({
        totalItems: 3,
        totalPrice: 2880
    });

    // Calculate totals whenever products change
    useEffect(() => {
        const newTotals = products.reduce(
            (acc, product) => {
                acc.totalItems += product.quantity;
                acc.totalPrice += product.price * product.quantity;
                return acc;
            },
            { totalItems: 0, totalPrice: 0 }
        );
        
        setTotals(newTotals);
    }, [products]);

    // Handle quantity changes
    const handleQuantityChange = (id: number, change: number): void => {
        setProducts(prevProducts => 
            prevProducts.map(product => {
                if (product.id === id) {
                    // Ensure quantity doesn't go below 0
                    const newQuantity = Math.max(0, product.quantity + change);
                    return { ...product, quantity: newQuantity };
                }
                return product;
            })
        );
    };

    // Handle item removal
    const handleRemoveItem = (id: number): void => {
        setProducts(prevProducts => 
            prevProducts.map(product => {
                if (product.id === id) {
                    return { ...product, quantity: 0 };
                }
                return product;
            })
        );
    };

    return (
        <div className="cart show-cart" id="cart">
            <i className='bx bx-x cart__close' id="cart-close" onClick={onClose}></i>

            <h2 className="cart__title-center">My Cart</h2>

            <div className="cart__container">
                {products.map((product) => (
                    <article key={product.id} className="cart__card">
                        <div className="cart__box">
                            <img src={product.image} alt={product.name} className="cart__img"/>
                        </div>

                        <div className="cart__details">
                            <h3 className="cart__title">{product.name}</h3>
                            <span className="cart__price">${product.price}</span>

                            <div className="cart__amount">
                                <div className="cart__amount-content">
                                    <span 
                                        className="cart__amount-box"
                                        onClick={() => handleQuantityChange(product.id, -1)}
                                    >
                                        <i className='bx bx-minus'></i>
                                    </span>

                                    <span className="cart__amount-number">{product.quantity}</span>

                                    <span 
                                        className="cart__amount-box"
                                        onClick={() => handleQuantityChange(product.id, 1)}
                                    >
                                        <i className='bx bx-plus'></i>
                                    </span>
                                </div>

                                <i 
                                    className='bx bx-trash-alt cart__amount-trash'
                                    onClick={() => handleRemoveItem(product.id)}
                                ></i>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="cart__prices">
                <span className="cart__prices-item">{totals.totalItems} items</span>
                <span className="cart__prices-total">${totals.totalPrice}</span>
            </div>
        </div>
    );
};

export default Cart;