/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

export default function ButtonCovert({ title, color, setConvert }) {
  return (
    <div>
      <button
        type="submit"
        style={{ backgroundColor: color }}
        className="pool"
        onClick={() => setConvert(true)}
      >
        {title}
      </button>
    </div>
  );
}
