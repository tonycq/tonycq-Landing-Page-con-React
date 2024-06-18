import React from 'react';
import Navbar from './assets/components/nabvar';
import Card2 from './assets/components/card2';
import Card from './assets/components/card';

import img1 from './assets/img/camino.png';
import img2 from './assets/img/dev.png';
import img3 from './assets/img/fullstack.jpg';
import img4 from './assets/img/devs.png';

function App() {
  return (
    <>
      <Navbar />
      <Card2 name="Construye proyectos" img={img4} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <Card name="Camino del Desarrollador" img={img1} />
          </div>
          <div className="col-md-4">
            <Card name="Tecnologías" img={img2} />
          </div>
          <div className="col-md-4">
            <Card name="Habilidades" img={img3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
