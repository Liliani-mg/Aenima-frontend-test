import React from "react";
import { useMediaQuery } from "react-responsive";

function Footer() {

  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const logoFooter = "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1680022923/aenima/img/logo_02_mhj62y.png"
  const logoInstagram ="https://res.cloudinary.com/dxsvkn4eo/image/upload/v1680022749/aenima/instagram_ssmxyi.png"
  const logoFacebook ="https://res.cloudinary.com/dxsvkn4eo/image/upload/v1680022749/aenima/facebook_eyieyp.png"

  return (
    <footer 
    class={isMobile
    ?"d-flex flex-wrap justify-content-between align-items-center border-top bg-dark px-2 py-2 "
    :"d-flex flex-wrap justify-content-between align-items-center border-top bg-dark py-3  pb-4 "}>
      <div class="col-md-2 d-flex align-items-center ms-4 mt-1 mb-0 ">
        <span 
        class={isMobile
        ?"mb-2  mt-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        :"mb-2  mt-1 mx-5 px-4 mb-md-1 text-muted text-decoration-none lh-0"}>
          <img width={isMobile?60:67} src={logoFooter} alt="" />
        </span>
      </div>
      <div class={isMobile?"my-1 mx-4":"mx-5  px-5"}>
        <ul class="nav  justify-content-end list-unstyled d-flex flex-row pt-3">
          <li class="ms-2 p-2 pt-0">
            <img width={isMobile?15:13} src={logoInstagram} alt="instagram" />
          </li>
          <li class="ms-2">
            <img width={isMobile?15:13} src={logoFacebook}  alt="facebook" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
