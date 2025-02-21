import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min.js";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaAnimation = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x363639,
          color1: 0xbeb3b3,
          color2: 0xe6,
          wingSpan: 20.0,
          speedLimit: 6.0,
          separation: 42.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} className="bg-animation" style={{ height: "100vh" }}>
      {props.children}
    </div>
  );
};

export default VantaAnimation;
