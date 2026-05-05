import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Header(){
 const items=useSelector(s=>s.cart.items);
 const count=Object.values(items).reduce((t,i)=>t+i.qty,0);
 return <header className='header'>
 <Link to='/'>Home</Link>
 <Link to='/plants'>Plants</Link>
 <Link to='/cart'>Cart ({count})</Link>
 </header>
}