import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";


const AddAFood = () => {
  
  
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const navigate = useNavigate();

  const createPlato = (ev) => {
   ev.preventDeFault();
    const newPlato = {
      id: uuidv4(),
      Name: name,
      Img: img,
      Time: time,
      Ingredients: ingredients
    };
    postPlato(newPlato);
  };


const postPlato = async (item) => {
  axios({
    method: "post",
    url:"http://localhost:3000/Recetas/",
    data: item
  })
};

  return (
    <div className="form">
      <h2>Añade a la lista el plato que quieras. 
        Sólo tienes que introducir el nombre del plato, una imagen, el tiempo y los ingredientes.</h2>
      <form onSubmit={(ev) => {createPlato(ev), navigate("/platos")}}>
        <fieldset>
          <legend>Nombre del plato</legend>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            
            onChange={(ev) => {
              setName(ev.target.value);
            }}
          />
          <label htmlFor="img">Url de la imagen:</label>
          <input
            type="text"
            id="img"
            
            onChange={(ev) => setImg(ev.target.value)}
          />
          <label htmlFor="time">Tiempo:</label>
          <input
            type="text"
            id="time"
            
            onChange={(ev) => setTime(ev.target.value)}
          />
          <label htmlFor="ingredients">Ingredientes:</label>
          <input
            type="text"
            id="ingredients"
           
            onChange={(ev) => setIngredients(ev.target.value)}
          />
        </fieldset>
        <input type="submit" value="Añadir"></input>
      </form>
      <div className="divForm">
            <h2>Vista previa</h2>
            <figure>
                <div>
                    <h3>{name}</h3>
                    <img src={img} alt={name} width="500px"/>
                </div>
                <h4>{time}</h4>
                <h4>{ingredients} </h4>
            </figure>
        </div>
    </div>
  );
};

export default AddAFood;

