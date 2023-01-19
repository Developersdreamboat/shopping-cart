import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';
import '../css/Products.css';

function Products() {

  const { products } = useContext(DataContext);
  
  return (
    <div id="product">
        {
          products.map(product => (
            <div className="card" key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img src={product.src} alt="product" />
              </Link>
              <div className="content">
                <h3><Link to={`/product/${product._id}`}>{product.title}</Link></h3>
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