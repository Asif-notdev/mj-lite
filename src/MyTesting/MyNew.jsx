// import React, { useState } from 'react';

// function MyDynemicFileAdding() {
//   // Initialize the available and unavailable lists using state
//   const [availableList, setAvailableList] = useState(['Adhar Card', 'Pan Card', 'GST Invoice']);
//   const [unavailableList, setUnavailableList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('Select Document Type');

//   // Function to handle the "Add Document" button click
//   function handleAddDoc() {
//     if (selectedOption !== 'Select Document Type') {
//       // Move the selected option from available to unavailable list
//       setAvailableList((prevAvailableList) =>
//         prevAvailableList.filter((option) => option !== selectedOption)
//       );
//       setUnavailableList((prevUnavailableList) => [...prevUnavailableList, selectedOption]);
//       setSelectedOption('Select Document Type'); // Reset the selected option
//     }
//   }

//   // Function to handle the dropdown change
//   function handleDropdownChange(event) {
//     setSelectedOption(event.target.value);
//   }

//   return (
//     <div>
//       <span style={{ fontFamily: 'Arial' }}>Click to add files</span>&nbsp;&nbsp;
//       <br />
//       <br />

//       <div>
//         <select value={selectedOption} onChange={handleDropdownChange}>
//           <option value="Select Document Type">Select Document Type</option>
//           {availableList.map((data, index) => (
//             <option key={index} value={data}>
//               {data}
//             </option>
//           ))}
//         </select>
//         <input type="file" />
//         <button onClick={handleAddDoc}>Add Document</button>
//       </div>

//       <div>
//         <button>Upload</button>
//       </div>
//     </div>
//   );
// }

// export default MyDynemicFileAdding;







// import React, { useState } from 'react';

// function MyDynemicFileAdding() {
//   // Initialize the available and unavailable lists using state
//   const [availableList, setAvailableList] = useState(['Adhar Card', 'Pan Card', 'GST Invoice']);
//   const [unavailableList, setUnavailableList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('Select Document Type');
//   const [dropdowns, setDropdowns] = useState([]);

//   // Function to handle the "Add Document" button click
//   function handleAddDoc() {
//     if (selectedOption !== 'Select Document Type') {
//       // Move the selected option from available to unavailable list
//       setAvailableList((prevAvailableList) =>
//         prevAvailableList.filter((option) => option !== selectedOption)
//       );
//       setUnavailableList((prevUnavailableList) => [...prevUnavailableList, selectedOption]);

//       // Add the selected option to the list of dropdowns
//       setDropdowns((prevDropdowns) => [
//         ...prevDropdowns,
//         {
//           selectedOption: 'Select Document Type',
//           key: prevDropdowns.length + 1,
//         },
//       ]);

//       setSelectedOption('Select Document Type'); // Reset the selected option
//     }
//   }

//   // Function to handle the dropdown change
//   function handleDropdownChange(event, key) {
//     const updatedDropdowns = [...dropdowns];
//     updatedDropdowns[key - 1].selectedOption = event.target.value;
//     setDropdowns(updatedDropdowns);
//   }

//   return (
//     <div>
//       <span style={{ fontFamily: 'Arial' }}>Click to add files</span>&nbsp;&nbsp;
//       <br />
//       <br />
      
//       {dropdowns.map((dropdown) => (
//         <div key={dropdown.key}>
//           <select value={dropdown.selectedOption} onChange={(e) => handleDropdownChange(e, dropdown.key)}>
//             <option value="Select Document Type">Select Document Type</option>
//             {availableList.map((data, index) => (
//               <option key={index} value={data}>
//                 {data}
//               </option>
//             ))}
//           </select>
//           <input type="file" />
//           <button onClick={handleAddDoc}>Add Document</button>
//         </div>
//       ))}

//       <div>
//         <button>Upload</button>
//       </div>
//     </div>
//   );
// }

// export default MyDynemicFileAdding;













// import React, { useState } from 'react';

// function MyDynemicFileAdding() {
//   // Initialize the available and unavailable lists using state
//   const [availableList, setAvailableList] = useState(['Adhar Card', 'Pan Card', 'GST Invoice']);
//   const [unavailableList, setUnavailableList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('Select Document Type');
//   const [dropdowns, setDropdowns] = useState([]);

//   // Function to handle the "Add Document" button click
//   function handleAddDoc() {
//     if (selectedOption !== 'Select Document Type') {
//       // Move the selected option from available to unavailable list
//       setAvailableList((prevAvailableList) =>
//         prevAvailableList.filter((option) => option !== selectedOption)
//       );
//       setUnavailableList((prevUnavailableList) => [...prevUnavailableList, selectedOption]);

