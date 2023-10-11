import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RPFForm from './pages/RPFForm';
import RFPEdit from './pages/RFPEdit';
import RFPList from './pages/RFPList';
import RFPDetailView from './pages/RFPDetailView';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './style.css';


function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<RPFForm />} />
        <Route path="/rfpedit" element={<RFPEdit />} />
        <Route path="/rfplist" element={<RFPList />} />
        <Route path="/rfpdetailview/:id" element={<RFPDetailView />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;

