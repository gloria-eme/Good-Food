import Poster from "./Poster";

const Card = ({ plato }) => {

  return (
    <section className="sectionCard">
      <Poster key={plato.name} item={plato} />
      <div className="divCard">
        <h3>Tiempo: {plato.time}</h3>
        <h3>Ingredientes: {plato.ingredients}</h3>
      </div>
    </section>
  );
};

export default Card;