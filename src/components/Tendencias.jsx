import React from "react";
import { useMediaQuery } from "react-responsive";
import("./Content.css");

function Tendencias() {
    const isMobile = useMediaQuery({ query: "(max-width: 900px)" });


  const info = [
    {
        id:2,
      image: "src/assets/img/card_01.png",
      title: "Montañas y magia",
      description: "Aquí la descripción para Montañas y magia",
    },
    {
        id:1,
      image: "src/assets/img/card_02.png",
      title: "Playas y sol",
      description: "La descripción de Playas y sol debe seresta",
    },
    {
        id:0,
      image: "src/assets/img/card_03.png",
      title: "Nieve y aventura",
      description: "Contiene la informació  de nieve y aventura",
    },
  ];
  const lastIn = info.find(e => e.id === Math.max(e.id))
  return (
    <div>
      <div id="container-cards" class="d-flex flex-column ">
        <h1 class="text-dark fw-bold fs-4  m-5 mb-1 p-4 pb-0">TENDENCIAS</h1>
        <div class="d-md-flex flex-row ms-5 mb-5">

            {
                !isMobile
                ?   info &&
            
                    info.map((e) => {
                  return (
                        <div key={e.id} class="card border-0 m-4 w-50 shadow  bg-body rounded">
                          <img
                            src={e.image}
                            class="card-img-top img-fluid"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title fw-bold fs-6">{e.title}</h5>
                            <p class="card-text fs-6 ">
                              {e.description}
                            </p>
                          </div>
                        </div>
                      );  
                        
                     
                    })
                :  <div key={lastIn.id} class="card border-0 m-4 w-75 shadow  bg-body rounded">
                <img
                  src={lastIn.image}
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body">
                <span class="badge bg-secondary">New</span>
                  <h5 class="card-title fw-bold fs-6">{lastIn.title}</h5>
                  <p class="card-text fs-6 ">
                    {lastIn.description}
                  </p>
                </div>
              </div>
                    
            }
        

        </div>
      </div>
    </div>
  );
}

export default Tendencias;
