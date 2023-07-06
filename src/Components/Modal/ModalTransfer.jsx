/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './Modal.css';
import './Transfer.css';
import QuizContext from '../Context/Context';

export default function ModalAddCurrency({ setAddcurrency }) {
  const {
    setaddAmount1,
    setaddAmount2,
    setaddAmount3,
    addAmount3,
    addAmount1,
    addAmount2,
  } = useContext(QuizContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    if (
      values.Currencyfrom === 'USD' &&
      values.Currencyto === 'XAF' &&
      values.TransferAmount <= addAmount2
    ) {
      const val = addAmount2 - values.TransferAmount;
      setaddAmount2(val);
      setaddAmount1(addAmount1 + values.TransferAmount * 610.76);
      setAddcurrency(false);
    } else if (
      values.Currencyfrom === 'USD' &&
      values.Currencyto === 'EURO' &&
      values.TransferAmount <= addAmount2
    ) {
      const val = addAmount2 - values.TransferAmount;
      setaddAmount2(val);
      setaddAmount3(addAmount3 + values.TransferAmount * 0.93);
      setAddcurrency(false);
    } else if (
      values.Currencyfrom === 'XAF' &&
      values.Currencyto === 'USD' &&
      values.TransferAmount <= addAmount1
    ) {
      const val = addAmount1 - values.TransferAmount;
      setaddAmount1(val);
      setaddAmount2(addAmount2 + values.TransferAmount * 0.0016);
      setAddcurrency(false);
    } else if (
      values.Currencyfrom === 'EURO' &&
      values.Currencyto === 'XAF' &&
      values.TransferAmount <= addAmount3
    ) {
      const val = addAmount3 - values.TransferAmount;
      setaddAmount3(val);
      setaddAmount1(addAmount1 + values.TransferAmount * 655.76);
      setAddcurrency(false);
    } else if (
      values.Currencyfrom === 'EURO' &&
      values.Currencyto === 'USD' &&
      values.TransferAmount <= addAmount3
    ) {
      const val = addAmount3 - values.TransferAmount;
      setaddAmount3(val);
      setaddAmount2(addAmount2 + values.TransferAmount * 1.07);
      setAddcurrency(false);
    } else if (
      values.Currencyfrom === 'XAF' &&
      values.Currencyto === 'EURO' &&
      values.TransferAmount <= addAmount1
    ) {
      const val = addAmount1 - values.TransferAmount;
      setaddAmount1(val);
      setaddAmount3(addAmount3 + values.TransferAmount * 0.0015);
      setAddcurrency(false);
    } else {
      alert('Transfer Amount is more than the current Balance ');
    }
  };
  return (
    <form className="backshadow" onSubmit={handleSubmit}>
      <div className="custom_modal">
        <div className="delete_icon" onClick={() => setAddcurrency(false)}>
          x
        </div>
        <p className="currencyAdd">Transfer &#128176;</p>
        <div className="deposit">
          <label htmlFor="amount">Enter Your Amount: </label>
          <input
            type="number"
            name="TransferAmount"
            placeholder="Transfered Amount"
          />
        </div>
        <div className="Transfer">
          <label htmlFor="">From</label>
          <select name="Currencyfrom">
            <option value="USD">USD</option>
            <option value="XAF">XAF</option>
            <option value="EURO">EURO</option>
          </select>
          <label htmlFor="">to</label>
          <select name="Currencyto">
            <option value="USD">USD</option>
            <option value="XAF">XAF</option>
            <option value="EURO">EURO</option>
          </select>
        </div>
        <div className="addButton">
          <button className="pool pool2">Confirm Transfer</button>
        </div>
      </div>
    </form>
  );
}
