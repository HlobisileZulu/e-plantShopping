import { Routes,Route,Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
export default function App(){
 return <Routes>
 <Route path='/' element={<div className='hero'><h1>Paradise Nursery</h1><AboutUs /><Link to='/plants'><button>Get Started</button></Link></div>} />
 <Route path='/plants' element={<ProductList />} />
 <Route path='/cart' element={<CartItem />} />
 </Routes>
}