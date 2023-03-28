import React from "react";
import { useMediaQuery } from "react-responsive";
import("../styles/Content.css");

function Tendencias() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

const imgMontañasyMagia =  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1680022961/aenima/img/card_01_jtbtfr.png";
const imgPlayasYSol="https://res.cloudinary.com/dxsvkn4eo/image/upload/v1680022962/aenima/img/card_02_vnhnnz.png"
const imgNieveYAventuras=  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1680022962/aenima/img/card_03_wxuot4.png"

  return (
    <div
      id="container-tendencias"
      class="d-flex flex-column align-items-center "
    >
      <div
        id="container-cards"
        class="d-flex flex-column justify-content-center mx-5"
      >
        <h1
          class={
            isMobile
              ? "text-dark ms-5 mb-0 mt-5 pt-3 fs-4 "
              : "text-dark  pb-2 mt-5 pt-3 "
          }
        >
          {" "}
          TENDENCIAS
        </h1>
        <div class="d-md-flex flex-row justify-content-center align-items-center">
          {!isMobile ? (
            <>
              <div class="card border-0 m-1 w-25 shadow-sm ms-2 bg-body rounded">
                <img
                  src={imgMontañasyMagia}
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body mb-4 ms-2">
                  <span
                    id="badge-new"
                    class="badge position-absolute ms-2 fw-bold"
                  >
                    NUEVO
                  </span>
                  <h5 class="card-title mt-3  lh-1">Montañas y magia</h5>
                  <p class="card-text lh-3">
                    Aquí la descripción para <b>Montañas y magia.</b>
                  </p>
                </div>
              </div>
              <div class="card border-0 m-1 w-25 shadow-sm ms-2 bg-body rounded">
                <img
                  src={imgPlayasYSol}
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body mb-4 ms-2">
                  <h5 class="card-title mt-3 lh-1">Playas y sol</h5>
                  <p class="card-text lh-3 ">
                    La descripción de <b>Playas y sol</b> debe seresta.
                  </p>
                </div>
              </div>
              <div class="card border-0 m-1 w-25 shadow-sm ms-2 bg-body rounded">
                <img
                     src={imgNieveYAventuras}
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body mb-4 ms-2">
                  <h5 class="card-title mt-3 lh-1">Nieve y aventura</h5>
                  <p class="card-text lh-3 ">
                    Contiene la información de <b>Nieve y aventura.</b>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div class="card border-0  mx-5 my-4 mb-0 w-75 shadow-sm  bg-body rounded">
              <img
                   src={imgMontañasyMagia}
                class="card-img-top img-fluid"
                alt="..."
              />
              <div class="card-body mb-3 ms-2">
                <span
                  id="badge-new"
                  class="badge position-absolute ms-2 fw-bold"
                >
                  NUEVO
                </span>
                <h5 class="card-title fs-6 mt-3 lh-2">Montañas y magia</h5>
                <p class="card-text lh-3 ">
                  Aquí la descripción para <b>Montañas y magia.</b>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tendencias;