//       // Add the selected option to the list of dropdowns
//       setDropdowns((prevDropdowns) => [
//         ...prevDropdowns,
//         {
//           selectedOption: 'Select Document Type',
//           key: prevDropdowns.length + 1,
//         },
//       ]);

//       setSelectedOption('Select Document Type'); // Reset the selected option
//     }
//   }

//   // Function to handle the initial dropdown change
//   function handleInitialDropdownChange(event) {
//     setSelectedOption(event.target.value);
//   }

//   // Function to handle the dropdown change
//   function handleDropdownChange(event, key) {
//     const updatedDropdowns = [...dropdowns];
//     updatedDropdowns[key - 1].selectedOption = event.target.value;
//     setDropdowns(updatedDropdowns);
//   }

//   return (
//     <div>
//       <span style={{ fontFamily: 'Arial' }}>Click to add files</span>&nbsp;&nbsp;
//       <br />
//       <br />

//       <div>
//         <select value={selectedOption} onChange={handleInitialDropdownChange}>
//           <option value="Select Document Type">Select Document Type</option>
//           {availableList.map((data, index) => (
//             <option key={index} value={data}>
//               {data}
//             </option>
//           ))}
//         </select>
//         <input type="file" />
//         <button onClick={handleAddDoc}>Add Document</button>
//       </div>

//       {dropdowns.map((dropdown) => (
//         <div key={dropdown.key}>
//           <select value={dropdown.selectedOption} onChange={(e) => handleDropdownChange(e, dropdown.key)}>
//             <option value="Select Document Type">Select Document Type</option>
//             {availableList.map((data, index) => (
//               <option key={index} value={data}>
//                 {data}
//               </option>
//             ))}
//           </select>
//           <input type="file" />
//           <button onClick={handleAddDoc}>Add Document</button>
//         </div>
//       ))}

//       <div>
//         <button>Upload</button>
//       </div>
//     </div>
//   );
// }

// export default MyDynemicFileAdding;
















// import React, { useState } from 'react';

// function MyDynemicFileAdding() {
//   // Initialize the available and unavailable lists using state
//   const [availableList, setAvailableList] = useState(['Adhar Card', 'Pan Card', 'GST Invoice']);
//   const [unavailableList, setUnavailableList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('Select Document Type');
//   const [dropdowns, setDropdowns] = useState([]);

//   // Function to handle the "Add Document" button click
//   function handleAddDoc() {
//     if (selectedOption !== 'Select Document Type') {
//       // Move the selected option from available to unavailable list
//       setAvailableList((prevAvailableList) =>
//         prevAvailableList.filter((option) => option !== selectedOption)
//       );
//       setUnavailableList((prevUnavailableList) => [...prevUnavailableList, selectedOption]);

//       // Add the selected option to the list of dropdowns with 'Select Document Type'
//       setDropdowns((prevDropdowns) => [
//         ...prevDropdowns,
//         {
//           selectedOption: 'Select Document Type', // Initialize with the placeholder
//           key: prevDropdowns.length + 1,
//         },
//       ]);

//       setSelectedOption('Select Document Type'); // Reset the selected option
//     }
//   }

//   // Function to handle the dropdown change
//   function handleDropdownChange(event, key) {
//     const updatedDropdowns = [...dropdowns];
//     updatedDropdowns[key - 1].selectedOption = event.target.value;
//     setDropdowns(updatedDropdowns);
//   }

//   return (
//     <div>
//       <span style={{ fontFamily: 'Arial' }}>Click to add files</span>&nbsp;&nbsp;
//       <br />
//       <br />

//       <div>
//         <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
//           <option value="Select Document Type">Select Document Type</option>
//           {availableList.map((data, index) => (
//             <option key={index} value={data}>
//               {data}
//             </option>
//           ))}
//         </select>
//         <input type="file" />
//         <button onClick={handleAddDoc}>Add Document</button>
//       </div>

//       {dropdowns.map((dropdown) => (
//         <div key={dropdown.key}>
//           <select value={dropdown.selectedOption} onChange={(e) => handleDropdownChange(e, dropdown.key)}>
//             {availableList.map((data, index) => (
//               <option key={index} value={data}>
//                 {data}
//               </option>
//             ))}
//           </select>
//           <input type="file" />
//           <button onClick={handleAddDoc}>Add Document</button>
//         </div>
//       ))}

//       <div>
//         <button>Upload</button>
//       </div>
//     </div>
//   );
// }

// export default MyDynemicFileAdding;






// import React, { useState } from 'react';

