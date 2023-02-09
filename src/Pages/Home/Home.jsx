import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import vector from '../../images/1233.jpg';

export default function Home() {
  return (
    <div className="home_background">
      <div className="firstpart">
        <h1 className="homepage">Welcome to your Wallet </h1>
        <Link to="/Currency">
          <button type="submit" className="first_button">
            {' '}
            next
          </button>
        </Link>
      </div>
      <div className="secondpart">
        <img src={vector} alt="bitcoin" className="dollar" />
      </div>
    </div>
  );
}
