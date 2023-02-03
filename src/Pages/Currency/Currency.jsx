import React from 'react';
import Button from '../../Components/Button/Button';
import './Currency.css';

export default function Currency() {
  return (
    <div className="Currency">
      <div className="firstCurrency">
        <p className="emoji">&#128178;</p>
        <p>You have </p>
        <h1 className="currency_heading">5756$</h1>
        <p>in your account</p>
      </div>
      <div className="secondCurrency">
        <div>
          <div>
            <span className="default">Choose Your Default Currency</span>{' '}
            <select>
              <option value="">XAF </option>
              <option value="">USD &#128178;</option>
              <option value="">EURO</option>
            </select>
          </div>
          <p className="even1">
            <sup>Your XAF Balance:</sup> <span>26 XAF</span>
          </p>
          <p className="even2">
            <sup>Your Dollar Balance:</sup> <span>26 USD</span>
          </p>
          <p className="even3">
            <sup>Your Euro Balance:</sup> <span>26 Euro</span>
          </p>
          <div className="button_Currency">
            <Button title="Deposit" />
            <Button title="Add Currency" />
            <Button title="Converter" />
          </div>
        </div>
      </div>
    </div>
  );
}
