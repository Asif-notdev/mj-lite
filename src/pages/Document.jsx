import React, { useState } from 'react';

function FileInput(){
    const [documents, setDocuments] = useState([
        { id: 1, name: 'Adhar Card', selected: false },
        { id: 2, name: 'PAN Card', selected: false },
        { id: 3, name: 'GST Invoice', selected: false },
        { id: 4, name: 'Company Id', selected: false },
        { id: 5, name: 'TurnOver Proff', selected: false },
      ]);

      
  const handleDocumentChange = (documentId) => {
    const updatedDocuments = documents.map(doc => ({
      ...doc,
      selected: doc.id === documentId ? !doc.selected : doc.selected,
    }));
    setDocuments(updatedDocuments);
  };

  return (
    <>
        <div className="document-list mt-4">
          <div className="form-title">Documents</div>
          {documents.map((doc) => (
            <div key={doc.id} className="form-title">
              <label htmlFor='inpFile' > {doc.name} </label>
              <span style={{float:'right'}}><input name='inpFile' style={{float:'right'}} type="file" onChange={handleDocumentChange} /></span>
            </div>
          ))}
        </div>
    </>
  )

}

export default FileInput;