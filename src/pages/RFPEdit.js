import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/rfpstyle.css';
import { BsFillPersonFill, BsBox, BsLayers, BsQuestion, BsTrash } from 'react-icons/bs';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';

import { useNavigate, useLocation } from 'react-router-dom';

const RFPEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [editable, setEditable] = useState(false);
  const [indents, setIndents] = useState(location.state?.dummyData || []);

  const [vendors, setVendors] = useState(['Vendor 1', 'Vendor 2', 'Vendor 3']);
  const [selectedVendors, setSelectedVendors] = useState([]);

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Aadhar Card', selected: false },
    { id: 2, name: 'Pan Card', selected: false },
    { id: 3, name: 'Turn Over of the company', selected: false },
    { id: 4, name: 'GST Invoice', selected: false },
  ]);

  const [rfpDecision, setRfpDecision] = useState('Yes');
  const [remarks, setRemarks] = useState('');
  const [bidSubmissionDate, setBidSubmissionDate] = useState('');
  const [bidOpenDate, setBidOpenDate] = useState('');

  useEffect(() => {
    // Fetch vendors from API and setVendors
    // Replace 'http://localhost:3001/vendors' with the actual API endpoint
    fetch('http://localhost:3001/vendors')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched vendors:', data);
        setVendors(data);
      })
      .catch(error => console.error('Error fetching vendors:', error));
  }, []);

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

  const handleVendorSelect = (vendor) => {
    setSelectedVendors([...selectedVendors, vendor]);
    const updatedVendors = vendors.filter((v) => v !== vendor);
    setVendors(updatedVendors);
  };

  const handleFinalSubmit = () => {
    // Additional logic for final submission if needed
    window.alert('RFP Finally Submitted');
    navigate('/RFPList'); // Redirect to RFPList page
  };

  const handleSaveAsDraft = () => {
    // Additional logic for saving as draft if needed
    window.alert('RFP Saved as Draft');
    navigate('/RFPList'); // Redirect to RFPList page
  };

  return (
    <div className="main-container">
      <div className="translucent-form">
        <div className="form-title"><BsLayers className="icon" /> Purposed Indent</div>

        <div className="table-container  mt-4">
          <table>
            <thead>
              <tr style={{ background: '#007BFF' }}>
                <th><BsBox className="icon" /> Indent ID</th>
                <th><BsFillPersonFill className="icon" /> Name</th>
                <th><BsQuestion className="icon" /> Measure of Unit</th>
                <th><BsLayers className="icon" /> Quantity</th>
                {editable && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {indents.map((item, index) => (
                <tr key={index} style={{ background: index % 2 === 0 ? '#f0f0f0' : 'white' }}>
                  <td>{item.indentId}</td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity}</td>
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
          className="form-select  mt-4" 
          value={''} // Set to an empty string or null
          onChange={(e) => handleVendorSelect(e.target.value)}
        >
          <option value={''} disabled>Select Vendor</option>
          {vendors.map((vendor) => (
            <option key={vendor.id} value={vendor.name}>
              {vendor.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={handleAddVendor}
        >
          Add Vendor
        </button>

        <div className="document-list mt-4">
          <div className="form-title">Documents</div>
          {documents.map((doc) => (
            <div key={doc.id}>
              <label className="document-label">
                <input
                  type="checkbox"
                  checked={doc.selected}
                  onChange={() => handleDocumentChange(doc.id)}
                />
                {doc.selected ? <RiCheckboxCircleLine /> : <RiCheckboxBlankCircleLine />}
                {doc.name}
              </label>
            </div>
          ))}
        </div>

        <div className="rfp-decision mt-4">
          <div className="form-title">RFP Decision</div>
          <div className="btn-group" role="group" aria-label="RFP Decision">
            <button
              type="button"
              className={`btn btn-${rfpDecision === 'Yes' ? 'success' : 'secondary'}`}
              onClick={() => setRfpDecision('Yes')}
            >
              Yes
            </button>
            <button
              type="button"
              className={`btn btn-${rfpDecision === 'No' ? 'success' : 'secondary'}`}
              onClick={() => setRfpDecision('No')}
            >
              No
            </button>
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
            onClick={handleEditClick}
            disabled={editable}
          >
            Edit
          </button>
        </div>

        <div className="create-rpf mt-4">
          <button
            className="btn btn-success"
            onClick={handleFinalSubmit}
            disabled={!editable}
          >
            Final Submit
          </button>
          <button
            className="btn btn-secondary ml-2"
            onClick={handleSaveAsDraft}
            disabled={!editable}
          >
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default RFPEdit;
