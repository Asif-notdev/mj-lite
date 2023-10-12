import React, { useState,useEffect } from 'react';
import '../styling/rfpstyle.css';
import FileInput from './Document';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from React Bootstrap
import { useNavigate} from 'react-router-dom';

const BidSubmit = () => {

  const navigate = useNavigate();

  const [editable, setEditable] = useState(false);
  const [dummyData, setDummyData] = useState([]);
  const [userName, setUserName] = useState('');
  const dummyDataApiEndpoint = 'http://localhost:3040/dummyData';
  const userNameApiEndpoint = 'http://localhost:3050/userName'; // Replace with your actual API endpoint

  useEffect(() => {
    // Fetch dummy data
    fetch(dummyDataApiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched dummy data:', data);
        setDummyData(data);
      })
      .catch(error => console.error('Error fetching dummy data:', error));

    // Fetch user name
    fetch(userNameApiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched user name:', data);
        // Check if the necessary properties exist before accessing them
        const userNameValue = data && data[0] && data[0].name;

        console.log('userNameValue:', userNameValue); // Log the userNameValue
        setUserName(userNameValue || '');
      })
      .catch(error => {
        console.error('Error fetching user name:', error);
        // Log the specific error message
        console.error('Error message:', error.message);
      });
  }, []);

  // const[]

  const [vendors, setVendors] = useState(['Vendor 1', 'Vendor 2', 'Vendor 3']);
  const [selectedVendors, setSelectedVendors] = useState([]);
  
  const [showSaveAsDraftModal, setShowSaveAsDraftModal] = useState(false);
  const [showFinalSubmitModal, setShowFinalSubmitModal] = useState(false);

 
  const [remarks, setRemarks] = useState('');
  const [bidSubmissionDate, setBidSubmissionDate] = useState('');
  const [bidOpenDate, setBidOpenDate] = useState('');

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleFinalSubmit = () => {
    setShowFinalSubmitModal(true);
  };

  const handleFinalSubmitConfirm = () => {
    // Additional logic for final submission if needed
    navigate('/RFPList'); // Redirect to RFPList page
    setShowFinalSubmitModal(false);
  };

  const handleSaveAsDraft = () => {
    setShowSaveAsDraftModal(true);
  };
  const handleSaveAsDraftConfirm = () => {
    // Additional logic for saving as a draft if needed
    navigate('/RFPList'); // Redirect to RFPList page
    setShowSaveAsDraftModal(false);
  };
  const handleAddVendor = () => {
    setVendors([...vendors, `Vendor ${vendors.length + 1}`]);
  };
  return (
    <div className="main-container">
      <div className="translucent-form">
        <div className="form-title">
            <span style={{float: 'left'}}>Bid Submission</span>
            <span style={{float: 'right'}}>Split/NotSplit</span>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>RFP ID</th>
                <th>RFP Name</th>
                <th>RFP Description</th>
                <th>.......</th>
              </tr>
            </thead>
            
            <tbody>
                <tr>
                  <td>845845</td>
                  <td>RFP.name</td>
                  <td>RFP.Desc</td>
                  <td>......</td>
                </tr>
            </tbody>
          </table>
        </div>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Item Unit</th>
                <th>Item quantity</th>
                <th>Estimate Price</th>
                <th>Your Price</th>

              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index}>
                  <td>{item.indentId}</td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity}</td>
                  <td>12</td>
                  <td><input type='number'></input></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* {editable && (
          <div className="vendor-section mt-4">
            <label className="me-2">Select Vendor:</label>
            <select
              className="form-select"
              multiple
              value={selectedVendors}
              onChange={(e) => setSelectedVendors(Array.from(e.target.selectedOptions, option => option.value))}
            >
              {vendors.map((vendor, index) => (
                <option key={index} value={vendor}>
                  {vendor}
                </option>
              ))}
            </select>
            <button type="button" onClick={handleAddVendor}>
              Add Vendor
            </button>
          </div>
        )} */}

        <div className='form-title my-2'> <h3 className='font-weight-bold'>Attach Documents</h3></div>

        <FileInput/>
        {/* <FileUploadComponent/> */}


        <div className="remarks mt-4">
          <div className="form-title">Comments</div>
          <textarea
            className="form-control"
            rows="4"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>

        <div className="create-rpf mt-5">
          
          <button
              class
              
              Name="btn btn-secondary "
              onClick={handleSaveAsDraft}
              
            >
              Save as Draft
            </button>
            <button
              className="btn btn-success mx-5"
              onClick={handleFinalSubmit}
             
            >
              Final Submit
            </button>
           
          

          {/* Save as Draft Modal */}
          <Modal show={showSaveAsDraftModal} onHide={() => setShowSaveAsDraftModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Save as Draft</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your draft is saved.</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleSaveAsDraftConfirm}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Final Submit Modal */}
          <Modal show={showFinalSubmitModal} onHide={() => setShowFinalSubmitModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Final Submit</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to submit?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowFinalSubmitModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleFinalSubmitConfirm}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default BidSubmit;
