import React from "react";
import { useMediaQuery } from "react-responsive";
import ("../styles/Content.css");

function TopContent() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div class="d-flex flex-column-2 bg-light">
      <div id="container-top-content" class={isMobile?"d-flex  p-3 mt-0 my-5 mb-0 " :"d-flex  p-5 my-4 mb-0 "}>
        <div
          class={
            isMobile
              ? "w-100 d-flex justify-content-center"
              : "w-75 d-flex justify-content-center"
          }
        >
          <div id="title-content" class={isMobile?"d-flex flex-column m-3 mt-5 pt-5 ":"d-flex flex-column m-1 mt-5 mb-3 pt-5 px-5 "}>
            <div class=" d-flex flex-row border-bottom border-2 border-white mt-5 ">
              <img
                class="ms-1 mt-2 mb-1"
                src="src\assets\iconos\ic_pin.png"
                weight={isMobile ? 16 : 26}
                height={isMobile ? 16 : 26}
                alt=""
              />
              <h1
                class={
                  isMobile
                    ? "ms-2 mb-2 mt-0 pb-2 fw-bold fs-3"
                    : "m-3 mt-0 pb-2 "
                }
              >
                AMERICA DEL SUR
              </h1>
            </div>
            <h3 class="mt-3 lh-base">
              Lugares maravillosos por America del Sur
            </h3>
            {!isMobile && (
              <p class="lh-base ">
                Estos son algunos lugares que elijen la mayoría de los turistas
                que visitan America del Sur.
              </p>
            )}

            <div id={isMobile?"container-number-mobile" :"container-number" }class="d-inline-flex  ">
              <p id="display-number" class="">
                {" "}
              </p>
              <div id="circle-number-top">
                <h6 class="text-dark fw-bold m-2 lh-1 ">01</h6>
              </div>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div class="d-flex flex-row-2 w-75 justify-content-end ">
            <div></div>
            <div class="d-flex flex-column">
              <div id="next-adventure" class="">
                <h5 class="mt-2 mb-2 mx-2 lh-2">
                  {" "}
                  PRÓXIMA AVENTURA{" "}
                  <img class="ms-2 pb-1" src="src\assets\iconos\arrow.png" width={4.8} alt="" />
                </h5>
                <h6 class="fw-bold mb-2 mx-2">Europa Meridional</h6>
                <p class="fw-normal lh-2 mx-2">
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
