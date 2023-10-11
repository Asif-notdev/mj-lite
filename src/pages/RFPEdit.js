// RFPEdit.js

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/rfpstyle.css';
import { BsFillPersonFill, BsBox, BsLayers, BsQuestion, BsTrash, BsCurrencyRupee } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from React Bootstrap
import { useNavigate, useLocation } from 'react-router-dom';

const RFPEdit = () => {
  const location = useLocation();
  const userName = location.state?.userName || ''; // Use optional chaining to avoid errors

  const [showSaveAsDraftModal, setShowSaveAsDraftModal] = useState(false);
  const [showFinalSubmitModal, setShowFinalSubmitModal] = useState(false);

  useEffect(() => {
    console.log('userName in RFPEdit:', userName);
  }, [userName]);

  const navigate = useNavigate();
  const [editable, setEditable] = useState(false);
  const [indents, setIndents] = useState(location.state?.dummyData || []);

  const [allVendors, setAllVendors] = useState(['Vendor 1', 'Vendor 2', 'Vendor 3']);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [removedVendors, setRemovedVendors] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);


  const [documents, setDocuments] = useState([
    { id: 1, name: 'Aadhar Card', selected: false },
    { id: 2, name: 'Pan Card', selected: false },
    { id: 3, name: 'Turn Over of the company', selected: false },
    { id: 4, name: 'GST Invoice', selected: false },
  ]);

  const [rfpDivision, setrfpDivision] = useState(true);
  const [remarks, setRemarks] = useState('');
  const [bidSubmissionDate, setBidSubmissionDate] = useState('');
  const [bidOpenDate, setBidOpenDate] = useState('');

  useEffect(() => {
    // Fetch vendors from API and setAllVendors
    // Replace 'http://localhost:3001/vendors' with the actual API endpoint
    fetch('http://localhost:8080/vendorlist')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched vendors:', data);
        setAllVendors(data);
      })
      .catch(error => console.error('Error fetching vendors:', error));
  }, []);

  const handleVendorSelect = (vendor) => {
    setSelectedVendors([...selectedVendors, vendor]);
    const updatedVendors = allVendors.filter((v) => v !== vendor);
    setAllVendors(updatedVendors);
  };

  const handleRemoveVendor = (vendor) => {
    const updatedVendors = selectedVendors.filter((v) => v !== vendor);
    setSelectedVendors(updatedVendors);
    setRemovedVendors([...removedVendors, vendor]);
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleDeleteIndent = (index) => {
    const updatedIndents = [...indents];
    updatedIndents.splice(index, 1);
    setIndents(updatedIndents);
  };

  const handleDocumentChange = (documentId) => {
    const updatedDocuments = documents.map(doc => ({
      ...doc,
      selected: doc.id === documentId ? !doc.selected : doc.selected,
    }));
    setDocuments(updatedDocuments);
  
    // Update the selected documents state
    const selectedDocs = updatedDocuments.filter(doc => doc.selected).map(doc => doc.id);
    setSelectedDocuments(selectedDocs);
    console.log(selectedDocs);
  }

  const postData = async () => {
    try {
      const url = 'http://localhost:8080/fillrfp'; // Replace with your API endpoint
      const jsonData = {
        "id": 5,
        "estimatedPrice": 1000.00,
        "isSplitable": rfpDivision,
        "isPublish": true,
        "isDraft": false,
        "remarks": remarks,
        "rfpCreationDate": "12-09-2023",
        "bidOpeningDate": bidOpenDate,
        "bidSubmissionDate": bidSubmissionDate,
        "buyer": 1,
        "li": [{
          "VID": "1",
          "VendorName": "Address1"
        }],
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers you need
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Process the response data if needed
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filteredVendors = allVendors.filter((vendor) => !selectedVendors.includes(vendor) && !removedVendors.includes(vendor));

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

  return (
    <div className="main-container">
      <div className="translucent-form">
        <div className="user-info">
          {userName !== '' ? (
            <span>Welcome, {userName}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <div className="form-title"><BsLayers className="icon" /> Proposed Intent</div>

        <div className="table-container mt-4">
          <table>
            <thead>
              <tr style={{ background: '#007BFF' }}>
                <th><BsBox className="icon" /> Intent ID</th>
                <th><BsFillPersonFill className="icon" /> Name</th>
                <th><BsQuestion className="icon" /> Measure of Unit</th>
                <th><BsLayers className="icon" /> Quantity</th>
                <th><BsCurrencyRupee className="icon" /> Estimated Price</th>
                {editable && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {indents.map((item, index) => (
                <tr key={index} style={{ background: index % 2 === 0 ? '#f0f0f0' : 'white' }}>
                  <td>{item.indentId}</td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  {editable ? (
                    <>
                      <td>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) => {
                            const updatedIndents = [...indents];
                            updatedIndents[index].quantity = e.target.value;
                            setIndents(updatedIndents);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={item.price}
                          onChange={(e) => {
                            const updatedIndents = [...indents];
                            updatedIndents[index].price = e.target.value;
                            setIndents(updatedIndents);
                          }}
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </>
                  )}

                  {editable && (
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteIndent(index)}
                      >
                        <BsTrash />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <select
          className="form-select mt-4"
          value={''}
          onChange={(e) => handleVendorSelect(e.target.value)}
        >
          <option value={''} disabled>Select Vendor</option>
          {filteredVendors.map((vendor, index) => (
            <option key={index} value={vendor.name}>
              {vendor.name}
            </option>
          ))}
        </select>

        {selectedVendors.length > 0 && (
          <div className="selected-vendor mt-4">
            <div className="form-title">Selected Vendors</div>
            <div className="selected-vendor-box d-flex">
              {selectedVendors.map((vendor) => (
                <div key={vendor} className="selected-vendor-item mx-2 ">
                  {vendor}
                  <button
                    className="btn btn-sm btn-danger ml-2 mx-1"
                    style={{ padding: '0.2rem 0.4rem', fontSize: '0.8rem' }}
                    onClick={() => handleRemoveVendor(vendor)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="document-list mt-4">
          <div className="form-title">Documents</div>

          <div className="row">
            {documents.map((doc) => (
              <div className="col-md-3" key={doc.id}>
                <label className="document-label">
                  <input
                    type="checkbox"
                    id={`document-${doc.id}`}
                    checked={doc.selected}
                    onChange={() => handleDocumentChange(doc.id)}
                  />
                  {doc.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="rfp-decision mt-4">
          <div className="form-title">RFP Split</div>
          <div className="btn-group" role="group" aria-label="RFP Decision">
            <div className="btn-group" role="group" aria-label="RFP Decision">
              <button
                type="button"
                className={`btn btn-${rfpDivision ? 'success' : 'secondary'}`}
                onClick={() => setrfpDivision(true)}
              >
                Yes
              </button>
              <button
                type="button"
                className={`btn btn-${!rfpDivision ? 'success' : 'secondary'}`}
                onClick={() => setrfpDivision(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>

        <div className="remarks mt-4">
          <div className="form-title">Remarks</div>
          <textarea
            className="form-control"
            rows="4"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>

        <div className="calendar mt-4 d-flex">
          <div className="form-group mx-2">
            <label className="form-title">Bid Submission Date</label>
            <input
              type="date"
              className="form-control form-control-lg"
              value={bidSubmissionDate}
              onChange={(e) => setBidSubmissionDate(e.target.value)}
            />
          </div>

          <div className="form-group mx-5">
            <label className="form-title">Bid Open Date</label>
            <input
              type="date"
              className="form-control form-control-lg"
              value={bidOpenDate}
              onChange={(e) => setBidOpenDate(e.target.value)}
            />
          </div>
        </div>

        <div className="create-rpf mt-5">
          <button
            className="btn btn-primary"
            onClick={handleEditClick}
            disabled={editable}
          >
            Edit
          </button>
          <button
              className="btn btn-secondary "
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

export default RFPEdit;
