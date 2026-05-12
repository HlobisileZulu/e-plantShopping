import plants from '../data/plants';
import Header from './Header';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
export default function ProductList(){
 const dispatch=useDispatch();
 const items=useSelector(s=>s.cart.items);
 const cats=[...new Set(plants.map(p=>p.cat))];
 return <div><Header />{cats.map(cat=><div key={cat}><h2>{cat}</h2><div className='grid'>{plants.filter(p=>p.cat===cat).map(p=>{
 const added=!!items[p.id];
 return <div className='card' key={p.id}><img src={p.img}/><h3>{p.name}</h3><p>R{p.price}</p><button disabled={added} onClick={()=>dispatch(addToCart(p))}>{added?'Added to Cart':'Add to Cart'}</button></div>
})}</div></div>)}</div>
 <button
 disabled={itemExists}
 onClick={() => dispatch(addItem(plant))}
>
 {itemExists ? "Added to Cart" : "Add to Cart"}
</button>
}

