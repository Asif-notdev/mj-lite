import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function FileInput() {
  const [documentData, setDocumentData] = useState([
    { type: 'Select Type', link: '' },
  ]);

  const addDocumentLink = () => {
    const newDocument = { type: 'Select Type', link: '' };
    setDocumentData([...documentData, newDocument]);
  };

  const handleLinkChange = (index, event) => {
    const newDocumentData = [...documentData];
    newDocumentData[index].link = event.target.value;
    setDocumentData(newDocumentData);
  };

  const handleTypeChange = (index, event) => {
    const newDocumentData = [...documentData];
    newDocumentData[index].type = event.target.value;
    setDocumentData(newDocumentData);
  };

  const documentTypes = ['Select Type', 'Adhar', 'PAN', 'Passport', 'Other'];

  return (
    <Form>
      {documentData.map((document, index) => (
        <div key={index} className="mb-3 p-3 border border-secondary rounded">
          <Form.Group controlId={`documentType${index}`}>
            <Form.Label className="fw-bold">Document Type</Form.Label>
            <Form.Control
              as="select"
              value={document.type}
              onChange={(event) => handleTypeChange(index, event)}
            >
              {documentTypes.map((type, typeIndex) => (
                <option key={typeIndex}>{type}</option>
              ))}
            </Form.Control>

          </Form.Group>

          <Form.Group controlId={`documentLink${index}`}>
            <Form.Label className="fw-bold ">Document Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the link to the document"
              value={document.link}
              onChange={(event) => handleLinkChange(index, event)}
            />

            {/* <Form.Text className="text-muted">
              Please provide the URL for this document.
            </Form.Text> */}
            
          </Form.Group>
        </div>
      ))}
      <Button variant="secondary" onClick={addDocumentLink}>
        <FontAwesomeIcon icon={faPlus} /> Add More Document
      </Button>
    </Form>
  );
}

export default FileInput;
