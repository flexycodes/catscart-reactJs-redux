import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

// Store
import store from './store/store'

import './App.css';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductSingle from "./pages/ProductSingle";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
            {/* Header */}
            <Header />

            <Route path="/" component={Home} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/products/:id" component={ProductSingle} />
            <Route path="/cart" component={Cart} />

            {/* Footer */}
            <Footer /> 
        </div>
      </div>
    </Router>
  );
}

const AppwithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppwithStore;
