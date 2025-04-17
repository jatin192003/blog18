import { useEffect } from "react";
import React from "react";

const AdsterraBanner = () => {
  useEffect(() => {
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        'key' : '6668a1dddcd1dbde121f3483231c556b',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;

    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = "//www.highperformanceformat.com/6668a1dddcd1dbde121f3483231c556b/invoke.js";

    const container = document.getElementById("adsterra-banner");
    if (container) {
      container.innerHTML = ""; // Clear any previous ad
      container.appendChild(configScript);
      container.appendChild(adScript);
    }
  }, []);

  return <div id="adsterra-banner" style={{ textAlign: "center" }} />;
};

export default AdsterraBanner;
