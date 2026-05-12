import Header from './Header';
import { useSelector,useDispatch } from 'react-redux';
import { increase,decrease,remove } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
export default function CartItem(){
 const items=Object.values(useSelector(s=>s.cart.items));
 const dispatch=useDispatch();
 const totalQty=items.reduce((t,i)=>t+i.qty,0);
 const total=items.reduce((t,i)=>t+i.qty*i.price,0);
 return <div><Header /><h2>Cart ({totalQty})</h2><h3>Total: R{total}</h3>{items.map(i=><div className='card' key={i.id}><img src={i.img}/><h3>{i.name}</h3><p>Unit: R{i.price}</p><p>Subtotal: R{i.qty*i.price}</p><button onClick={()=>dispatch(increase(i.id))}>+</button><span>{i.qty}</span><button onClick={()=>dispatch(decrease(i.id))}>-</button><button onClick={()=>dispatch(remove(i.id))}>Delete</button></div>)}<button onClick={()=>alert('Coming Soon')}>Checkout</button><Link to='/plants'><button>Continue Shopping</button></Link></div>
}

  const calculateTotalAmount = () => {
  return items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
};

