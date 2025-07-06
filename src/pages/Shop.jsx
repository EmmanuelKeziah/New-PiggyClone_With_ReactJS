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
    <div className="  min-h-screen flex items-center justify-center flex-col md:px-10 px-5 py-10 lg:px-12">
      <div className=" mb-3">
        <h1 className=" font-bold bg-gray-600 text-white p-3 rounded-lg text-2xl ">
          List of All Available Products
        </h1>
      </div>

      <div className=" flex flex-wrap justify-center bg-gray-100 p-5 max-w-[1280px] px-16 mx-auto rounded-lg">
        {getAxious.map((data, i) => (
          <div
            key={i}
            className="w-[30%] h-[500px] m-2 p-4 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col justify-between "
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[200px] object-cover rounded-lg mx-auto"
            />
            <h2 className="font-bold text-lg mb-1">{data.title}</h2>
            <p className="text-gray-700 mb-2 line-clamp-4">
              {data.description}
            </p>
            <p className="text-green-600 font-semibold">${data.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
