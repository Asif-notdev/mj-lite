import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RPFForm from './pages/RPFForm';
import RFPEdit from './pages/RFPEdit';
import BidSubmit from './pages/BidSubmission';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BidSubmit />} />
        {/* <Route path="/" element={<RPFForm />} /> */}
        <Route path="/rfpedit" element={<RFPEdit />} /> 
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
