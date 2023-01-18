import { useContext } from 'react';
import { DataContext } from '../DataContext';
import '../css/Products.css';

function Products() {

  const { products } = useContext(DataContext);
  
  return (
    <div id="product">
        {
          products.map(product => (
            <div className="card" key={product._id}>
              <img src={product.src} alt="product" />
              <div className="content">
                <h3>{product.title}</h3>
                <span>${product.price}</span>
                <button>Add to card</button>
              </div>
            </div>
          ))
        }
    </div>
  );
}

export default Products;