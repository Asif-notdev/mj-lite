import React, { useState } from 'react';
import '../styling/rfpstyle.css';

import { Link, useHistory } from 'react-router-dom';
import FileInput from './Document';
import FileUploadComponent from '../MyTesting/DynemicFileUploading';
import {useLocation } from 'react-router-dom';

const BidSubmit = () => {


  const [editable, setEditable] = useState(false);
  const [indents, setIndents] = useState([
    { indentId: 1, name: 'Item A', unit: 'pcs', quantity: 5 },
    { indentId: 2, name: 'Item B', unit: 'kg', quantity: 3 },
  ]);

  const [vendors, setVendors] = useState(['Vendor 1', 'Vendor 2', 'Vendor 3']);
  const [selectedVendors, setSelectedVendors] = useState([]);

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Adhar Card', selected: false },
    { id: 2, name: 'PAN Card', selected: false },
    { id: 3, name: 'GST Invoice', selected: false },
    { id: 4, name: 'Company Id', selected: false },
    { id: 5, name: 'TurnOver Proff', selected: false },
  ]);

 
  const [remarks, setRemarks] = useState('');
  const [bidSubmissionDate, setBidSubmissionDate] = useState('');
  const [bidOpenDate, setBidOpenDate] = useState('');

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleDeleteIndent = (index) => {
    const updatedIndents = [...indents];
    updatedIndents.splice(index, 1);
    setIndents(updatedIndents);
  };

  // const handleFinalSubmit = () => {
  //   // Additional logic for final submission if needed
  //   window.alert('RFP Finally Submitted');
  //   navigate('/RFPList'); // Redirect to RFPList page
  // };


  // const handleSaveAsDraft = () => {

  //   window.alert('RFP Saved as Draft');
  //   navigate('/RFPList');
  // };



  const handleAddVendor = () => {
    setVendors([...vendors, `Vendor ${vendors.length + 1}`]);
  };

  const handleDocumentChange = (documentId) => {
    const updatedDocuments = documents.map(doc => ({
      ...doc,
      selected: doc.id === documentId ? !doc.selected : doc.selected,
    }));
    setDocuments(updatedDocuments);
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
              {indents.map((item, index) => (
                <tr key={index}>
                  <td>{item.indentId}</td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity}</td>
                  <td>858494949</td>
                  <td><input type='number'></input></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editable && (
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
        )}

        <FileInput/>
        {/* <FileUploadComponent/> */}

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
          <div className="form-title mx-2">Bid Submission Date</div>
          <input
            type="date"
            className="form-control"
            value={bidSubmissionDate}
            onChange={(e) => setBidSubmissionDate(e.target.value)}
          />

          <div className="form-title mx-2">Bid Open Date</div>
          <input
            type="date"
            className="form-control"
            value={bidOpenDate}
            onChange={(e) => setBidOpenDate(e.target.value)}
          />
        </div>

        <div className="create-rpf mt-4">
          <button
            className="btn btn-primary"
            // onClick={handleEditClick}
            disabled={editable}
          >
            Edit
          </button>
        </div>

        <div className="create-rpf mt-4">
          <button
            className="btn btn-success"
            // onClick={handleFinalSubmit}
            disabled={!editable}
          >
            Final Submit
          </button>
          <button
            className="btn btn-secondary ml-2"
            // onClick={handleSaveAsDraft}
            disabled={!editable}
          >
            Save as Draft
          </button>
        </div>


      </div>
    </div>
  );
};

export default BidSubmit;
