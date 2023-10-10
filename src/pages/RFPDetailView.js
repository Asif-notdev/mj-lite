
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Button, Navbar } from 'react-bootstrap'; // Import Bootstrap components

const RFPDetailView = () => {
  const { id } = useParams();

  // Define the JSON data here for RFPDetailView based on the 'id' parameter
  const rfpData = [
    {
                  id: '1',
                  name: 'RFP 1',
                  measuringUnit: 'Unit',
                  price: 1000,
                  vendorList: [{ id: 1, name: 'Vendor 1' }, { id: 2, name: 'Vendor 2' }],
                  attachedDocuments: ['Document 1', 'Document 2'],
                  rfpSplit: true,
                  bidSubmissionDate: '2023-10-10',
                  bidOpeningDate: '2023-10-15',
                  bidCreationDate: '2023-09-30',
                },
                {
                  id: '2',
                  name: 'RFP 2',
                  measuringUnit: 'Kg',
                  price: 1500,
                  vendorList: [{ id: 3, name: 'Vendor 3' }],
                  attachedDocuments: ['Document 3'],
                  rfpSplit: false,
                  bidSubmissionDate: '2023-10-12',
                  bidOpeningDate: '2023-10-18',
                  bidCreationDate: '2023-09-28',
                },
                {
                  id: '3',
                  name: 'RFP 3',
                  measuringUnit: 'Each',
                  price: 800,
                  vendorList: [{ id: 4, name: 'Vendor 4' }],
                  attachedDocuments: ['Document 4', 'Document 5'],
                  rfpSplit: true,
                  bidSubmissionDate: '2023-10-08',
                  bidOpeningDate: '2023-10-20',
                  bidCreationDate: '2023-09-25',
                },
                {
                  id: '4',
                  name: 'RFP 4',
                  measuringUnit: 'Meter',
                  price: 1200,
                  vendorList: [{ id: 5, name: 'Vendor 5' }],
                  attachedDocuments: ['Document 6'],
                  rfpSplit: false,
                  bidSubmissionDate: '2023-10-14',
                  bidOpeningDate: '2023-10-25',
                  bidCreationDate: '2023-09-22',
                },
  ];

  const rfp = rfpData.find((data) => data.id === id);

  if (!rfp) {
    return <div>RFP not found.</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Card style={{ width: '40rem' }}>
          {/* Blue Navbar within the Card */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand>RFP Details</Navbar.Brand>
          </Navbar>

          <Card.Body>
            <Card.Title>
              <strong>RFP ID:</strong> {rfp.id}
            </Card.Title>
            <Card.Text>
              <p>
                <strong>RFP Name:</strong> {rfp.name}
              </p>
              <p>
                <strong>Measuring Unit:</strong> {rfp.measuringUnit}
              </p>
              <p>
                <strong>Price:</strong> ${rfp.price}
              </p>
              <div>
                <strong>Vendor List:</strong>
                <ul>
                  {rfp.vendorList.map((vendor) => (
                    <li key={vendor.id}>{vendor.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Attached Documents:</strong>
                <ul>
                  {rfp.attachedDocuments.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
              <p>
                <strong>RFP Split:</strong> {rfp.rfpSplit ? 'Yes' : 'No'}
              </p>
              <p>
                <strong>Bid Submission Date:</strong> {rfp.bidSubmissionDate}
              </p>
              <p>
                <strong>Bid Opening Date:</strong> {rfp.bidOpeningDate}
              </p>
              <p>
                <strong>Bid Creation Date:</strong> {rfp.bidCreationDate}
              </p>
            </Card.Text>
            <Button variant="primary">
              <Link to="/rfplist" style={{ color: 'black', textDecoration: 'none' }}>Go Back</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default RFPDetailView;
