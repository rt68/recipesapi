import React, { useState } from 'react';

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };

    const deleteItem = (indexToDelete) => {
        setItems(items.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div>
             <h2>Shopping List</h2>
            <input type="text" 
            value={newItem} 
            onChange={handleInputChange}
            placeholder="Ingredients to Buy"/>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteItem(index)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ShoppingList;