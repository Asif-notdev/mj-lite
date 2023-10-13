import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RFPList = () => {
 
  const rfpData = [
    {
      id: 1,
      rfpName: 'RFP 1',
      bidCreationDate: '2023-10-01',
      bidOpeningDate: '2023-10-10',
      bidSubmissionDate: '2023-10-15',
      documents: ['Document 1', 'Document 2'],
      vendors: ['Vendor 1', 'Vendor 2'],
      active: true,
    },
    {
      id: 2,
      rfpName: 'RFP 2',
      bidCreationDate: '2023-10-02',
      bidOpeningDate: '2023-10-12',
      bidSubmissionDate: '2023-10-17',
      documents: ['Document 3', 'Document 4'],
      vendors: ['Vendor 3', 'Vendor 4'],
      active: false,
    },
    {
      id: 3,
      rfpName: 'RFP 3',
      bidCreationDate: '2023-10-03',
      bidOpeningDate: '2023-10-14',
      bidSubmissionDate: '2023-10-18',
      documents: ['Document 5', 'Document 6'],
      vendors: ['Vendor 5', 'Vendor 6'],
      active: true,
    },
    {
      id: 4,
      rfpName: 'RFP 4',
      bidCreationDate: '2023-10-04',
      bidOpeningDate: '2023-10-16',
      bidSubmissionDate: '2023-10-19',
      documents: ['Document 7', 'Document 8'],
      vendors: ['Vendor 7', 'Vendor 8'],
      active: false,
    },
  ];

  const thStyle = {
    backgroundColor: 'blue',
    color: 'white',
  };

  // Define the state variable for filtering
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  // Sorting by creation date
  const sortedRFPData = [...rfpData].sort(
    (a, b) => new Date(b.bidCreationDate) - new Date(a.bidCreationDate)
  );

  // Filtering based on the active status
  const filteredRFPData = showActiveOnly
    ? sortedRFPData.filter((rfp) => rfp.active)
    : sortedRFPData;

  return (
    <div className="translucent-form">
      <h1>List of RFP</h1>
      
      <div className="d-flex justify-content-end mb-3">
        <button
          className={`btn btn-${showActiveOnly ? 'success' : 'warning'}`}
          onClick={() => setShowActiveOnly(!showActiveOnly)}
        >
          {showActiveOnly ? 'Show All' : 'Show Active Only'}
        </button>
      </div>

      {filteredRFPData.map((rfp) => (
        <div key={rfp.id} className="accordion" id={`rfpAccordion${rfp.id}`}>
          <div className={`${rfp.active ? '' : ''}`}>
            <h2 className="accordion-header" id={`rfpHeading${rfp.id}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#rfpCollapse${rfp.id}`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    Bid ID: {rfp.id} - {rfp.rfpName}
                  </div>
                  {rfp.active && <span className="badge bg-success">Active</span>}
                </div>
              </button>
            </h2>
            <div
              id={`rfpCollapse${rfp.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`rfpHeading${rfp.id}`}
              data-bs-parent={`#rfpAccordion${rfp.id}`}
            >
              <div className="accordion-body">
                <table className={`table ${rfp.active ? 'bg-primary' : ''}`}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Document List</th>
                      <th style={thStyle}>Vendor List</th>
                      <th style={thStyle}>Dates</th>
                      <th style={thStyle}>View Bid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          {rfp.documents.map((document, index) => (
                            <li key={index}>{document}</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <ul>
                          {rfp.vendors.map((vendor, index) => (
                            <li key={index}>{vendor}</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>Creation Date: {rfp.bidCreationDate}</li>
                          <li>Opening Date: {rfp.bidOpeningDate}</li>
                          <li>Submission Date: {rfp.bidSubmissionDate}</li>
                        </ul>
                      </td>
                      <td>
                        <Link to={`/viewbid/${rfp.id}`}>
                          <button className="btn btn-success">View Bid</button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RFPList;
