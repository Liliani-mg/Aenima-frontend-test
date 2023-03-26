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
    <div id="container-tendencias" class="d-flex flex-column">
      <div id="container-cards" class="d-flex flex-column justify-content-center">
        <h1 class="text-dark fs-4 mx-3 px-4 pb-0 mt-5 pt-3">TENDENCIAS</h1>
        <div class="d-md-flex flex-row ms-3  mb-2">

            {
                !isMobile
                ?   info &&
            
                    info.map((e) => {
                  return (
                        <div key={e.id} class="card border-0 m-4 w-50 shadow-sm ms-5 bg-body rounded">
                          <img
                            src={e.image}
                            class="card-img-top img-fluid "
                            alt="..."
                          />
                          {lastIn.id == e.id &&
                           <span id="badge-new-desktop" class="badge position-absolute ">NUEVO</span>
                          }
                          <div class="card-body ms-2">
                            <h5 class="card-title mt-2 fs-6">{e.title}</h5>
                            <p class="card-text mt-2 mb-3">
                              {e.description}
                            </p>
                          </div>
                        </div>
                      );  
                        
                     
                    })
                :  <div key={lastIn.id} class="card border-0 m-4 w-75 shadow-sm  bg-body rounded">
                <img
                  src={lastIn.image}
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body mb-3 ms-2">
                <span id="badge-new" class="badge position-absolute ms-2 fw-bold">NUEVO</span>
                  <h5 class="card-title fs-6 mt-3 lh-2">{lastIn.title}</h5>
                  <p class="card-text lh-3 ">
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
