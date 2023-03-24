import React from "react";

function Tendencias() {
  const info = [
    { image: "src\assets\img\card_01.png", title: "Montañas y magia", description: "Aquí la descripción para Montañas y magia" }, 
    { image: "src\assets\img\card_02.png", title: "Playas y sol", description: "La descripción de Playas y sol debe seresta" },  
    { image: "src\assets\img\card_03.png", title: "Nieve y aventura", description: "Contiene la informació  de nieve y aventura" } 
];
  return (
  <div>
    <div class="d-flex flex-column ">
        <h1 class="text-dark fw-bold fs-4  m-5">TENDENCIAS</h1>
        <div>

        </div>
    </div>
  </div>
  );
}

export default Tendencias;
