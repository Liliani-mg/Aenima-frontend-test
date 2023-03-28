import React from "react";
import { useMediaQuery } from "react-responsive";
import("../styles/Content.css");

function BlogCards() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div id={isMobile? "container-blog-cards-mobile" : "container-blog-cards"} class="d-flex flex-column mb-5">

      <h1  class= {isMobile?"text-dark mx-5 mb-0 "
      : "text-dark "}>BLOG</h1>

      <div id={isMobile ? "cards-blog-mobile" : "cards-blog-desktop" } class={isMobile ? "d-flex flex-column align-items-center" : "d-flex flex-column-2 align-items-center justify-content-center"}>
        <div
          classs={
            isMobile ? "d-flex flex-row w-100" : "d-flex flex-column"
          }
        >
          <div class="card border-0 mt-5 bg-body rounded">
            <img
              src="src\assets\img\articulo_big_01.png"
              class="card-img-top img-fluid"
              alt="..."
              id="tendencias-img-card"
            />

            <div class="card-body ms-2 position-absolute bg-transparent">
              <h4 class="text-white mx-1 mt-3">CIUDAD</h4>
              <div id={isMobile?"blog-card-body-mobile":"blog-card-body-desktop"}>
                <h5 class="card-title mt-2 text-white">Artículo de puente</h5>
                {!isMobile && (
                  <h6 class="card-text mt-2 mb-3 text-white">
                    Un puente en construcción que permite salvar un accidente
                    geográfico.
                  </h6>
                )}
                <p>
                  <img width={13} src="src\assets\iconos\time.png" alt="icono reloj" />{" "}
                  Hace 2m
                </p>
              </div>
            </div>
          </div>
          <div class="card border-0 mt-5 bg-body rounded">
            <img
              src="src\assets\img\articulo_big_02.png"
              class="card-img-top img-fluid "
              alt="..."
              id="tendencias-img-card"
            />

            <div class="card-body ms-2 position-absolute bg-transparent">
              <h4 class="text-white mt-4">AVENTURA</h4>
              <div  id={isMobile?"blog-card-body-mobile":"blog-card-body-desktop"}>
                <h5 class="card-title mt-2 text-white">Artículo de bosque</h5>
                {!isMobile && (
                  <h6 class="card-text mt-2 mb-3 text-white">
                    Un puente en construcción que permite salvar un accidente
                    geográfico.
                  </h6>
                )}
                <p>
                  <img src="src\assets\iconos\time.png" alt="icono reloj" />{" "}
                  Hace 15m
                </p>
              </div>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div id="blog-little-cards" class="d-flex flex-column">
            <div  class="card border-0 ms-2 bg-body">
              <img
                src="src\assets\img\articulo_small_01.png"
                class="card-img-top rounded-0 img-fluid "
                alt="..."
              />

              <div class="card-body">
                <h6 class="card-title fw-bold">Articulo de elefante</h6>
                <p>
                  <img width={13} src="src\assets\iconos\time.png" alt="icono reloj" />{" "}
                  Hace 3h
                </p>
              </div>
            </div>
            <div class="card border-0 mt-2 ms-3 bg-body">
              <img
                src="src\assets\img\articulo_small_02.png"
                class="card-img-top rounded-0  img-fluid "
                alt="..."
              />

              <div class="card-body">
                <h6 class="card-title fw-bold ">Artículo de loro</h6>
                <p>
                  <img width={13} src="src\assets\iconos\time.png" alt="icono reloj" />{" "}
                  Hace 4h
                </p>
              </div>
            </div>
            <div class="card border-0 mt-1 ms-3 bg-body">
              <img
                src="src\assets\img\articulo_small_03.png"
                class="card-img-top rounded-0  img-fluid "
                alt="..."
              />

              <div class="card-body">
                <h6 class="card-title fw-bold">Artículo de camino</h6>
                <p>
                  <img width={13} src="src\assets\iconos\time.png" alt="icono reloj" />{" "}
                  Hace 8h
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogCards;
