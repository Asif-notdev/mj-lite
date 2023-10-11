

function MyDynemicFileAdding(){

    const avialableList = ['Adhar Card','Pan Card','GST Invoice'];
    const unAvialableList =[];
    
    function handleAddDoc(){
      
    }


    return (
        <div>
          <span style={{ fontFamily: 'Arial' }}>Click to add files</span>&nbsp;&nbsp;
          <br />
          <br />


        
          {/* <div key={index}> */}
          <div>
              {/* <select value="Select Document Type" onChange={(e) => handleDocumentTypeChange(index, e)}> */}
              <select value="Select Document Type" >
                {
                  avialableList.map((data, index) => (
                    <option value={data}>{data}</option>
                  ))
                } 
              </select>
              <input type="file" />
              {/* <input type="file" onChange={(e) => handleFileChange(index, e)} /> */}
              <button >Remove</button>
              {/* <button onClick={() => handleRemoveFileInput(index)}>Remove</button> */}
          </div>

          <div>
            <button onClick={handleAddDoc} >Add Document</button>
            <button >Upload</button>
          </div>
        
{/* 
          <div>
            <button onClick={handleAddFileInput}>Add</button>
            <button onClick={handleUpload}>Upload</button>
          </div>
*/}
        </div>
    )
}

export default MyDynemicFileAdding;