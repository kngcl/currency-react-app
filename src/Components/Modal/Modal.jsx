/* eslint-disable radix */
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './Modal.css';
import './deposit.css';
import QuizContext from '../Context/Context';

export default function Modal({ setModal }) {
  const {
    addAmount1,
    addAmount2,
    addAmount3,
    setaddAmount1,
    setaddAmount2,
    setaddAmount3,
  } = useContext(QuizContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    if (values.currency === 'USD') {
      setaddAmount1(addAmount1 + parseInt(values.deposit));
      setModal(false);
    } else if (values.currency === 'XAF') {
      setaddAmount2(addAmount2 + parseInt(values.deposit));
      setModal(false);
    } else if (values.currency === 'EURO') {
      setaddAmount3(addAmount3 + parseInt(values.deposit));
      setModal(false);
    } else {
      alert('Not possible');
    }
  };

  return (
    <form className="backshadow" onSubmit={handleSubmit}>
      <div className="custom_modal">
        <div className="delete_icon" onClick={() => setModal(false)}>
          x
        </div>
        <div>
          <h1>Deposit Amount &#x1F911;</h1>
        </div>
        <div className="Deposit_amount">
          <div className="deposit">
            <label htmlFor="amount">Enter Amount:</label>
            <input type="number" name="deposit" placeholder="Enter Amount" />
          </div>
          <div className="selectoption">
            <label htmlFor=""> Choose Currency</label>
            <select name="currency">
              <option value="USD" name="USD">
                XAF{' '}
              </option>
              <option value="XAF" name="XAF">
                USD &#128178;
              </option>
              <option value="EURO" name="EURO">
                EURO{' '}
              </option>
            </select>
          </div>
        </div>
        <div className="addButton">
          <button className="pool">Add</button>
        </div>
      </div>
    </form>
  );
}
