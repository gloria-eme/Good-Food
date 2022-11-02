import React from "react";
import Title from "../components/Title";


const title = "Platos saludables";

const Home = () => {
  return (
    <>
      <Title className="h1Home" text={title} />
      <p className="pHome">
       Aquí encontrarás una serie de platos saludables con el tiempo de elaboración y los ingredientes que  necesitas
      </p>
      <img className='gif'
        src="https://www.gifimages.pics/images/quotes/english/general/gif-for-food-52650-148861.gif"
        alt="gif"></img>
    </>
  );
};

export default Home;




