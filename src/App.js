// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RPFForm from './pages/RPFForm';
// import RFPEdit from './pages/RFPEdit';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<RPFForm />} />
//         <Route path="/" element={<RPFForm />} />
//         <Route path="/rfpedit" element={<RFPEdit />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RPFForm from './pages/RPFForm';
import RFPEdit from './pages/RFPEdit';
import RFPList from './pages/RFPList';
import RFPDetailView from './pages/RFPDetailView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RPFForm />} />
        <Route path="/rfpedit" element={<RFPEdit />} />
        <Route path="/rfplist" element={<RFPList />} />
        <Route path="/rfpdetailview/:id" element={<RFPDetailView />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;

