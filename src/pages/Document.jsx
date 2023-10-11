import React, { useState } from 'react';
import { useEffect } from 'react';

function FileInput(){
  
    const docList= ['Adhar Card', 'Adhar Card','GST Invoice','Company Id','TurnOver Proff']
    const [documents, setDocuments] = useState([{ id: 1, name:'', selected: false }]);
  

    useEffect(() => {
      const newDocuments = docList.map((name, index) => ({
        id: index + 1, 
        name: name,
        selected: false,
      }));

      setDocuments(newDocuments);

    },[]);


  const handleDocumentChange = (documentId) => {
    const updatedDocuments = documents.map(doc => ({
      ...doc,
      selected: doc.id === documentId ? !doc.selected : doc.selected,
    }));
    setDocuments(updatedDocuments);
  };

  return (
    <>
          <div className="p-2 my-2 bg-primary ">Upload The Required Document Documents</div>
          
          <div>
          {
            documents.map((doc) => (
              <div key={doc.id} className="form-title">
                <label > {doc.name} </label>
                <span style={{float:'right'}}><input style={{float:'right'}} type="file" onChange={handleDocumentChange} /></span>
              </div>
            ))
          }
        </div>
    </>
  )

}

export default FileInput;