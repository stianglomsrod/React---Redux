const Ninjas = ({ ninjas }) => {

  return (
    ninjas.map((ninja) => {
        return(<div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <br />
        </div>)
    })
  );
};

export default Ninjas;
