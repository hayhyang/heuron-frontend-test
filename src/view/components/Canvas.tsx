import React, { useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
