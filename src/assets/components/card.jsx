

const Card = (props) => {
  return (
    <div className="card mb-4">
      <img src={props.img} className="card-img-top img-fluid" alt="..." style={{ width: '349px', height: '289px'}} /> 
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Mejora tus habilidades.</p>
        <a href="#" className="btn btn-primary">Ir</a>
      </div>
    </div>
  );
};

export default Card;
