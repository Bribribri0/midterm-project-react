import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <h1>Inventory Management Dashboard</h1>
        <div className="buttons-container">
          <button onClick={() => navigate('/add-item')}>Add Item</button>
          <button onClick={() => navigate('/update-item')}>Update Item</button>
          <button onClick={() => navigate('/remove-item')}>Remove Item</button>
          <button onClick={() => navigate('/display-items-category')}>Display Items by Category</button>
          <button onClick={() => navigate('/display-all-items')}>Display All Items</button>
          <button onClick={() => navigate('/search-item')}>Search Item</button>
          <button onClick={() => navigate('/sort-items')}>Sort Items</button>
          <button onClick={() => navigate('/low-stock-items')}>Display Low Stock Items</button>
        </div>
      </div>

      <div className="wrapper">
        <div className="both-message">
          <button className="contact-me-btn" onClick={toggleModal}>
            Contact Me
          </button>
          <p className="creator-message">Created by Brian Ronnie Hernandez</p>
          <p className="creator-message2">From BSCS C3A</p>
        </div>
      </div>

      {}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Me</h2>
            <div className="contact-info-wrapper">
            <p>Email: <a href="https://mail.google.com/">brianjavier1919@gmail.com</a></p>
            <p>Phone: <a href="tel:09564768712">0956 476 8712</a></p>
            <p>Facebook: <a href="https://www.facebook.com/briiiiii19/" target="_blank" rel="noopener noreferrer">Brian Ronnie Hernandez</a></p>
            <p>Instagram: <a href="https://www.instagram.com/bri.hrnndz/" target="_blank" rel="noopener noreferrer">bri.hrnndz</a></p>
            <p>Twitter: <a href="https://x.com/Briiiiiiiiii19" target="_blank" rel="noopener noreferrer">Briiiiiiiiii19</a></p>
            </div>
            <button className="close-modal-btn" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
