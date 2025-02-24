import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SortItems = ({ items }) => {
  const [sortBy, setSortBy] = useState('quantity'); 
  const [order, setOrder] = useState('ascending'); 
  const [sortedItems, setSortedItems] = useState([]);
  const navigate = useNavigate(); 

  const handleSort = (e) => {
    e.preventDefault();
    const sorted = [...items].sort((a, b) => {
      if (order === 'ascending') {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
    setSortedItems(sorted);
  };

  return (
    <div className="sort-items-container">
      <h2>Sort Items</h2>
      <form onSubmit={handleSort} className="form-group">
        <div className="form-group">
          <label>
            Sort By:
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="quantity">Quantity</option>
              <option value="price">Price</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Order:
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </label>
        </div>

        <div className="button-container">
          <button type="submit" className="dashbutton">Sort</button>
          <button className="dashbutton" onClick={() => navigate('/')}>Back to Dashboard</button>
        </div>
      </form>

      {sortedItems.length > 0 && (
        <table className="item-details-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SortItems;
