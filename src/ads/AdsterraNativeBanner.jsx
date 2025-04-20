import { useEffect } from "react";
import React from "react";

const AdsteraaNativeBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26433293.profitableratecpm.com/e2486723c7517c4bd7dc934191ffec07/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    const adDiv = document.getElementById("ad-container");
    if (adDiv) {
      adDiv.appendChild(script);
    }

    return () => {
      // Cleanup when component unmounts
      const container = document.getElementById("container-e2486723c7517c4bd7dc934191ffec07");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return <div id="ad-container"><div id="container-e2486723c7517c4bd7dc934191ffec07"></div></div>;
};

export default AdsteraaNativeBanner;
