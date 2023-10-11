import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Button, Navbar } from 'react-bootstrap';

const BidDetailView = () => {
  const { bidId } = useParams(); // Assuming you have a bid ID parameter

  // Define the JSON data for the BidDetailView based on the 'bidId' parameter
  const bidData = [
    {
      bidId: '1',
      rfpId: '1',
      documents: ['Document 1', 'Document 2'],
      vendorName: 'Vendor 1',
      vendorId: '1',
      bidSubmissionDate: '2023-10-10',
      bidOpeningDate: '2023-10-15',
      bidCreationDate: '2023-09-30',
      isActive: 'Yes',
      isDraft: 'No',
      price: 1500,
    },
    {
      bidId: '2',
      rfpId: '1',
      documents: ['Document 3'],
      vendorName: 'Vendor 2',
      vendorId: '2',
      bidSubmissionDate: '2023-10-12',
      bidOpeningDate: '2023-10-18',
      bidCreationDate: '2023-09-28',
      isActive: 'Yes',
      isDraft: 'Yes',
      price: 1200,
    },
    // Add more data as needed
  ];

  const bid = bidData.find((data) => data.bidId === bidId);

  if (!bid) {
    return <div>Bid not found.</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Card style={{ width: '40rem' }}>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Bid Details</Navbar.Brand>
          </Navbar>

          <Card.Body>
            <Card.Title>
              <strong>Bid ID:</strong> {bid.bidId}
            </Card.Title>
            <Card.Text>
              <p>
                <strong>RFP ID:</strong> {bid.rfpId}
              </p>
              <div>
                <strong>List of Documents:</strong>
                <ul>
                  {bid.documents.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
              <p>
                <strong>Vendor Name:</strong> {bid.vendorName}
              </p>
              <p>
                <strong>Vendor ID:</strong> {bid.vendorId}
              </p>
              <p>
                <strong>Bid Submission Date:</strong> {bid.bidSubmissionDate}
              </p>
              <p>
                <strong>Bid Opening Date:</strong> {bid.bidOpeningDate}
              </p>
              <p>
                <strong>Bid Creation Date:</strong> {bid.bidCreationDate}
              </p>
              <p>
                <strong>Is Active:</strong> {bid.isActive}
              </p>
              <p>
                <strong>Is Draft:</strong> {bid.isDraft}
              </p>
              <p>
                <strong>Price:</strong> ${bid.price}
              </p>
            </Card.Text>
            <Button variant="primary">
              <Link to="/rfplist" style={{ color: 'black', textDecoration: 'none' }}>
                Go Back
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BidDetailView;
