import { useEffect } from "react";
import React from "react";

const AdsteraaBanner2 = () => {
  useEffect(() => {
    const containerId = "iframe-ad-container";

    // Clear any previous ad script
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = "";
    }

    // Define ad options globally
    window.atOptions = {
      key: "8a8a2f0c04e648ec00e457f72d87b1a9",
      format: "iframe",
      height: 300,
      width: 160,
      params: {},
    };

    // Create and inject script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//www.highperformanceformat.com/8a8a2f0c04e648ec00e457f72d87b1a9/invoke.js";

    container?.appendChild(script);
  }, []);

  return <div id="iframe-ad-container" className="my-4" />;
};

export default AdsteraaBanner2;
