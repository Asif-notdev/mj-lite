import React, { useState } from 'react';

function FileUploadComponent() {
  const [fileInputs, setFileInputs] = useState([{ documentType: 'Aadhar', file: null }]);

  const handleAddFileInput = () => {
    setFileInputs([...fileInputs, { documentType: 'Aadhar', file: null }]);
  };

  const handleRemoveFileInput = (indexToRemove) => {
    const newFileInputs = [...fileInputs];
    newFileInputs.splice(indexToRemove, 1);
    setFileInputs(newFileInputs);
  };

  const handleDocumentTypeChange = (index, event) => {
    const selectedType = event.target.value;
    const newFileInputs = [...fileInputs];
    newFileInputs[index].documentType = selectedType;
    setFileInputs(newFileInputs);
  };

  const handleFileChange = (index, event) => {
    const newFileInputs = [...fileInputs];
    newFileInputs[index].file = event.target.files[0];
    setFileInputs(newFileInputs);
  };

  const handleUpload = () => {

    const formData = new FormData();
    fileInputs.forEach((input, index) => {
      formData.append(`documentType${index}`, input.documentType);
      formData.append(`file${index}`, input.file);
    });
  };

  return (
    <div>
      <span style={{ fontFamily: 'Arial' }}>Click to add files</span>&nbsp;&nbsp;
      <br />
      <br />
      <div>
        {fileInputs.map((input, index) => (
          <div key={index}>
            <select value={input.documentType} onChange={(e) => handleDocumentTypeChange(index, e)}>
              <option value="Aadhar">Aadhar</option>
              <option value="Pan">Pan</option>
              <option value="Passport">Passport</option>
              {/* Add more document types here */}
            </select>
            <input type="file" onChange={(e) => handleFileChange(index, e)} />
            <button onClick={() => handleRemoveFileInput(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleAddFileInput}>Add</button>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

export default FileUploadComponent;

// right now best