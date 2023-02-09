/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-self-compare */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import Button from '../../Components/Button/Button';
import ButtonAddCurrency from '../../Components/Button/ButtonAddCurrency';
import QuizContext from '../../Components/Context/Context';
import Modal from '../../Components/Modal/Modal';
import ModalAddCurrency from '../../Components/Modal/ModalTransfer';
import ModalConvert from '../../Components/Modal/ModalConvert';
import './Currency.css';

export default function Currency() {
  const [modal, setModal] = useState(false);
  const [AddCurrency, setAddcurrency] = useState(false);
  const [Convert, setConvert] = useState(false);
  const [addAmount1, setaddAmount1] = useState(10000);
  const [addAmount2, setaddAmount2] = useState(100);
  const [addAmount3, setaddAmount3] = useState(500);
  const [usdCurrency, setusdCurrency] = useState(0);
  const [select, setSelect] = useState();

  useEffect(() => {
    if (select === undefined) {
      const add = addAmount1 * 0.0016;
      const add3 = addAmount3 * 1.07;
      const add4 = `${(add + addAmount2 + add3).toFixed(2)}USD`;
      setusdCurrency(add4);
    } else if (select === 'USD') {
      const add = addAmount1 * 0.0016;
      const add3 = addAmount3 * 1.07;
      const add4 = (add + addAmount2 + add3).toFixed(2);
      setusdCurrency(add4 + select);
    } else if (select === 'XAF') {
      const add = addAmount2 * 610.76;
      const add3 = addAmount3 * 655.76;
      const add4 = (add + addAmount1 + add3).toFixed(2);
      setusdCurrency(add4 + select);
    } else {
      const add = addAmount1 * 0.0015;
      const add3 = addAmount2 * 0.93;
      const add4 = (add + addAmount3 + add3).toFixed(2);
      setusdCurrency(add4 + select);
    }
  });

  function handleChange(e) {
    setSelect(e.target.value);
  }

  return (
    <QuizContext.Provider
      value={{
        addAmount1,
        addAmount2,
        addAmount3,
        setaddAmount1,
        setaddAmount2,
        setaddAmount3,
      }}
    >
      <div className="Currency">
        {modal === true && <Modal setModal={setModal} />}
        {AddCurrency === true && (
          <ModalAddCurrency setAddcurrency={setAddcurrency} />
        )}
        {Convert === true && <ModalConvert setConvert={setConvert} />}
        <div className="firstCurrency">
          <p className="emoji">&#128178;</p>
          <p>You have </p>
          <h2 className="currency_heading">{usdCurrency}</h2>
          <p>in your account</p>
        </div>
        <div className="secondCurrency">
          <div>
            <div>
              <span className="default">Choose Your Default Currency</span>{' '}
              <select onChange={handleChange}>
                <option value="USD">USD</option>
                <option value="XAF">XAF</option>
                <option value="EURO">EURO</option>
              </select>
            </div>
            <p className="even1">
              <sup>Your XAF Balance:</sup> <span>{addAmount1} XAF</span>
            </p>
            <p className="even2">
              <sup>Your Dollar Balance:</sup> <span>{addAmount2} USD</span>
            </p>
            <p className="even3">
              <sup>Your Euro Balance:</sup> <span>{addAmount3} EURO</span>
            </p>
            <div className="button_Currency">
              <Button title="Deposit" setModal={setModal} />
              <ButtonAddCurrency
                title="Transfer"
                setAddcurrency={setAddcurrency}
              />
            </div>
          </div>
        </div>
      </div>
    </QuizContext.Provider>
  );
}
