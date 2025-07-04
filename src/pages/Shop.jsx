import React, { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const [getAxious, setGetAxious] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setGetAxious(response.data);
  };

  console.log(getAxious);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="shop-contain">
      <h1>Fake Api Consumption</h1>
      <table className="m-10">
        <thead>
          <tr>
            {/* <th>Image</th> */}
            <th>Category</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {getAxious.map(({ image, category, title, price }, i) => (
            <tr key={i}>
              <td>
                <img src={image} alt={title} className="w-20 h-20" />
              </td>
              <td>{category}</td>
              <td>{title}</td>
              <td>${price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shop;
