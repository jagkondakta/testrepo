import React from "react";
import HelloWorld from "./HelloWorld";
const Logo = "https://logrocket-assets.io/static/home-hero-c97849b227a3d3015730e3371a76a7f0.svg";

function FirstComponent() {
    return (
      <>
        <HelloWorld firstName="jagadesh" lastName="paladugula"></HelloWorld>
        <HelloWorld firstName="neetha" lastName="paladugula"></HelloWorld>
      </>
    );
  }
  
  export default FirstComponent;