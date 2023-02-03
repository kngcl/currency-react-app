/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

export default function Button({ title, color }) {
  return (
    <div>
      <button type="submit" style={{ backgroundColor: color }} className="pool">
        {title}
      </button>
    </div>
  );
}
