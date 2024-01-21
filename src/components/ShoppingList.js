import React, { useState, useEffect } from 'react';

function ShoppingList() {
    const [shoppingItems, setShoppingItems] = useState(JSON.parse(localStorage.getItem('shoppingItems')) || []);
    const [newShoppingItem, setNewShoppingItem] = useState('');

    useEffect(() => {
    localStorage.setItem('shoppingItems', JSON.stringify(shoppingItems));
  }, [shoppingItems]);
    
  const addShoppingItem = (e) => {
    e.preventDefault();
    setShoppingItems([...shoppingItems, { name: newShoppingItem }]);
    setNewShoppingItem('');
  };

  const deleteShoppingItem = (index) => {
    const newShoppingItems = shoppingItems.filter((_, itemIndex) => index !== itemIndex);
    setShoppingItems(newShoppingItems);
  };  

    
    return (
        <div className="shopping-list">
        <h2>Shopping List</h2>
        <ul>
          {shoppingItems.map((item, index) => (
            <li key={index}>
              {item.name}
              <button onClick={() => deleteShoppingItem(index)}>-</button>
            </li>
          ))}
        </ul>
        <form onSubmit={addShoppingItem}>
          <input
            type="text"
            value={newShoppingItem}
            onChange={(e) => setNewShoppingItem(e.target.value)}
            placeholder="New Shopping Item"
          />
          <button type="submit">Add to Shopping List</button>
        </form>
      </div>
    );
}
export default ShoppingList;