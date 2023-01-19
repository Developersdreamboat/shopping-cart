import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataContext } from '../DataContext';

function Details() {
	const { id } = useParams();
	const { products } = useContext(DataContext);
	const [product, setProduct] = useState([]);
	const getProduct = () => {
		if(id) {
			const res = products;
			const data = res.filter(item => item._id === id)
			setProduct(data);
		}
	};

	useEffect(() => { 
		getProduct();
	}, []);
	
	return (
		<>
			{
				product.map(item => (
					<div key={item._id}>
						<img src={process.env.PUBLIC_URL + item.src} alt="product"/>
						<div className="box">
							<div className="row">
								<h2>{item.title}</h2>
								<span>${item.price}</span>
							</div>
							<p>{item.description}</p>
							<Link to="/cart" className="cart">
								Add to cart
							</Link>
						</div>
					</div>
				))
			}
		</>
	);
}

export default Details;