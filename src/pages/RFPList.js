import React from 'react';
import { Link } from 'react-router-dom';

const RFPList = () => {
  // Define your RFP data
  const rfpData = [
    {
      id: 1,
      bidName: 'Bid 1',
      bidCreationDate: '2023-10-01',
      bidOpeningDate: '2023-10-10',
      bidSubmissionDate: '2023-10-15',
      documents: ['Document 1', 'Document 2'],
      vendors: ['Vendor 1', 'Vendor 2'],
      active: true, // Set to true for the "Active" badge
    },
    {
      id: 2,
      bidName: 'Bid 2',
      bidCreationDate: '2023-10-02',
      bidOpeningDate: '2023-10-12',
      bidSubmissionDate: '2023-10-17',
      documents: ['Document 3', 'Document 4'],
      vendors: ['Vendor 3', 'Vendor 4'],
      active: false, // Set to false for no badge
    },
    {
      id: 3,
      bidName: 'Bid 3',
      bidCreationDate: '2023-10-03',
      bidOpeningDate: '2023-10-14',
      bidSubmissionDate: '2023-10-18',
      documents: ['Document 5', 'Document 6'],
      vendors: ['Vendor 5', 'Vendor 6'],
      active: true, // Set to true for the "Active" badge
    },
    {
      id: 4,
      bidName: 'Bid 4',
      bidCreationDate: '2023-10-04',
      bidOpeningDate: '2023-10-16',
      bidSubmissionDate: '2023-10-19',
      documents: ['Document 7', 'Document 8'],
      vendors: ['Vendor 7', 'Vendor 8'],
      active: false, // Set to false for no badge
    },
  ];

  return (
    <div className="translucent-form">
      <h1>List of RFP</h1>

      {rfpData.map((rfp) => (
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
                    Bid ID: {rfp.id} - {rfp.bidName}
                  </div>
                  {rfp.active && <span className="badge bg-success mx-3">Active</span>}
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
                      <th className="bg-primary">Document List</th>
                      <th className="bg-primary">Vendor List</th>
                      <th className="bg-primary">Dates</th>
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
