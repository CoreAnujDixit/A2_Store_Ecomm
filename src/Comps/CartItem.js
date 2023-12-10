import React from 'react';
import { toast } from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(item.id));
        toast.error('Item Removed');
    }

    return (
        <div className="border-b border-gray-300 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 object-cover rounded"
                />
                <div>
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                    <p className="text-sm text-gray-600">{item.description}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <p className="text-lg">${item.price}</p>
                <div className="cursor-pointer text-red-500" onClick={removeFromCart}>
                    <MdDelete size={20} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
