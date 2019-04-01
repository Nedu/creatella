import React from 'react';

import { formatDate, formatCurrency } from '../utils';
import '../assets/styles/main.scss';

const Products = ({ products, sortProducts }) =>
    <div className="productsContainer">
        <h1>Products Grid</h1>
        { /* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>
        <div>
            <select className="styledSelect" onChange={e => sortProducts(e.target.value)}>
                <option value="">Sort By:</option>
                <option value="size">size</option>
                <option value="price">price</option>
                <option value="id">id</option>
            </select>
        </div>
        <div className="list">
            {products.map((item, i) => <div key={item.id}>
                <div className="list-row">
                    <div className="productFace" style={{fontSize: item.size}}>{item.face}</div>
                    <div className="productPrice">{`price: $${formatCurrency(item.price)}`}</div>
                    <div className="productSize">{`font size: ${item.size} px`}</div>
                    <div className="productDate">{formatDate(item.date)}</div>
                </div>
                { (i + 1) % 20 === 0 && <div key={item.id}>
                    <p>A word from our sponsors:</p>
                    <img src={`${process.env.API_URL}/ads/?r=${(Math.floor(Math.random()*1000) * (i))}`} alt="advert" />
                </div>}
            </div>)}
        </div>
    </div>

export default Products