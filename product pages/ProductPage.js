import React from 'react';

const ProductPage = ({ product }) => {
  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <div className="product-info">
        <img src={product.imageUrl} alt={product.name} />
        <div className="product-details">
          <h2>Description</h2>
          <p>{product.description}</p>

          <h2>Available Colors</h2>
          <ul className="colors">
            {product.colors.map((color) => (
              <li key={color} style={{ backgroundColor: color }}></li>
            ))}
          </ul>

          <h2>Sizes</h2>
          <ul className="sizes">
            {product.sizes.map((size) => (
              <li key={size}>{size}</li>
            ))}
          </ul>

          <h2>Adversarial Pattern Options</h2>
          <ul className="patterns">
            {product.patterns.map((pattern) => (
              <li key={pattern}>
                <img src={pattern.imageUrl} alt={pattern.name} />
                <p>{pattern.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
