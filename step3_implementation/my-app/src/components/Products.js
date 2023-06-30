import { useState } from 'react';

const Products = () => {
	const [products, setProducts] = useState([
		{id: 1, name:"Product 1", cost: "$XX.XX", type: "Primers", img: "insert image source here"}
	]);


	return (
		<div>
			<h6>Pinned</h6>
			{products.map((product) => (
				<div className="products-preview" key={product.id}>
					This is where products go.
				</div>
			))}



		</div>

	);
}



export default Products;