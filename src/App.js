import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Index.js';
import Viewcart from './components/Viewcart.js';
import ProductList from './components/ProductList.js';
import { navbarStyles, containerStyles } from './components/styling';
import CompanyLogo from './components/SiyaClothes.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar navbar-expand-lg navbar-light" style={navbarStyles.navbar}>
          <Link className="navbar-brand" to="/" style={navbarStyles.navbarBrand}>
            <img src={CompanyLogo} alt="Company Logo" width="80" height="80" className="d-inline-block align-top mr-2" />
            SiyaClothes
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav className="collapse navbar-collapse" id="navbarNav" style={navbarStyles.navbarNav}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={navbarStyles.navLink}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products" style={navbarStyles.navLink}>Shop</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cart" style={navbarStyles.navLink}>
                  <i className="fas fa-shopping-cart mr-1"></i>
                  My Cart
                </Link>
              </li>
              <form className="form-inline my-2 my-lg-0 ml-auto" style={navbarStyles.searchForm}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={navbarStyles.searchInput} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={navbarStyles.searchButton}>Search</button>
              </form>
            </ul>
          </nav>
        </header>
        <div className="container" style={containerStyles}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Viewcart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

