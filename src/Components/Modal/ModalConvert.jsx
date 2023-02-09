/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Modal.css';

export default function ModalConvert({ setConvert }) {
  return (
    <div className="backshadow">
      <div className="custom_modal">
        <div className="delete_icon" onClick={() => setConvert(false)}>
          x
        </div>
        <p>Convert</p>
      </div>
    </div>
  );
}
