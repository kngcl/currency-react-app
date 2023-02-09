/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

export default function ButtonAddCurrency({ title, color, setAddcurrency }) {
  return (
    <div>
      <button
        type="submit"
        style={{ backgroundColor: color }}
        className="pool"
        onClick={() => setAddcurrency(true)}
      >
        {title}
      </button>
    </div>
  );
}
