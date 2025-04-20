import { useEffect } from "react";
import React from "react";

const AdsteraaBanner3 = () => {
  useEffect(() => {
    const containerId = "responsive-ad-container";

    // Clear any existing content inside the container
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = "";
    }

    // Set the ad options globally
    window.atOptions = {
      key: "04099928d4f1a02309f2654f7009353f",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    // Create the ad script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//www.highperformanceformat.com/04099928d4f1a02309f2654f7009353f/invoke.js";

    // Append script to the container
    container?.appendChild(script);
  }, []);

  return <div id="responsive-ad-container" className="my-4" />;
};

export default AdsteraaBanner3;
