import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductSingle from "./pages/ProductSingle";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          {/* Header */}
          <Header />

          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={ProductSingle} />
          <Route path="/cart" component={Cart} />

          {/* Footer */}
          <Footer /> 
        </Router>
      </div>
    </div>
  );
}

export default App;
