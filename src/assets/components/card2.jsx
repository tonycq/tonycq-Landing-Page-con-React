
const Card2 = (props) => {
  return (
    <div className="card mb-4 text-center"> 
      <div className="row g-0 align-items-center justify-content-center"> 
        <div className="col-md-4">
          <img src={props.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">Habilidades para ser un desarrollador web</p>
            <a href="#" className="btn btn-primary">Ir</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
