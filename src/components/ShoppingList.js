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
            <input type="text" value={newItem} onChange={handleInputChange} />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ShoppingList;