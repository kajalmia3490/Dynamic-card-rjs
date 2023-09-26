import { useState } from "react";
import "./Card.css";
const Card = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [storedData, setStoredData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      brand,
      price,
      image,
    };
    setStoredData([...storedData, newProduct]);

    setName("");
    setBrand("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="card-section">
      <form className="form-group" action="#" onSubmit={handleSubmit}>
        <input
          className="file-input"
          type="file"
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        />

        <h2>Product Name</h2>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <h2>Product Brand</h2>
        <input
          type="text"
          value={brand}
          required
          placeholder="Enter brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <h2>Product Price</h2>
        <input
          type="number"
          value={price}
          required
          placeholder="Enter price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <p className="btn">
          <button type="submit">Create a Product</button>
        </p>
      </form>

      <div className="card-show">
      <h1>All Products:</h1>
      <ul type="none">
          {storedData.map((item, index) => (
            <li key={index}>
              <p className="image">
                <img src={item.image} alt="..." />
              </p>
              <p className="name">Name: {item.name}</p>
              <p className="brand">Brand: {item.brand}</p>
              <p className="price">Price: <span>{item.price} BDT</span></p>
              <p className="btn">
                <button>Add To Cart</button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
