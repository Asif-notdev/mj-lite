import React, { useState } from 'react';
import '../styling/rfpstyle.css';
import { BsFillFileEarmarkTextFill} from 'react-icons/bs';

function formatDateToDdMmmYyyy(date) {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}

const Accordion = () => {
    const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([
        { id: 1, buyerName: 'SAIL', tenderId: 'SAIL1013', createDate: '2023/07/12', isActive: true, dueDate: '2023/07/22'},
        { id: 2, buyerName: 'TATA', tenderId: 'TATA0203', createDate: '2023/05/23', isActive: false, dueDate: '2023/05/30'},
        { id: 3, buyerName: 'COAL INDIA', tenderId: 'COAL0192' },
        { id: 4, buyerName: 'SAIL', tenderId: 'SAIL1013' },
        { id: 5, buyerName: 'TATA', tenderId: 'TATA0203' },
        { id: 6, buyerName: 'COAL INDIA', tenderId: 'COAL0192' },
        { id: 7, buyerName: 'SAIL', tenderId: 'SAIL1013' },
        { id: 8, buyerName: 'TATA', tenderId: 'TATA0203' },
        { id: 9, buyerName: 'COAL INDIA', tenderId: 'COAL0192' },
        { id: 10, buyerName: 'SAIL', tenderId: 'SAIL1013' },
        { id: 11, buyerName: 'TATA', tenderId: 'TATA0203' },
        { id: 12, buyerName: 'COAL INDIA', tenderId: 'COAL0192' },
      ]);
    const [prod, setProd] = useState([
        { pid: 1, prodName: 'Monitor'},
        { pid: 2, prodName: 'Screws'},
        { pid: 3, prodName: 'Mouse'},
        { pid: 3, prodName: 'Keyboard'}
      ]);

      // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    
    
  return (
    <div>
    {currentItems.map((item) => (
        <div key={item.id} className="accordion" id={`itemAccordion${item.id}`}>
                <div className="accordion-item">
                            <h6 className="accordion-header" id={`itemHeading${item.id}`}>
                                <button className="accordion-button" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#itemCollapse${item.id}`}>
                                    <BsFillFileEarmarkTextFill className="icon" />
                                    <h6 className='mx-3'>{item.buyerName}</h6>
                                    <h6 className='mx-1'>(Tender Id: {item.tenderId})
                                    </h6>
                                </button>
                            </h6>

                            <div id={`itemCollapse${item.id}`} 
                            className="accordion-collapse collapse" 
                            aria-labelledby={`itemHeading${item.id}`} 
                            data-bs-parent={`#itemAccordion${item.id}`}>
                            <div className='accordion-body'>
                                <table className='acc-table'>
                                    <tr>
                                        <td>
                                        List of Products:
                                            {prod.map((pdt) => (
                                                <li>{pdt.prodName} </li>
                                            ))}
                                        </td>
                                        <td>
                                        Other Details:
                                                <p>Date Created: {formatDateToDdMmmYyyy(item.createDate)}</p>
                                                <p>Tender Status: {item.isActive ? 'Open for Submissions' : 'Submission Closed'}</p>
                                                <p>Last Date of Submission: {formatDateToDdMmmYyyy(item.dueDate)}</p>
                                        </td>
                                        <td className='button-row'>
                                            <button className='yes-button tender-view-button'>View Tender</button>
                                        </td>
                                    </tr>
                                </table>
                                
                            </div>
                            </div>
                    
                </div>
        </div>
    ))}
    <nav aria-label="Page navigation example">
        <ul className="pagination mt-4 d-flex justify-content-center">
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Accordion;