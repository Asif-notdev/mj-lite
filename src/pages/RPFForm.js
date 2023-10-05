// src/components/RFPForm.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const RFPForm = () => {
  const { register, handleSubmit, control, getValues, setValue } = useForm();
  const [items, setItems] = useState([{ name: '', quantity: '', description: '' }]);

  const onSubmit = (data) => {
    // Handle form submission logic (e.g., send data to server)
    console.log(data);
  };

  const addNewItem = () => {
    setItems([...items, { name: '', quantity: '', description: '' }]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {items.map((item, index) => (
        <div key={index} className="mb-3 border p-3">
          <h5>Proposal Item {index + 1}</h5>
          <div className="mb-3">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              {...register(`items[${index}].name`, { required: 'Name is required' })}
            />
          </div>
          <div className="mb-3">
            <label>Quantity:</label>
            <input
              type="text"
              className="form-control"
              {...register(`items[${index}].quantity`, { required: 'Quantity is required' })}
            />
          </div>
          <div className="mb-3">
            <label>Description:</label>
            <textarea
              className="form-control"
              {...register(`items[${index}].description`, { required: 'Description is required' })}
            />
          </div>
          <button type="button" className="btn btn-danger" onClick={() => removeItem(index)}>
            Remove Item
          </button>
        </div>
      ))}

      <button type="button" className="btn btn-success" onClick={addNewItem}>
        Add Item
      </button>

      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Submit RFP
        </button>
      </div>
    </form>
  );
};

export default RFPForm;
