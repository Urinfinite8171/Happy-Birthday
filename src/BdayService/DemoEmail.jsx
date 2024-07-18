import React, { useRef } from "react";

function DemoEmail() {
  const divRef = useRef(null);

  const downloadImage = () => {
    window.htmlToImage
      .toPng(divRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "div-image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Error converting div to image:", error);
      });
  };

  return (
    <div>
      {/* The div content you want to download as an image */}
      <div ref={divRef}>
        <h1>Hello, world!</h1>
        <p>This is a div to be downloaded as an image.</p>
      </div>
      <button onClick={downloadImage}>Download as Image</button>
    </div>
  );
}

export default DemoEmail;
