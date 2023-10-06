import React , {useState}from 'react';

import { Link, useNavigate } from 'react-router-dom';

import '../styling/rfpstyle.css';

const RPFForm = () => {
  const [createRPF, setCreateRPF] = useState(false);
  const navigate = useNavigate();

  

  
  const dummyData = [
    { indentId: 1, name: 'Item A', unit: 'pcs', quantity: 5 },
    { indentId: 2, name: 'Item B', unit: 'kg', quantity: 3 },
    { indentId: 3, name: 'Item B', unit: 'kg', quantity: 13 },
    { indentId: 4, name: 'Item B', unit: 'kg', quantity: 2 },
    { indentId: 5, name: 'Item B', unit: 'kg', quantity: 34 },
    { indentId: 6, name: 'Item B', unit: 'kg', quantity: 44 },
    // Add more dummy data as needed
  ];

  const handleCreateRPFChange = () => {
    setCreateRPF(!createRPF);

    // If 'Yes' is clicked, navigate to RPFEdit.js
    if (!createRPF) {
      navigate('/RFPEdit');
    }
  };

  


  return (
    <div className="main-container">
      <div className="translucent-form">
        <div className="form-title">Purposed Indent</div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Indent ID</th>
                <th>Name</th>
                <th>Measure of Unit</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index}>
                  <td>{item.indentId}</td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="create-rpf">
          <div className="form-title">Do you want to create RPF?</div>
          <div className="yes-no-buttons">
            <button className="yes-button"  onClick={handleCreateRPFChange}>Yes
            </button>
            <button className="no-button">No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RPFForm;
