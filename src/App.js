import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link
import RPFForm from './pages/RPFForm';
import RFPEdit from './pages/RFPEdit';
import RFPList from './pages/RFPList';
import RFPDetailView from './pages/RFPDetailView';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './style.css';
import BidSubmit from './pages/BidSubmission';
import BidDetailView from './pages/BidDetailView';
import Draftlist from './pages/Draftlist';

import { Container } from 'react-bootstrap';
import ItemList from './pages/VendorHome';
import RFPDraft from './pages/RfpDraft';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<RPFForm />} />
        <Route path="/rfpedit" element={<RFPEdit />} />
        <Route path="/rfplist" element={<RFPList />} />
        <Route path="/draftlist" element={<Draftlist />} />
        <Route path="/rfpdraft" element={<RFPDraft />} />
        <Route path="/rfpdetailview/:id" element={<RFPDetailView />} />
        <Route path="/bidsubmission" element={<BidSubmit />} />
        <Route path="/vendorhome" element={<ItemList />} />
        <Route path="/biddetailview/:id" element={<BidDetailView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
