import React, { useEffect, useState } from "react";
import SinglesChefs from "../SinglesChefs/SinglesChefs";

const Chefs = () => {
  const [allData, AllSetData] = useState([]);

  useEffect(() => {
    fetch("https://my-first-server-jkjoy99.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => AllSetData(data))
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      <div className="">
        <h2 className="text-7xl font-bold text-center text-orange-500 mt-20">
          Switzerland
        </h2>
        <p className="text-4xl text-orange-400 font-bold text-center">
          Our Chefs
        </p>
      </div>
      <div className="my-28 max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8 rounded">
        {allData.map((data) => (
          <SinglesChefs key={data.id} data={data}></SinglesChefs>
        ))}
      </div> 
    </>
  );
};

export default Chefs;
