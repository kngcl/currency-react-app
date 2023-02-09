/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

export default function Button({ title, color, setModal }) {
  return (
    <div>
      <button
        type="submit"
        style={{ backgroundColor: color }}
        className="pool"
        onClick={() => {
          setModal(true);
        }}
      >
        {title}
      </button>
    </div>
  );
}
