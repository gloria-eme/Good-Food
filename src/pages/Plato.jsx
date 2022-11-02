import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const Plato = () => {
  const [plato, setPlato] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getPlato = async () => {
      const data = await fetch(`http://localhost:3000/Recetas/${id}`);
      const res = await data.json();
      setPlato(res);
    };
    getPlato();
  }, []);

  if (!plato) return <p>Esta comida todavía no existe</p>;

  return (
    <>
      <Card plato={plato} />
    </>
  );
};

export default Plato;
