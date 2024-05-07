import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Switch } from 'react-router-dom'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Header'
import About from './pages/Header';
import Contact from './pages/Header';
import Products from './pages/Header';
import BuyNow from './pages/Header';
import NotFound from './pages/Header'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} />
        <Route path="/buy-now" component={BuyNow} />
        <Route component={NotFound} /> {/* Catch-all route for 404 */}
      </Switch>

      
      <Footer /> {/* Include Footer component here */}
    </BrowserRouter>
  );
}

export default App;
