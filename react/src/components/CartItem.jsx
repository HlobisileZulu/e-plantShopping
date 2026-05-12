import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <nav>
        <a href="#">Home</a> |
        <a href="#">Plants</a> |
        <a href="#">Cart ({calculateTotalQuantity()})</a>
      </nav>

      <h1>Shopping Cart</h1>
      <h2>Total Plants: {calculateTotalQuantity()}</h2>
      <h2>Total Cost: R{calculateTotalAmount()}</h2>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} width="120" />
          <h3>{item.name}</h3>
          <p>Unit Price: R{item.price}</p>
          <p>Total: R{item.price * item.quantity}</p>
          <button onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity+1}))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity-1}))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}
export default CartItem;

