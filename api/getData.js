const getData = async () => {
    const data = await fetch(`http://localhost:3000/Recetas/`);
    const res = await data.json();
    return res;
};
  
export default getData;