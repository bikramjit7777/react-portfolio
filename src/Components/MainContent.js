import React from "react";

import pc from "../assets/images/pcimage.jpg";
import image from "../assets/images/pcimage.jpg";
export default function MainContent() {
  return (
    <>
      <div className="banner ">
        <img src={image} alt="Laptop image"/>

        <div className="bannertext">
          <p>
            Bikramjit Singh Khokhar
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
