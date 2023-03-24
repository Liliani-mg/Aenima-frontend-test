import React from "react";

function Footer() {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center  my-4 border-top bg-dark pt-4 p-5 ">
      <div class="col-md-2 d-flex align-items-center ms-4 mt-0 mb-0">
        <span class="mb-2 mt-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <img src="src\assets\logo\logo_02.png" alt="" />
        </span>
      </div>
      <div class="ms-5 mt-0 mb-0">
        <ul class="nav  justify-content-end list-unstyled d-flex flex-row">
          <li class="ms-2 p-3 pt-0 pb-0">
            <img src="src\assets\iconos\instagram.png" alt="instagram" />
          </li>
          <li class="ms-2">
            <img src="src\assets\iconos\facebook.png" alt="facebook" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
