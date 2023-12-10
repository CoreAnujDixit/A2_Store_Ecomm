import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../Comps/CartItem';

const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [TotalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="container mx-auto my-8">
            {cart.length > 0 ? (
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/3 p-4">
                        {cart.map((item, index) => (
                            <CartItem key={item.id} item={item} itemIndex={index} />
                        ))}
                    </div>
                    <div className="w-full md:w-1/3 p-4 mt-5 flex flex-col">
                        <div className="bg-gray-100 p-5 rounded-md mb-5">
                            <p className="text-lg font-semibold">Your Cart</p>
                            <h1 className="text-xl font-bold mb-2">Summary</h1>
                            <p>
                                <span>Total Items: {cart.length}</span>
                            </p>
                        </div>
                        <div className="bg-gray-100 p-5 rounded-md">
                            <p className="text-lg font-semibold">Total Amount</p>
                            <p className="text-xl font-bold">${TotalAmount}</p>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-md mt-4">
                                CheckOut Now!!!
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Cart is Empty</h2>
                    <Link to="/">
                        <button className="bg-green-300 py-2 px-4 rounded-lg">Shop Now</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
