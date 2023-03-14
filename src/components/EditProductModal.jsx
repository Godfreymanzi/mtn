import React, { useState } from 'react';
import axios from 'axios';



export default function EditProductModal({ product, onClose }) {
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [brand, setBrand] = useState(product.brand);
    const [category, setCategory] = useState(product.category);
    const [products, setProducts] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/products/${product.id}`, {
            title,
            price,
            brand,
            category,
        })
        .then(response => {
            // Update products state with the updated product
            const updatedProducts = products.map(p => {
                if (p.id === product.id) {
                    return response.data;
                }
                return p;
            });
            setProducts(updatedProducts);

            // Close the modal
            onClose();
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Brand:</label>
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <button type="submit">Update</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}
