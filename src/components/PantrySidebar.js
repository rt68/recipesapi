import React, { useState, useEffect } from 'react';
import ShoppingList from './ShoppingList';


function PantrySidebar() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('pantryItems')) ||[
    { name: 'Rice' },
    { name: 'Eggs' }
  ]);

  useEffect(() => {
    // Save items to localStorage when they change
    localStorage.setItem('pantryItems', JSON.stringify(items));
  }, [items]);

  const [newItem, setNewItem] = useState('');
  
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { name: newItem }]);
    setNewItem('');
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, itemIndex) => index !== itemIndex);
    setItems(newItems);
  };

  return (
    <div className="sidebar">
      <h2>Pantry/Fridge Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => deleteItem(index)}>-</button>
          </li>
        ))}
      </ul>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Ingredients in Pantry/Fridge"
        />
        <button type="submit">Add</button>
      </form>

      <ShoppingList />
    </div>
  );
}

export default PantrySidebar;