// function MyDynemicFileAdding() {
//   // Initialize the available and unavailable lists using state
//   const [availableList, setAvailableList] = useState(['Adhar Card', 'Pan Card', 'GST Invoice']);
//   const [unavailableList, setUnavailableList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('Select Document Type');
//   const [dropdowns, setDropdowns] = useState([]);

//   // Function to handle the "Add Document" button click
//   function handleAddDoc() {
//     if (selectedOption !== 'Select Document Type') {
//       // Move the selected option from available to unavailable list
//       setAvailableList((prevAvailableList) =>
//         prevAvailableList.filter((option) => option !== selectedOption)
//       );
//       setUnavailableList((prevUnavailableList) => [...prevUnavailableList, selectedOption]);

//       // Add the selected option to the list of dropdowns
//       setDropdowns((prevDropdowns) => [
//         ...prevDropdowns,
//         {
//           selectedOption: selectedOption, // Initialize with the selected option
//           key: prevDropdowns.length + 1,
//         },
//       ]);

//       setSelectedOption('Select Document Type'); // Reset the selected option
//     }
//   }

//   // Function to handle the dropdown change
//   function handleDropdownChange(event, key) {
//     const updatedDropdowns = [...dropdowns];
//     updatedDropdowns[key - 1].selectedOption = event.target.value;
//     setDropdowns(updatedDropdowns);
//   }

//   return (
//     <div>
//       <span style={{ fontFamily: 'Arial' }}>Click to add files</span>&nbsp;&nbsp;
//       <br />
//       <br />

//       <div>
//         <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
//           <option value="Select Document Type">Select Document Type</option>
//           {availableList.map((data, index) => (
//             <option key={index} value={data}>
//               {data}
//             </option>
//           ))}
//         </select>
//         <input type="file" />
//         <button onClick={handleAddDoc}>Add Document</button>
//       </div>

//       {dropdowns.map((dropdown) => (
//         <div key={dropdown.key}>
//           <select value={dropdown.selectedOption} onChange={(e) => handleDropdownChange(e, dropdown.key)}>
//             <option value={dropdown.selectedOption}>{dropdown.selectedOption}</option>
//             {availableList.map((data, index) => (
//               <option key={index} value={data}>
//                 {data}
//               </option>
//             ))}
//           </select>
//           <input type="file" />
//           <button onClick={handleAddDoc}>Add Document</button>
//         </div>
//       ))}

//       <div>
//         <button>Upload</button>
//       </div>
//     </div>
//   );
// }

// export default MyDynemicFileAdding;


import React, { useState } from 'react';

function MyDynemicFileAdding() {
  // Initialize the available and unavailable lists using state
  const [availableList, setAvailableList] = useState(['Adhar Card', 'Pan Card', 'GST Invoice']);
  const [unavailableList, setUnavailableList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Select Document Type');
  const [dropdowns, setDropdowns] = useState([]);

  // Function to handle the "Add Document" button click
  function handleAddDoc() {
    if (selectedOption !== 'Select Document Type') {
      // Move the selected option from available to unavailable list
      setAvailableList((prevAvailableList) =>
        prevAvailableList.filter((option) => option !== selectedOption)
      );
      setUnavailableList((prevUnavailableList) => [...prevUnavailableList, selectedOption]);

      // Add a new dropdown to the list of dropdowns
      setDropdowns((prevDropdowns) => [
        ...prevDropdowns,
        {
          selectedOption: 'Select Document Type', // Initialize with the placeholder
          key: prevDropdowns.length + 1,
        },
      ]);

      setSelectedOption('Select Document Type'); // Reset the selected option
    }
  }

  // Function to handle the dropdown change
  function handleDropdownChange(event, key) {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[key - 1].selectedOption = event.target.value;
    setDropdowns(updatedDropdowns);
  }

  return (
    <div>
      <span style={{ fontFamily: 'Arial' }}>Click to add files</span>&nbsp;&nbsp;
      <br />
      <br />

      <div>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="Select Document Type">Select Document Type</option>
          {availableList.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
        <input type="file" />
        <button onClick={handleAddDoc}>Add Document</button>
      </div>

      {dropdowns.map((dropdown) => (
        <div key={dropdown.key}>
          <select value={dropdown.selectedOption} onChange={(e) => handleDropdownChange(e, dropdown.key)}>
            <option value={dropdown.selectedOption}>{dropdown.selectedOption}</option>
            {availableList.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
          <input type="file" />
          <button onClick={handleAddDoc}>Add Document</button>
        </div>
      ))}

      <div>
        <button>Upload</button>
      </div>
    </div>
  );
}

export default MyDynemicFileAdding;
