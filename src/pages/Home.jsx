import React from "react";
import Title from "../components/Title";


const title = "Platos saludables";

const Home = () => {
  return (
    <>
      <Title className="h1HOme" text={title} />
      <p>
       Aquí encontrarás una serie de platos saludables con el tiempo de elaboración y los ingredientes que  necesitas
      </p>
    </>
  );
};

export default Home;




