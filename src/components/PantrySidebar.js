import React, { useState, useEffect } from 'react';
import ShoppingList from './ShoppingList';


function PantrySidebar() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('pantryItems')) ||[
    { name: 'Rice', type: 'Pantry' },
    { name: 'Eggs', type: 'Fridge' }
      ]);

      useEffect(() => {
        // Save items to localStorage when they change
        localStorage.setItem('pantryItems', JSON.stringify(items));
      }, [items]);
      
  const [newItem, setNewItem] = useState('');
  const [newItemType, setNewItemType] = useState('Pantry'); 

  const addItem = () => {
    setItems([...items, { name: newItem, type: newItemType }]);
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
            {item.name} ({item.type})
            <button onClick={() => deleteItem(index)}>-</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Ingredients in Pantry/Fridge"
      />
      <select value={newItemType} onChange={(e) => setNewItemType(e.target.value)}>
        <option value="Pantry">Pantry</option>
        <option value="Fridge">Fridge</option>
      </select>
      <button onClick={addItem}>Add</button>
      

      <ShoppingList />
    </div>
  );
}

export default PantrySidebar;

