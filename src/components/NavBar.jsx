import React from "react";
import { useMediaQuery } from "react-responsive";
import("../styles/NavBar.css");


function NavBar() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const logo = "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1680022923/aenima/img/logo_01_zzrzvl.png"
   
  return (
    <nav class={isMobile ? "navbar navbar-expand-md navbar-light bg-light pt-2 pb-2 shadow-sm bg-body " : "navbar navbar-expand-md navbar-light bg-light py-1 shadow-sm px-5 bg-body fixed-top"}>
      <img src={logo} alt="logo" class="mx-5 px-2 mt-0 mb-0" width={isMobile ? 85 : 90} />
      <button
        class={isMobile ?"navbar-toggler border-0 mt-0 mb-0":"navbar-toggler border-0 m-5 mt-0 mb-0"}
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
        
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class={isMobile ? "collapse navbar-collapse" : "collapse navbar-collapse d-flex justify-content-end"} id="navbarText">
       
          <ul class="navbar-nav mx-5 px-4">
            <li class="nav-item active mx-1">
              <a class="nav-link " href="#">
                HOME{" "}
              </a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link " href="#">
                TENDENCIAS
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link " href="#">
                BLOG
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
}
export default NavBar;
