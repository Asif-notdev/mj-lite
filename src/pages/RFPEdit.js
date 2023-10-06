import React, { useState } from 'react';
import '../styling/rfpstyle.css';
import { Link, useHistory } from 'react-router-dom';


const RFPEdit = () => {
  const [editable, setEditable] = useState(false);
  const [indents, setIndents] = useState([
    { indentId: 1, name: 'Item A', unit: 'pcs', quantity: 5 },
    { indentId: 2, name: 'Item B', unit: 'kg', quantity: 3 },
    // Add more indents as needed
  ]);

  const [vendors, setVendors] = useState(['Vendor 1', 'Vendor 2', 'Vendor 3']);
  const [selectedVendors, setSelectedVendors] = useState([]);

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Document 1', selected: false },
    { id: 2, name: 'Document 2', selected: false },
    // Add more documents as needed
  ]);

  const [rfpSplit, setRfpSplit] = useState(50);
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
        <div className="form-title">Purposed Indent</div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Indent ID</th>
                <th>Name</th>
                <th>Measure of Unit</th>
                <th>Quantity</th>
                {editable && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {indents.map((item, index) => (
                <tr key={index}>
                  <td>{item.indentId}</td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity}</td>
                  {editable && (
                    <td>
                      <button onClick={() => handleDeleteIndent(index)}>Delete</button>
                    </td>
                  )}
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

        <div className="document-list mt-4">
          <div className="form-title">Documents</div>
          {documents.map((doc) => (
            <div key={doc.id}>
              <label>
                <input
                  type="checkbox"
                  checked={doc.selected}
                  onChange={() => handleDocumentChange(doc.id)}
                />
                {doc.name}
              </label>
            </div>
          ))}
        </div>

        <div className="rfp-slider mt-4">
          <div className="form-title">RFP Split</div>
          <input
            type="range"
            min="0"
            max="100"
            value={rfpSplit}
            onChange={(e) => setRfpSplit(parseInt(e.target.value, 10))}
          />
          <div>{rfpSplit}%</div>
        </div>

        <div className="remarks mt-4">
          <div className="form-title">Remarks</div>
          <textarea
            rows="4"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>

        <div className="calendar mt-4">
          <div className="form-title">Bid Submission Date</div>
          <input
            type="date"
            value={bidSubmissionDate}
            onChange={(e) => setBidSubmissionDate(e.target.value)}
          />
        </div>

        <div className="calendar mt-4">
          <div className="form-title">Bid Open Date</div>
          <input
            type="date"
            value={bidOpenDate}
            onChange={(e) => setBidOpenDate(e.target.value)}
          />
        </div>

        <div className="create-rpf mt-4">
          <button className="yes-button" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RFPEdit;
