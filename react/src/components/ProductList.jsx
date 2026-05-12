import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plants = [
{id:1,name:'Snake Plant',price:120,image:'https://picsum.photos/200?1',category:'Air Purifying'},
{id:2,name:'Peace Lily',price:150,image:'https://picsum.photos/200?2',category:'Air Purifying'},
{id:3,name:'Aloe Vera',price:130,image:'https://picsum.photos/200?3',category:'Medicinal'},
{id:4,name:'Mint',price:90,image:'https://picsum.photos/200?4',category:'Medicinal'},
{id:5,name:'Lavender',price:110,image:'https://picsum.photos/200?5',category:'Aromatic'},
{id:6,name:'Jasmine',price:140,image:'https://picsum.photos/200?6',category:'Aromatic'}
];

function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const categories = ['Air Purifying','Medicinal','Aromatic'];

  const getTotalQuantity = () => items.reduce((t,i)=>t+i.quantity,0);

  return (
    <div>
      <nav>
        <a href="#">Home</a> |
        <a href="#">Plants</a> |
        <a href="#">Cart ({getTotalQuantity()})</a>
      </nav>

      <h1>Paradise Nursery Plants</h1>

      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div>
            {plants.filter(p => p.category === category).map(plant => {
              const exists = items.find(item => item.id === plant.id);
              return (
                <div key={plant.id}>
                  <img src={plant.image} width="120" />
                  <h3>{plant.name}</h3>
                  <p>R{plant.price}</p>
                  <button
                    disabled={exists}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {exists ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
