import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RPFForm from './pages/RPFForm';
import RFPEdit from './pages/RFPEdit';
import RFPList from './pages/RFPList';
import RFPDetailView from './pages/RFPDetailView';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './style.css';
import BidSubmit from './pages/BidSubmission';


import { Container } from 'react-bootstrap';
import ItemList from './pages/VendorHome';
import RFPDraft from './pages/RfpDraft';
function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<RPFForm />} />
        <Route path="/rfpedit" element={<RFPEdit />} />
        <Route path="/rfplist" element={<RFPList />} />
        <Route path="/rfpdraft" element={<RFPDraft />} />
        <Route path="/rfpdetailview/:id" element={<RFPDetailView />} />
        <Route path="/bidsubmission" element={<BidSubmit />} />
        <Route path="/vendorhome" element={<ItemList />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;

