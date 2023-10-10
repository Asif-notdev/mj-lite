import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BidSubmit from './pages/BidSubmission';
import FileUploadComponent from './MyTesting/DynemicFileUploading';
import MyDynemicFileAdding from './MyTesting/MyNew';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
      <BidSubmit/>

    {/* <FileUploadComponent/> */}


    {/* <MyDynemicFileAdding/>
    <MyDynemicFileAdding/> */}
  
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
