import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Content.css";

function TopContent() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div class="d-flex flex-column-2 bg-light">
      <div class="d-flex  p-5 " id="container-top-content">
        <div
          class={
            isMobile
              ? "w-100 d-flex justify-content-center"
              : "w-75 d-flex justify-content-center"
          }
        >
          <div id="title-content" class="d-flex flex-column m-1 mt-5 mb-3 ">
            <div class=" d-flex flex-row border-bottom border-2 border-white mt-5 ">
              <img
                class="ms-1 mt-2 mb-0"
                src="src\assets\iconos\ic_pin.png"
                weight={isMobile ? 20 : 30}
                height={isMobile ? 20 : 30}
                alt=""
              />
              <h1
                class={
                  isMobile
                    ? "ms-3 mb-3 mt-0 fw-bold fs-3"
                    : "m-3 mt-0 fw-bold fs-1 "
                }
              >
                AMERICA DEL SUR
              </h1>
            </div>
            <h3 class="mt-3 fs-4 fw-bold lh-base">
              Lugares maravillosos por America del Sur
            </h3>
            {!isMobile && (
              <p class="fw-normal lh-base fs-6">
                Estos son algunos lugares que elijen la mayoría de los turistas
                que visitan America del Sur.
              </p>
            )}

            <div id="container-number" class="d-inline-flex  ">
              <p id="display-number" class=" w-50">
                {" "}
              </p>
              <div id="circle-number-top">
                <h6 class="text-dark fw-bold m-2  lh-1 ">01</h6>
              </div>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div class="d-flex flex-row-2 w-75 justify-content-end ">
            <div></div>
            <div class="d-flex flex-column w-50 ">
              <div id="next-adventure" class="ms-4">
                <h5 class="fw-bold fs-6 mt-2 mb-1 ">
                  {" "}
                  PRÓXIMA AVENTURA{" "}
                  <img class="ms-2" src="src\assets\iconos\arrow.png" alt="" />
                </h5>
                <p class="fw-bold mb-2">Europa Meridional</p>
                <p class="fw-normal lh-2">
                  Forman parte veinte países, ej. España, Francia, etc.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopContent;
