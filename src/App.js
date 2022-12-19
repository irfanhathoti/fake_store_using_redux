import './App.css';
import ProductList from './Components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='*' element={<h2>Page Not Found</h2>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
