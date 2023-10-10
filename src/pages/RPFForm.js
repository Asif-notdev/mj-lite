import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPersonFill, BsBox, BsLayers, BsQuestion,BsCurrencyRupee } from 'react-icons/bs'; // Import Bootstrap icons
import '../styling/rfpstyle.css';

const RPFForm = () => {
  const [createRPF, setCreateRPF] = useState(false);
  const [dummyData, setDummyData] = useState([]);
  const dummyDataApiEndpoint = 'http://localhost:3040/dummyData';
  const navigate = useNavigate();

  useEffect(() => {
    fetch(dummyDataApiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched dummy data:', data);
        setDummyData(data);
      })
      .catch(error => console.error('Error fetching dummy data:', error));
  }, []);

  

  const handleCreateRPFChange = () => {
    setCreateRPF(!createRPF);

    // If 'Yes' is clicked, navigate to RPFEdit.js
    if (!createRPF) {
      navigate('/RFPEdit', { state: { dummyData } });
    }
  };

  return (
    <div className="main-container">
      <div className="translucent-form">
      <div className="form-title"><BsLayers className="icon" /> Proposed Intent</div>

        <div className="table-container">
          <table >
            <thead>
              <tr>
              <th><BsBox className="icon" /> Intent ID</th>
                <th><BsFillPersonFill className="icon" /> Name</th>
                <th><BsQuestion className="icon" /> Measure of Unit</th>
                <th><BsLayers className="icon" /> Quantity</th>
                <th><BsCurrencyRupee className="icon" /> Estimated Price</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index} style={{ background: index % 2 === 0 ? '#f0f0f0' : 'white' }}>
                  <td>{item.indentId}</td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="create-rpf">
          <div className="form-title">Do you want to create RFP?</div>
          <div className="yes-no-buttons">
            <button className="yes-button" onClick={handleCreateRPFChange}>
              Yes, Let's Go!
            </button>
            <button className="no-button">No, Maybe Later</button>
          </div>
        </div>
        </div>
      </div>
  
  );
};

export default RPFForm;
